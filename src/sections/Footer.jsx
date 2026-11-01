import { footer, nav } from '../data';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main 4-column rich footer content grid */}
        <div className="site-footer__grid">
          {/* Col 1: Brand identity, full name and mission */}
          <div className="site-footer__col site-footer__col--brand">
            <a className="wordmark wordmark--footer" href="/" aria-label="QCPS Home">
              <img className="wordmark__logo" src="/images/qcps-mark.png" alt="" width="54" height="60" />
              <span className="wordmark__stack">
            <span className="wordmark__title">Quick Close</span>
            <span className="wordmark__sub">Property Solutions</span>
          </span>
            </a>
            <p className="site-footer__acronym">Quick Commercial Property Solution</p>
            <p className="site-footer__about">
              Empowering commercial property buyers, sellers, and operators with transparent valuations, direct acquisitions, and zero broker commissions.
            </p>
            <div className="site-footer__badges-row">
              <div className="site-footer__badges">
                <span className="footer-pill-badge">Commercial Specialist</span>
                <span className="footer-pill-badge">Direct Buyer Desk</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 columns) */}
          <div className="site-footer__col site-footer__col--nav">
            <h4 className="site-footer__title">Navigation</h4>
            <ul className="site-footer__links site-footer__links--two-col">
              {nav.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <ul className="site-footer__legal-links site-footer__legal-links--nav">
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/contact">Direct Support</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions & Services */}
          <div className="site-footer__col">
            <h4 className="site-footer__title">Commercial Solutions</h4>
            <ul className="site-footer__links">
              <li>
                <a href="/properties">All Commercial Properties</a>
              </li>
              <li>
                <a href="/cash-offer-vs-agent">Cash Offer vs. Traditional Broker</a>
              </li>
              <li>
                <a href="/how-it-works">Transaction Process</a>
              </li>
              <li>
                <a href="/who-we-help">Who We Represent</a>
              </li>
              <li>
                <a href="/areas-we-serve">Strategic Metro Regions</a>
              </li>
              <li>
                <a href="/buyer-reviews">Client Case Studies & Reviews</a>
              </li>
              <li>
                <a href="/faq">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Pitch & Direct Contact Box */}
          <div className="site-footer__col site-footer__col--contact">
            <div className="footer-contact-card">
              <h4>Ready to transact?</h4>
              <p>Discuss your commercial asset directly with an acquisition partner.</p>
              <div className="footer-contact-items">
                <a className="footer-contact-row" href={`tel:${footer.phone.replace(/[^+\d]/g, '')}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>{footer.phone}</span>
                </a>
                <a className="footer-contact-row" href={`mailto:${footer.email}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-icon">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>{footer.email}</span>
                </a>
                <div className="footer-contact-row footer-contact-row--static">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-icon">
                    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                  <span>{footer.address}</span>
                </div>
              </div>
              <a className="btn btn--primary footer-cta-btn" href="/contact">
                Get Commercial Cash Offer
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Privacy Policy, Terms, and Copyright */}
        <div className="site-footer__bottom">
          <div className="site-footer__copyright">
            {footer.copyright}
          </div>
          <div className="site-footer__credit">
            Made with <span aria-label="love">❤️</span> by{' '}
            <a href="https://www.vertexmediahouse.com" target="_blank" rel="noopener noreferrer">
              Vertex Media House
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

