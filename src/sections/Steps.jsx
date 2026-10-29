import { steps } from '../data';

export function Steps() {
  return (
    <section className="section section--paper-alt">
      <div className="container">
        <span className="eyebrow reveal">How it works</span>
        <div className="split-head reveal">
          <h2>Four clear steps to your next move.</h2>
          <div className="split-head__aside">
            <p>
              A calm, structured process so you always know where you are and
              what comes next.
            </p>
          </div>
        </div>

        <ol className="steps">
          {steps.map((s, i) => (
            <li
              key={s.no}
              className="step reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="step__no">{s.no}</span>
              <h3>{s.name}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
