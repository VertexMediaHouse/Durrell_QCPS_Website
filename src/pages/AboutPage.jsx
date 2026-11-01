import {
  aboutIntro,
  principles,
  team,
  aboutStat,
  aboutFaqs,
} from '../data';
import { Cta } from '../sections/Cta';

export function AboutPage() {
  return (
    <>
      {/* Paper hero: heading left, body right, full-width image below */}
      <section className="about-hero">
        <div className="container">
          <span className="eyebrow reveal">{aboutIntro.eyebrow}</span>
          <div className="about-hero__head">
            <h1 className="about-hero__heading reveal">{aboutIntro.heading}</h1>
            <p className="about-hero__body reveal">{aboutIntro.body}</p>
          </div>
          <div className="about-hero__media reveal">
            <img src={aboutIntro.image} alt="Inside the QCPS office" />
          </div>
        </div>
      </section>

      {/* Split layout: sticky intro left, large inline numerals right — distinct from Steps' 4-card grid */}
      <section className="section section--paper-alt">
        <div className="container principles">
          <div className="principles__head reveal">
            <span className="eyebrow">How we work</span>
            <h2>Three things that don’t change, no matter the market.</h2>
            <p>
              Markets shift, inventory changes, timelines compress. These stay
              fixed regardless.
            </p>
          </div>
          <ol className="principles__list">
            {principles.map((p, i) => (
              <li key={p.no} className="principle reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="principle__no">{p.no}</span>
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Hover-lift card device from Properties, repurposed as a team grid */}
      <section className="section">
        <div className="container">
          <span className="eyebrow reveal">Acquisitions Leadership</span>
          <div className="split-head reveal">
            <h2>Direct leadership, without layered bureaucracy.</h2>
            <div className="split-head__aside">
              <p>
                Our principals evaluate transactions directly. You work with senior decision-makers who hold capital authority from day one.
              </p>
            </div>
          </div>
          <ul className="team-grid">
            {team.map((member, i) => (
              <li key={member.name} className="team-card reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="team-card__media">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stat-card breakout device from Hero, paired with a quote instead of search copy */}
      <section className="section section--dark about-stat">
        <div className="container about-stat__grid">
          <div className="about-stat__media reveal">
            <img src={aboutStat.image} alt="Commercial property transaction completion" loading="lazy" />
            <div className="about-stat__card">
              <strong>
                {aboutStat.statValue}
                <span className="hero__stat-plus">{aboutStat.statSuffix}</span>
              </strong>
              <span className="hero__stat-label">{aboutStat.statLabel}</span>
            </div>
          </div>
          <blockquote className="about-stat__quote reveal">
            <span className="quote__mark" aria-hidden="true">&rdquo;</span>
            {aboutStat.quote}
            <span className="about-stat__attrib">Renata Soto — Head of Acquisitions</span>
          </blockquote>
        </div>
      </section>

      {/* Native <details> accordion device from Faqs, on paper this time */}
      <section className="section section--paper">
        <div className="container faq about-faq">
          <div className="faq__head reveal">
            <span className="eyebrow">A few questions</span>
            <h2>About working with us.</h2>
            <p>
              If something isn’t covered here, ask — we’d rather answer it
              properly than leave you guessing.
            </p>
          </div>
          <ul className="faq__list reveal">
            {aboutFaqs.map((f) => (
              <li key={f.q}>
                <details name="about-faqs">
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

      <Cta />
    </>
  );
}
