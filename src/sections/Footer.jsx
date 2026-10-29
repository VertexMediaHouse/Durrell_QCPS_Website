import { footer, nav } from '../data';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a className="wordmark" href="/">
              ESTAVORA
            </a>
            <nav aria-label="Footer">
              <ul className="site-footer__nav">
                {nav.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="site-footer__pitch">
            <h3>
              {footer.tagline[0]}
              <br />
              {footer.tagline[1]}
            </h3>
            <a className="btn btn--outline-light" href="/contact">
              {footer.cta}
            </a>
          </div>

          <div className="site-footer__contact">
            <h4>{footer.contactHeading}</h4>
            <ul>
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
          </div>
        </div>

        <p className="site-footer__wordmark" aria-hidden="true">
          ESTAVORA
        </p>

        <div className="site-footer__bar">
          <span>{footer.copyright}</span>
          <ul>
            {footer.legal.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
