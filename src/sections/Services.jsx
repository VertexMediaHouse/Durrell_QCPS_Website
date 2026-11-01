import { services } from '../data';

// one mark per service, in data order: buy, sell, rent, advise
const marks = [
  'M15.5 8.5a3.5 3.5 0 1 0-3.4 3.5L7 17.1V20h3v-2h2v-2h2l1.1-1.1a3.5 3.5 0 0 0 .4-6.4Z',
  'M4 11V5a1 1 0 0 1 1-1h6l8 8-7 7-8-8Z M8 8h.01',
  'M4 11 12 4l8 7 M6 10v9h12v-9',
  'M4 19V5 M4 19h16 M8 16l3.5-4 3 2.5L20 8',
];

export function Services() {
  return (
    <section className="section section--paper">
      <div className="container">
        <span className="eyebrow reveal">Commercial Solutions</span>
        <div className="split-head reveal">
          <h2>Direct, reliable commercial real estate services.</h2>
          <div className="split-head__aside">
            <p>
              Whether you need to sell a commercial building as-is for cash, or acquire functional space for your business, we handle every transaction directly with transparent terms.
            </p>
          </div>
        </div>

        <ul className="svc-grid">
          {services.map((s, i) => (
            <li
              key={s.name}
              /* 2nd card dark, last accent — the export's rhythm */
              className={`svc reveal${i === 1 ? ' svc--dark' : ''}${i === services.length - 1 ? ' svc--accent' : ''}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="svc__mark" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d={marks[i]} />
                </svg>
              </span>
              <h3>{s.name}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
