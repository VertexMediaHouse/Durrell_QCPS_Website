import { useEffect, useState } from 'react';
import { nav } from '../data';

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock the page behind the open mobile sheet
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-header${solid ? ' is-solid' : ''}`}>
      <div className="site-header__inner container">
        <a className="wordmark" href="/" aria-label="ESTAVORA — home">
          <span className="wordmark__dot" />
          ESTAVORA
        </a>

        <nav className="site-nav" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.href === '/' ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--primary site-header__cta" href="/properties">
          <span className="header-cta__dot" />
          Explore Properties
        </a>

        <button
          className="burger"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? 'burger__bar is-x1' : 'burger__bar'} />
          <span className={open ? 'burger__bar is-hide' : 'burger__bar'} />
          <span className={open ? 'burger__bar is-x2' : 'burger__bar'} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <ul>
          {nav.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn--primary" href="/properties">
          Explore Properties
        </a>
      </div>
    </header>
  );
}
