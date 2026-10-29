import { journal } from '../data';

export function Journal() {
  const [lead, ...rest] = journal;

  return (
    <section className="section section--paper">
      <div className="container">
        <span className="eyebrow reveal">Latest journal</span>
        <div className="split-head reveal">
          <h2>Ideas and insight for your next move.</h2>
          <div className="split-head__aside">
            <p>
              Practical advice and property perspectives, wherever you are in
              your journey.
            </p>
            <a className="btn btn--dark" href="/journal">
              Read the Journal
            </a>
          </div>
        </div>

        <div className="journal">
          <article className="post post--lead reveal">
            <a href={lead.href}>
              <div className="post__media">
                <img
                  src={lead.image}
                  alt=""
                  width="900"
                  height="620"
                  loading="lazy"
                />
              </div>
              <div className="post__body">
                <Meta category={lead.category} read={lead.read} />
                <h3>{lead.title}</h3>
                <p>{lead.body}</p>
              </div>
            </a>
          </article>

          <ul className="post-list">
            {rest.map((p, i) => (
              <li
                key={p.title}
                className="post reveal"
                style={{ transitionDelay: `${(i + 1) * 70}ms` }}
              >
                <a href={p.href}>
                  <div className="post__media">
                    <img
                      src={p.image}
                      alt=""
                      width="440"
                      height="300"
                      loading="lazy"
                    />
                  </div>
                  <div className="post__body">
                    <Meta category={p.category} read={p.read} />
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Meta({ category, read }) {
  return (
    <p className="post__meta">
      <span className="post__cat">{category}</span>
      <span aria-hidden="true">·</span>
      <span>{read}</span>
    </p>
  );
}
