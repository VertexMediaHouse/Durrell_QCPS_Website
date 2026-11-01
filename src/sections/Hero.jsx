import { hero } from '../data';

export function Hero() {
  return (
    <section className="hero">
      {/* Full-bleed background image */}
      <div className="hero__bg">
        <img
          src={hero.image}
          alt="Modern commercial property and executive business facility"
          width="1920"
          height="1080"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__inner container">
        <div className="hero__copy">
          <span className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            {hero.eyebrow}
          </span>
          <h1>{hero.heading}</h1>
          <p className="hero__body">{hero.body}</p>
          <div className="hero__actions">
            <a className="btn btn--primary hero__btn" href="/properties">
              <span className="hero__btn-dot" />
              Explore Properties
            </a>
            <a className="btn btn--ghost-light hero__btn" href="/contact">
              <span className="hero__btn-dot hero__btn-dot--dark" />
              Talk to an Advisor
            </a>
          </div>
        </div>

        {/* Floating stat card — bottom-right */}
        <div className="hero__stat-card">
          <div className="hero__stat-left">
            <strong>
              {hero.statValue}
              <span className="hero__stat-plus">{hero.statSuffix}</span>
            </strong>
            <span className="hero__stat-label">{hero.statLabel}</span>
            <div className="hero__avatars">
              <img src="/images/ScqYgwXGtkYn4LQsXnnRvjbKeQ.jpg" alt="" />
              <img src="/images/UBtXSOm60enCUciUxosYAh2Tb3U.jpg" alt="" />
              <img src="/images/srdofgzEhtrL8TxYBsevEIF9ldA.jpg" alt="" />
            </div>
          </div>
          <div className="hero__stat-thumb">
            <img
              src="/images/ZOFHTFDotyaUTQ8cgcNJouab1c.jpg"
              alt="Interior preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
