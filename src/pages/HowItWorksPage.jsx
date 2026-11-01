import { useEffect, useRef, useState } from 'react';
import { howIntro, howJourney, howStages, howLedger, howClose } from '../data';
import { FaqExplorer } from '../sections/FaqExplorer';

export function HowItWorksPage() {
  const [active, setActive] = useState(howStages[0].id);
  const rowsRef = useRef(null);

  // One observer for the whole journey: whichever stage row owns the middle
  // band of the viewport is the active one. No scroll handler, no math.
  useEffect(() => {
    const rows = rowsRef.current?.querySelectorAll('[data-stage]');
    if (!rows?.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.dataset.stage);
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Typographic opener: no photo, no stat card — oversized heading with
          an inline metric strip under a hairline. */}
      <section className="how-open">
        <div className="container">
          <span className="eyebrow reveal">{howIntro.eyebrow}</span>
          <h1 className="how-open__heading reveal">{howIntro.heading}</h1>
          <p className="how-open__body reveal">{howIntro.body}</p>
          <dl className="how-metrics reveal">
            {howIntro.metrics.map((m) => (
              <div key={m.label} className="how-metric">
                <dt>{m.value}</dt>
                <dd>{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Device: sticky stage rail tracking a column of full-height rows. */}
      <section className="section section--dark how-journey">
        <div className="container">
          <span className="eyebrow reveal">{howJourney.eyebrow}</span>
          <h2 className="how-journey__heading reveal">{howJourney.heading}</h2>
          <p className="how-journey__body reveal">{howJourney.body}</p>
        </div>
        <div className="container how-journey__grid">
          <nav className="how-rail" aria-label="Stages">
            <ol>
              {howStages.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`how-rail__item${active === s.id ? ' is-active' : ''}`}
                    aria-current={active === s.id ? 'step' : undefined}
                  >
                    <span className="how-rail__num">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="how-rail__label">{s.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="how-rows" ref={rowsRef}>
            {howStages.map((s) => (
              <article key={s.id} id={s.id} data-stage={s.id} className="how-row">
                <h2 className="reveal">{s.title}</h2>
                <p className="reveal">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Device: two-column ledger. Paired rows on a hairline grid — no cards,
          no photos, deliberately table-like. */}
      <section className="section section--paper-alt">
        <div className="container">
          <span className="eyebrow reveal">{howLedger.eyebrow}</span>
          <h2 className="how-ledger__heading reveal">{howLedger.heading}</h2>
          <p className="how-ledger__body reveal">{howLedger.body}</p>

          <div className="how-ledger reveal">
            <div className="how-ledger__cols" aria-hidden="true">
              <span>QCPS</span>
              <span>You</span>
            </div>
            <ul>
              {howLedger.rows.map((r) => (
                <li key={r.ours}>
                  <span className="how-ledger__ours">
                    <span className="how-ledger__dot" aria-hidden="true" />
                    {r.ours}
                  </span>
                  <span className="how-ledger__yours">{r.yours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqExplorer />

      {/* Close: half photo, half paper, split down the container — not the
          home page's inset image panel. */}
      <section className="how-close">
        <div className="how-close__media">
          <img src={howClose.image} alt="" loading="lazy" />
        </div>
        <div className="how-close__panel">
          <div className="how-close__inner reveal">
            <span className="eyebrow">{howClose.eyebrow}</span>
            <h2>{howClose.heading}</h2>
            <p>{howClose.body}</p>
            <a className="btn btn--primary" href="/contact">
              {howClose.button}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
