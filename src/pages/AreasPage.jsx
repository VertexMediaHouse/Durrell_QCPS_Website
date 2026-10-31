import { areasIntro, areas, areasLimits, areasLocal, areasClose } from '../data';

// Composition note: geography reads as a gazetteer, not a process. So the page
// runs masthead → coverage ledger → mixed-proportion area cards (one wide
// feature, four siblings) → dark limits ledger → numbered local-knowledge list
// → full-bleed close. Deliberately avoids WhoWeHelp's expanding panels and
// alternating entries so the two pages aren't swappable.
export function AreasPage() {
  const [feature, ...rest] = areas;

  return (
    <>
      {/* Masthead: light, type-led. The coverage numbers sit inline on a
          hairline rule rather than in cards — a ledger, not a stat grid. */}
      <section className="areas-mast">
        <div className="container">
          <span className="eyebrow reveal">{areasIntro.eyebrow}</span>
          <h1 className="areas-mast__heading reveal">{areasIntro.heading}</h1>
          <div className="areas-mast__lower">
            <p className="areas-mast__body reveal">{areasIntro.body}</p>
            <dl className="areas-mast__stats reveal">
              {areasIntro.stats.map((s) => (
                <div key={s.label} className="areas-mast__stat">
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Gazetteer. The feature card is horizontal and full-width; siblings are
          a 2-up vertical grid. Hover-lift texture from Properties/Journal. */}
      <section className="section section--paper-alt areas-list">
        <div className="container">
          <article className="area-feature reveal" id={feature.id}>
            <a href="/contact">
              <div className="area-feature__media">
                <img src={feature.image} alt="" />
                <span className="area-feature__badge">Most active</span>
              </div>
              <div className="area-feature__text">
                <header className="area__head">
                  <h2>{feature.name}</h2>
                  <span className="area__state">{feature.state}</span>
                </header>
                <p className="area__blurb">{feature.blurb}</p>
                <ul className="area__tags">
                  {feature.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <dl className="area__figures">
                  <div>
                    <dt>{feature.price}</dt>
                    <dd>{feature.priceLabel}</dd>
                  </div>
                  <div>
                    <dt>{feature.days}</dt>
                    <dd>{feature.daysLabel}</dd>
                  </div>
                </dl>
              </div>
            </a>
          </article>

          <div className="area-grid">
            {rest.map((a) => (
              <article key={a.id} className="area-card reveal" id={a.id}>
                <a href="/contact">
                  <div className="area-card__media">
                    <img src={a.image} alt="" loading="lazy" />
                  </div>
                  <div className="area-card__text">
                    <header className="area__head">
                      <h3>{a.name}</h3>
                      <span className="area__state">{a.state}</span>
                    </header>
                    <p className="area__blurb">{a.blurb}</p>
                    <ul className="area__tags">
                      {a.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <dl className="area__figures">
                      <div>
                        <dt>{a.price}</dt>
                        <dd>{a.priceLabel}</dd>
                      </div>
                      <div>
                        <dt>{a.days}</dt>
                        <dd>{a.daysLabel}</dd>
                      </div>
                    </dl>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dark candour band. Sticky head on the left, hairline-separated rows on
          the right — no accordion, no cards. */}
      <section className="section section--dark areas-limits">
        <div className="container areas-limits__grid">
          <div className="areas-limits__head reveal">
            <span className="eyebrow">{areasLimits.eyebrow}</span>
            <h2>{areasLimits.heading}</h2>
            <p>{areasLimits.body}</p>
          </div>
          <dl className="areas-limits__rows reveal">
            {areasLimits.rows.map((r) => (
              <div key={r.q} className="areas-limits__row">
                <dt>{r.q}</dt>
                <dd>{r.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Numbered list, Steps device — large numeral, four across. */}
      <section className="section section--paper areas-local">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{areasLocal.eyebrow}</span>
            <h2>{areasLocal.heading}</h2>
          </div>
          <ol className="areas-local__list">
            {areasLocal.items.map((i) => (
              <li key={i.no} className="areas-local__item reveal">
                <span className="areas-local__no">{i.no}</span>
                <h3>{i.name}</h3>
                <p>{i.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Close on the Hero device: full-bleed inset image, gradient, copy low. */}
      <section className="areas-close">
        <div className="areas-close__frame">
          <img src={areasClose.image} alt="" loading="lazy" />
          <div className="areas-close__inner reveal">
            <span className="eyebrow">{areasClose.eyebrow}</span>
            <h2>{areasClose.heading}</h2>
            <p>{areasClose.body}</p>
            <a className="btn btn--primary" href="/contact">
              {areasClose.button}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
