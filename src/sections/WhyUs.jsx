import { Zap, Hammer, BadgeDollarSign, KeyRound } from 'lucide-react';
import { whyUs } from '../data';

// same order as whyUs in data.js
const icons = [Zap, Hammer, BadgeDollarSign, KeyRound];

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
            {whyUs.map((w, i) => {
              const Icon = icons[i];
              return (
              <li key={w.name}>
                <span className="why__icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <div>
                  <h3>{w.name}</h3>
                  <p>{w.body}</p>
                </div>
              </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
