import { whyUs } from '../data';

export function WhyUs() {
  return (
    <section className="section">
      <div className="container why">
        <div className="why__media reveal">
          <img
            src="/images/0We408UybsOypjUhJK5K0QAvj6E.jpg"
            alt="Commercial property advisory and facility inspection"
            width="900"
            height="820"
            loading="lazy"
          />
          <span className="why__badge">Direct capital &amp; dependable execution</span>
        </div>

        <div className="why__panel reveal">
          <span className="eyebrow">Why QCPS</span>
          <h2>Why commercial owners and businesses work with QCPS.</h2>
          <ul className="why__list">
            {whyUs.map((w) => (
              <li key={w.name}>
                <span className="why__icon" aria-hidden="true" />
                <div>
                  <h3>{w.name}</h3>
                  <p>{w.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
