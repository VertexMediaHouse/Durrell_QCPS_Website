import { useRef, useState } from 'react';
import { faqGroups, faqExplorer } from '../data';

export function FaqExplorer() {
  const [group, setGroup] = useState(0);
  const [open, setOpen] = useState(0);
  const tabsRef = useRef(null);

  const current = faqGroups[group];

  const pick = (i) => {
    setGroup(i);
    setOpen(0); // first question of the new group, so the pane is never blank
  };

  // roving arrow-key navigation — expected of a tablist, and free to add
  const onKeyDown = (e) => {
    const last = faqGroups.length - 1;
    const next = { ArrowRight: group + 1, ArrowDown: group + 1, ArrowLeft: group - 1, ArrowUp: group - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const i = Math.min(Math.max(next, 0), last);
    pick(i);
    tabsRef.current?.querySelectorAll('button')[i]?.focus();
  };

  return (
    <section className="section faq-x">
      <div className="container">
        <div className="faq-x__head">
          <div className="reveal">
            <span className="eyebrow">{faqExplorer.eyebrow}</span>
            <h2>{faqExplorer.heading}</h2>
          </div>
          <p className="reveal">{faqExplorer.body}</p>
        </div>

        <div className="faq-x__panel reveal">
          {/* left: categories */}
          <div className="faq-x__rail">
            <div
              className="faq-x__tabs"
              role="tablist"
              aria-orientation="vertical"
              aria-label="Question categories"
              ref={tabsRef}
              onKeyDown={onKeyDown}
            >
              {faqGroups.map((g, i) => (
                <button
                  key={g.id}
                  type="button"
                  role="tab"
                  id={`faq-tab-${g.id}`}
                  aria-selected={i === group}
                  aria-controls={`faq-pane-${g.id}`}
                  tabIndex={i === group ? 0 : -1}
                  className={`faq-x__tab${i === group ? ' is-active' : ''}`}
                  onClick={() => pick(i)}
                >
                  <span className="faq-x__tab-label">{g.label}</span>
                  <span className="faq-x__tab-count">{g.items.length}</span>
                </button>
              ))}
            </div>

            <div className="faq-x__ask">
              <h3>{faqExplorer.askHeading}</h3>
              <p>{faqExplorer.askBody}</p>
              <a className="btn btn--light" href="/contact">
                {faqExplorer.askButton}
              </a>
            </div>
          </div>

          {/* right: questions for the active category */}
          <div
            className="faq-x__list"
            role="tabpanel"
            id={`faq-pane-${current.id}`}
            aria-labelledby={`faq-tab-${current.id}`}
            tabIndex={-1}
          >
            <p className="faq-x__blurb">{current.blurb}</p>

            {current.items.map((item, i) => {
              const isOpen = i === open;
              return (
                <div
                  key={item.q}
                  className={`faq-x__item${isOpen ? ' is-open' : ''}`}
                >
                  <h3>
                    <button
                      type="button"
                      className="faq-x__q"
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${current.id}-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span className="faq-x__q-no">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="faq-x__q-text">{item.q}</span>
                      <span className="faq-x__q-icon" aria-hidden="true" />
                    </button>
                  </h3>
                  {/* grid-rows 0fr→1fr animates height without measuring it */}
                  <div
                    className="faq-x__a"
                    id={`faq-a-${current.id}-${i}`}
                    role="region"
                    inert={!isOpen ? '' : undefined}
                  >
                    <div>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
