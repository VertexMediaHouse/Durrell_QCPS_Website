import { faqs } from '../data';

export function Faqs() {
  return (
    <section className="section">
      <div className="container faq">
        <div className="faq__head reveal">
          <span className="eyebrow">FAQs</span>
          <h2>
            Questions,
            <br />
            answered.
          </h2>
          <p>
            Can’t find what you’re looking for? Our team is happy to help with
            anything else.
          </p>
          <a className="btn btn--dark" href="/contact">
            Contact Our Team
          </a>
        </div>

        {/* native <details> — no state, keyboard + screen readers for free */}
        <ul className="faq__list reveal">
          {faqs.map((f) => (
            <li key={f.q}>
              <details name="faqs">
                <summary>
                  <span>{f.q}</span>
                  <span className="faq__icon" aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
