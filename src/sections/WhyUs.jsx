import { whyUs } from '../data';

export function WhyUs() {
  return (
    <section className="section">
      <div className="container why">
        <div className="why__media reveal">
          <img
            src="/images/0We408UybsOypjUhJK5K0QAvj6E.jpg"
            alt="A warmly lit dining space"
            width="900"
            height="820"
            loading="lazy"
          />
          <span className="why__badge">Advice that puts your priorities first</span>
        </div>

        <div className="why__panel reveal">
          <span className="eyebrow">Why ESTAVORA</span>
          <h2>Good property decisions start with the right people.</h2>
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
