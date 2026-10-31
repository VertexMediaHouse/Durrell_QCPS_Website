import { testimonials } from '../data';

export function Testimonials() {
  return (
    <section className="section section--paper" id="seller-reviews">
      <div className="container">
        <span className="eyebrow reveal">Client stories</span>
        <div className="section-head reveal">
          <h2>A better experience, from first search to final keys.</h2>
        </div>

        <ul className="quote-grid">
          {testimonials.map((t, i) => (
            <li
              key={t.name}
              className="quote reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <figure>
                <span className="quote__mark" aria-hidden="true">
                  &rdquo;
                </span>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <img
                    src={t.image}
                    alt=""
                    width="96"
                    height="96"
                    loading="lazy"
                  />
                  <span>
                    <strong>{t.name}</strong>
                    <span className="quote__detail">{t.detail}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
