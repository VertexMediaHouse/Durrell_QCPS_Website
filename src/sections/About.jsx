import { about } from '../data';

export function About() {
  return (
    <section className="section about-section">
      <div className="container">
        <div className="about reveal">
          <div className="about__copy">
            <span className="eyebrow">{about.eyebrow}</span>
            <h2>{about.heading}</h2>
            <p>{about.body}</p>
            <a className="btn btn--light" href="/about">
              {about.cta}
            </a>
          </div>
          <div className="about__media">
            <img
              src={about.image}
              alt="QCPS team completing a commercial property transaction"
              width="900"
              height="700"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
