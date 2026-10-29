import { properties } from '../data';

export function Properties() {
  return (
    <section className="section" id="properties">
      <div className="container">
        <span className="eyebrow reveal">Featured homes</span>
        <div className="split-head reveal">
          <h2>Exceptional properties, worth a closer look.</h2>
          <div className="split-head__aside">
            <p>
              Explore a considered collection of homes chosen for their
              character, location, and potential.
            </p>
            <a className="btn btn--dark" href="/properties">
              View All Properties
            </a>
          </div>
        </div>

        <ul className="prop-grid">
          {properties.map((p, i) => (
            <li
              key={p.name}
              className="prop reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <a href={p.href}>
                <div className="prop__media">
                  <img
                    src={p.image}
                    alt={`${p.name} in ${p.location}`}
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                  <span className="prop__tag">{p.tag}</span>
                </div>
                <div className="prop__body">
                  <h3>{p.name}</h3>
                  <p className="prop__loc">{p.location}</p>
                  <ul className="prop__specs">
                    <li>{p.beds}</li>
                    <li>{p.baths}</li>
                    <li>{p.area}</li>
                  </ul>
                  <div className="prop__foot">
                    <span className="prop__price">{p.price}</span>
                    <span className="prop__link">View Property</span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
