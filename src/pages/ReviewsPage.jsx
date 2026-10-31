import { reviewsIntro, reviews, reviewsCritique, reviewsClose } from '../data';

// Five filled stars out of five, accent for earned ones. aria-label carries the
// value so the row isn't read out as five separate glyphs.
function Stars({ rating }) {
  return (
    <span className="stars" role="img" aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} viewBox="0 0 20 20" aria-hidden="true" className={n <= rating ? 'is-on' : ''}>
          <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.6 7.7l5.8-.8z" />
        </svg>
      ))}
    </span>
  );
}

// Composition note: reviews are evidence, so the page reads as a record —
// verdict masthead with a rating ledger, one long-form lead, then a transcript
// list of alternating full-width entries. Deliberately avoids the homepage's
// quote-card grid and the Areas page's photo cards.
export function ReviewsPage() {
  const [lead, ...rest] = reviews;

  return (
    <>
      {/* Masthead: the score sits beside the heading as a verdict block. */}
      <section className="rev-mast">
        <div className="container">
          <span className="eyebrow reveal">{reviewsIntro.eyebrow}</span>
          <h1 className="rev-mast__heading reveal">{reviewsIntro.heading}</h1>
          <div className="rev-mast__lower">
            <p className="rev-mast__body reveal">{reviewsIntro.body}</p>
            <dl className="rev-mast__stats reveal">
              {reviewsIntro.stats.map((s) => (
                <div key={s.label} className="rev-mast__stat">
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Lead review: portrait left, long quote right, on a white panel. */}
      <section className="section section--paper-alt rev-lead-wrap">
        <div className="container">
          <article className="rev-lead reveal">
            <div className="rev-lead__aside">
              <img src={lead.image} alt="" width="120" height="120" />
              <Stars rating={lead.rating} />
              <strong className="rev-lead__name">{lead.name}</strong>
              <span className="rev-lead__detail">{lead.detail}</span>
              <span className="rev-lead__meta">{lead.meta}</span>
            </div>
            <figure className="rev-lead__body">
              <h2>{lead.title}</h2>
              <blockquote>{lead.quote}</blockquote>
            </figure>
          </article>
        </div>
      </section>

      {/* Transcript list: full-width rows, meta rail on the left, review on the
          right. Hairline separated — a record, not a set of cards. */}
      <section className="section section--paper rev-list">
        <div className="container">
          <ol className="rev-rows">
            {rest.map((r) => (
              <li key={r.id} className="rev-row reveal">
                <div className="rev-row__who">
                  <img src={r.image} alt="" width="56" height="56" loading="lazy" />
                  <div>
                    <strong>{r.name}</strong>
                    <span className="rev-row__detail">{r.detail}</span>
                    <span className="rev-row__meta">{r.meta}</span>
                  </div>
                </div>
                <figure className="rev-row__text">
                  <Stars rating={r.rating} />
                  <h3>{r.title}</h3>
                  <blockquote>{r.quote}</blockquote>
                </figure>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Dark candour band — the complaints, answered. */}
      <section className="section section--dark rev-critique">
        <div className="container rev-critique__grid">
          <div className="rev-critique__head reveal">
            <span className="eyebrow">{reviewsCritique.eyebrow}</span>
            <h2>{reviewsCritique.heading}</h2>
            <p>{reviewsCritique.body}</p>
          </div>
          <dl className="rev-critique__rows reveal">
            {reviewsCritique.rows.map((r) => (
              <div key={r.q} className="rev-critique__row">
                <dt>{r.q}</dt>
                <dd>{r.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Close: hero device, copy pinned low. */}
      <section className="rev-close">
        <div className="rev-close__frame">
          <img src={reviewsClose.image} alt="" loading="lazy" />
          <div className="rev-close__inner reveal">
            <span className="eyebrow">{reviewsClose.eyebrow}</span>
            <h2>{reviewsClose.heading}</h2>
            <p>{reviewsClose.body}</p>
            <a className="btn btn--primary" href="/contact">
              {reviewsClose.button}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
