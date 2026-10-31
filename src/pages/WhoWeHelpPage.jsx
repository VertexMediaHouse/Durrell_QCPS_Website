import { whoMasthead, whoSegments, whoFaqs } from '../data';

export function WhoWeHelpPage() {
  return (
    <>
      {/* Hero: dark band, heading + copy above four expanding photo panels —
          one per segment. Hover/focus widens a panel (CSS flex-grow, no JS);
          each panel jumps to its entry below. */}
      <section className="whoh">
        <div className="container">
          <div className="whoh__head">
            <div>
              <span className="whoed-mast__label reveal">{whoMasthead.label}</span>
              <h1 className="whoh__heading reveal">{whoMasthead.heading}</h1>
            </div>
            <p className="whoh__body reveal">{whoMasthead.body}</p>
          </div>

          <ul className="whoh__panels reveal">
            {whoSegments.map((s, i) => (
              <li key={s.no} className="whoh__panel">
                <a href={`#seg-${s.no}`}>
                  <img src={whoMasthead.panels[i]} alt="" />
                  <span className="whoh__cap">
                    <span className="whoh__no">{s.no}</span>
                    <span className="whoh__name">{s.name}</span>
                    <span className="whoh__kicker">{s.kicker}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Device: full-width entries, numeral + name on one side, photo + stat on
          the other, sides alternating per entry — a case-file index, not a card grid */}
      <div className="whoed-index">
        {whoSegments.map((s, i) => (
          <section
            key={s.no}
            id={`seg-${s.no}`}
            className={`whoed-entry${i % 2 ? ' whoed-entry--flip' : ''}`}
          >
            <div className="container whoed-entry__grid">
              <div className="whoed-entry__text reveal">
                <span className="whoed-entry__no">{s.no}</span>
                <h2>{s.name}</h2>
                <p className="whoed-entry__kicker">{s.kicker}</p>
                <p className="whoed-entry__body">{s.body}</p>
              </div>
              <div className="whoed-entry__media reveal">
                <img src={s.image} alt="" loading="lazy" />
                <div className="whoed-entry__stat">
                  <strong>{s.stat.value}</strong>
                  <span>{s.stat.label}</span>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* FAQ as a dense two-column list, no accordion icons — closes the index
          rather than opening a new device */}
      <section className="whoed-faq">
        <div className="container whoed-faq__grid">
          <div className="whoed-faq__head reveal">
            <span className="whoed-mast__label">Notes</span>
            <h2>Didn’t see yourself above?</h2>
            <p>
              These are the shapes the work takes most often, not a
              checklist. Tell us the situation and we’ll tell you where it
              fits.
            </p>
            <a className="btn btn--dark" href="/contact">
              Talk to an advisor
            </a>
          </div>
          <dl className="whoed-faq__list reveal">
            {whoFaqs.map((f) => (
              <div key={f.q} className="whoed-faq__row">
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
