import { Fragment, useEffect, useState } from 'react';
import { navMain, navCompany } from '../data';

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  // marks the nav entry for the page actually being viewed; '/' only matches
  // the homepage exactly, so subpages no longer all light up "Home"
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const companyActive = navCompany.some((i) => i.href === path);

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
        <a className="wordmark" href="/" aria-label="QCPS — Quick Commercial Property Solution">
          <span className="wordmark__dot" />
          <span className="wordmark__text">QCPS</span>
        </a>

        <nav className="site-nav" aria-label="Main">
          <ul>
            {navMain.map((item, i) => {
              const isActive = item.href === path;
              return (
                <Fragment key={item.label}>
                <li>
                  <a
                    href={item.href}
                    className={`nav-chip-link${isActive ? ' is-active-chip' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
                {i === 1 && (
            <li className="nav-dropdown">
              <button
                type="button"
                className={companyActive ? 'is-active-chip' : undefined}
                aria-haspopup="true"
              >
                Company
              </button>
              <ul className="nav-dropdown__menu">
                {navCompany.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={item.href === path ? 'is-active-chip' : ''}
                      aria-current={item.href === path ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
                )}
                </Fragment>
              );
            })}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a className="btn btn--outline-dark site-header__btn-offer" href="/contact">
            Get My Offer
          </a>
          <a className="btn btn--primary site-header__cta" href="/properties">
            <span className="header-cta__dot" />
            Explore Properties
          </a>
        </div>

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
          {navMain.map((item, i) => (
            <Fragment key={item.label}>
            <li>
              <a
                href={item.href}
                className={item.href === path ? 'is-active-chip' : ''}
                aria-current={item.href === path ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
            {i === 1 && (
              <>
                <li className="mobile-nav__group">Company</li>
          {navCompany.map((item) => (
            <li key={item.label} className="mobile-nav__sub">
              <a
                href={item.href}
                className={item.href === path ? 'is-active-chip' : ''}
                aria-current={item.href === path ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
              </>
            )}
            </Fragment>
          ))}
        </ul>
        <div className="mobile-nav__actions">
          <a
            className="btn btn--outline-dark"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Get My Offer
          </a>
          <a
            className="btn btn--primary"
            href="/properties"
            onClick={() => setOpen(false)}
          >
            Explore Properties
          </a>
        </div>
      </div>
    </header>
  );
}
