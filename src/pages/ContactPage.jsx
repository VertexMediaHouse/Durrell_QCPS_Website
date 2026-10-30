import { useState } from 'react';
import { contact } from '../data';

const icons = {
  mail: 'M3 7h18v10H3z M3 7l9 6 9-6',
  phone: 'M6 3h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 4 5a2 2 0 0 1 2-2Z',
  pin: 'M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3 2',
};

export function ContactPage() {
  const [sent, setSent] = useState(false);

  // ponytail: no backend yet — native validation gates it, then we confirm
  // locally. Swap the body of this for a fetch() when an endpoint exists.
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="contact-page">
        <div className="container">
          <span className="eyebrow reveal">{contact.eyebrow}</span>
          <div className="contact-head">
            <h1 className="reveal">
              {contact.heading[0]}
              <br />
              {contact.heading[1]}
            </h1>
            <p className="reveal">{contact.body}</p>
          </div>

          <div className="contact-grid">
            <div className="contact-card reveal">
              <h2>{contact.formHeading}</h2>

              {sent ? (
                <p className="contact-sent" role="status">
                  Thank you — your enquiry is with us. We’ll be in touch using
                  the details you provided.
                </p>
              ) : (
                <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
                  <div className="contact-form__row">
                    <Field id="first" label="First Name" placeholder="Jane" autoComplete="given-name" required />
                    <Field id="last" label="Last Name" placeholder="Smith" autoComplete="family-name" required />
                  </div>
                  <div className="contact-form__row">
                    <Field id="email" label="Email Address" type="email" placeholder="jane@example.com" autoComplete="email" required />
                    <Field id="phone" label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" autoComplete="tel" />
                  </div>
                  <div className="contact-form__row">
                    <div className="contact-field">
                      <label htmlFor="interest">I’m Interested In</label>
                      <div className="contact-select">
                        <select id="interest" name="interest" defaultValue={contact.interests[0]}>
                          {contact.interests.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                    <Field id="location" label="Preferred Location" placeholder="e.g. Brooklyn, NY" />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us a little about what you’re looking for"
                      required
                    />
                  </div>

                  <div className="contact-consent">
                    <input id="consent" name="consent" type="checkbox" required />
                    <label htmlFor="consent">
                      {contact.consent}{' '}
                      <a href="/privacy-policy">Privacy Policy</a> for details.
                    </label>
                  </div>

                  <button className="btn btn--primary contact-submit" type="submit">
                    <span className="header-cta__dot" aria-hidden="true" />
                    {contact.submit}
                  </button>
                </form>
              )}
            </div>

            <div className="contact-aside">
            <aside className="contact-details reveal">
              <span className="eyebrow contact-details__eyebrow">
                {contact.detailsEyebrow}
              </span>
              <ul>
                {contact.details.map((d) => (
                  <li key={d.label}>
                    <span className="contact-details__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d={icons[d.icon]} />
                      </svg>
                    </span>
                    <span className="contact-details__text">
                      <span className="contact-details__label">{d.label}</span>
                      {d.href ? (
                        <a href={d.href}>{d.value}</a>
                      ) : (
                        <span className="contact-details__value">{d.value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="contact-details__note">{contact.detailsNote}</p>
            </aside>

            <div className="contact-call reveal">
              <h2>{contact.callHeading}</h2>
              <p>{contact.callBody}</p>
              <a
                className="btn btn--dark"
                href={`tel:${contact.details[1].value.replace(/[^+\d]/g, '')}`}
              >
                <span className="header-cta__dot" aria-hidden="true" />
                {contact.callButton}
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, type = 'text', ...rest }) {
  return (
    <div className="contact-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} {...rest} />
    </div>
  );
}
