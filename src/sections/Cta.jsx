import { cta } from '../data';

export function Cta() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta reveal">
          <img className="cta__bg" src={cta.image} alt="" loading="lazy" />
          <div className="cta__inner">
            <span className="eyebrow">{cta.eyebrow}</span>
            <h2>{cta.heading}</h2>
            <p>{cta.body}</p>
            <a className="btn btn--light" href="/contact">
              {cta.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
