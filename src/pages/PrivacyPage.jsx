import { privacy, footer } from '../data';

export function PrivacyPage() {
  return (
    <section className="legal">
      <div className="container">
        <header className="legal__head">
          <span className="eyebrow reveal">{privacy.eyebrow}</span>
          <h1 className="reveal">{privacy.heading}</h1>
          <p className="legal__intro reveal">{privacy.intro}</p>
          <p className="legal__updated reveal">{privacy.updated}</p>
        </header>

        <div className="legal__body">
          <nav className="legal__toc reveal" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              {privacy.sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal__prose">
            {privacy.sections.map((s, i) => (
              <section key={s.id} id={s.id} className="legal__section reveal">
                <h2>
                  <span className="legal__no">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </h2>
                {s.body.map((para) => (
                  <p key={para}>{para}</p>
                ))}
                {s.id === 'contact' && (
                  <ul className="legal__contact">
                    <li>
                      <a href={`mailto:${footer.email}`}>{footer.email}</a>
                    </li>
                    <li>
                      <a href={`tel:${footer.phone.replace(/[^+\d]/g, '')}`}>
                        {footer.phone}
                      </a>
                    </li>
                    <li>{footer.address}</li>
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
