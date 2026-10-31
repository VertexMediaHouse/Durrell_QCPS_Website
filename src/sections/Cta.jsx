import { useState } from 'react';
import { cta, footer, team } from '../data';

export function Cta() {
  const [selectedIntent, setSelectedIntent] = useState('Acquiring');
  const [timeline, setTimeline] = useState('Within 30 Days');
  const [contactInput, setContactInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const intents = [
    { id: 'Acquiring', label: 'Acquiring', desc: 'Find off-market & private architectural properties' },
    { id: 'Selling', label: 'Discreet Sale', desc: 'Confidential valuation & vetted private buyer access' },
    { id: 'Advisory', label: 'Portfolio Strategy', desc: 'Cross-market analysis, yield modeling & estates' },
  ];

  const timelines = ['Immediate', '30–90 Days', 'Exploring'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactInput.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="section cta-section" id="contact-cta">
      <div className="container">
        <div className="cta-lux reveal">
          {/* Subtle architectural background texture */}
          <div className="cta-lux__backdrop" aria-hidden="true">
            <div className="cta-lux__glow" />
            <div className="cta-lux__grid-pattern" />
          </div>

          <div className="cta-lux__inner">
            {/* Left Column: Narrative & Direct Channels */}
            <div className="cta-lux__editorial">
              <div className="cta-lux__status-pill">
                <span className="cta-lux__pulse-dot" aria-hidden="true" />
                <span>Private Advisory & Direct Consultation</span>
              </div>

              <h2 className="cta-lux__heading">
                {cta.heading || 'Your next move starts with a conversation.'}
              </h2>

              <p className="cta-lux__body">
                Whether acquiring a landmark residence, discreetly marketing an off-market property,
                or underwriting an acquisition, our senior partners work directly with you — without hand-offs.
              </p>

              <div className="cta-lux__metrics">
                <div className="cta-lux__metric">
                  <span className="cta-lux__metric-val">&lt; 2h</span>
                  <span className="cta-lux__metric-label">Median response time</span>
                </div>
                <div className="cta-lux__metric-div" aria-hidden="true" />
                <div className="cta-lux__metric">
                  <span className="cta-lux__metric-val">100%</span>
                  <span className="cta-lux__metric-label">Confidential NDA guarantee</span>
                </div>
                <div className="cta-lux__metric-div" aria-hidden="true" />
                <div className="cta-lux__metric">
                  <span className="cta-lux__metric-val">1 : 1</span>
                  <span className="cta-lux__metric-label">Single dedicated principal</span>
                </div>
              </div>

              {/* Direct channels */}
              <div className="cta-lux__channels">
                <a href={`tel:${footer?.phone || '+12125550148'}`} className="cta-lux__channel-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>{footer?.phone || '+1 (212) 555-0148'}</span>
                </a>

                <a href={`mailto:${footer?.email || 'hello@estavora.example'}`} className="cta-lux__channel-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>{footer?.email || 'hello@estavora.example'}</span>
                </a>
              </div>

              <div className="cta-lux__presence">
                <span className="cta-lux__presence-label">Private Desks:</span>
                <span className="cta-lux__presence-cities">New York · London · Miami · Geneva</span>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Card */}
            <div className="cta-lux__interactive-card">
              <div className="cta-card-header">
                <span className="cta-card-eyebrow">Direct Engagement</span>
                <h3 className="cta-card-title">Book a Private Briefing</h3>
                <p className="cta-card-desc">
                  Select your objective below to be paired immediately with the lead partner for that market.
                </p>
              </div>

              {submitted ? (
                <div className="cta-card-success">
                  <div className="cta-card-success__icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h4>Briefing Requested</h4>
                  <p>
                    Thank you. A Senior Partner specializing in <strong>{selectedIntent}</strong> will reach out confidentially within 2 hours.
                  </p>
                  <button
                    type="button"
                    className="btn btn--outline-dark cta-card-success__reset"
                    onClick={() => {
                      setSubmitted(false);
                      setContactInput('');
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form className="cta-card-form" onSubmit={handleSubmit}>
                  {/* Intent Switcher */}
                  <div className="cta-intent-group">
                    <label className="cta-field-label">Primary Objective</label>
                    <div className="cta-intent-tabs" role="tablist">
                      {intents.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          role="tab"
                          aria-selected={selectedIntent === item.id}
                          className={`cta-intent-tab ${selectedIntent === item.id ? 'is-active' : ''}`}
                          onClick={() => setSelectedIntent(item.id)}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Selection */}
                  <div className="cta-timeline-group">
                    <label className="cta-field-label">Timeline</label>
                    <div className="cta-timeline-pills">
                      {timelines.map((t) => (
                        <button
                          key={t}
                          type="button"
                          className={`cta-timeline-pill ${timeline === t ? 'is-active' : ''}`}
                          onClick={() => setTimeline(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact input + Action */}
                  <div className="cta-input-group">
                    <label className="cta-field-label" htmlFor="cta-contact-input">
                      Direct Email or Private Number
                    </label>
                    <div className="cta-input-wrapper">
                      <input
                        id="cta-contact-input"
                        type="text"
                        className="cta-input"
                        placeholder="e.g. alexander@domain.com or +1..."
                        value={contactInput}
                        onChange={(e) => setContactInput(e.target.value)}
                        required
                      />
                      <button type="submit" className="btn btn--primary cta-submit-btn">
                        <span>Connect</span>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12"/>
                          <polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Secondary link */}
                  <div className="cta-or-divider">
                    <span>or explore directly</span>
                  </div>
                  <a href="/contact" className="cta-secondary-link">
                    <span>Schedule a formal 20-minute Zoom or in-office meeting</span>
                    <span className="cta-arrow" aria-hidden="true">→</span>
                  </a>
                </form>
              )}

              {/* Concierge partners footer badge */}
              <div className="cta-card-concierge">
                <div className="cta-concierge-avatars">
                  {team?.slice(0, 3).map((member, i) => (
                    <img
                      key={member.name || i}
                      src={member.image}
                      alt={member.name}
                      className="cta-concierge-avatar"
                      style={{ zIndex: 3 - i }}
                      loading="lazy"
                    />
                  ))}
                </div>
                <div className="cta-concierge-info">
                  <div className="cta-concierge-title">Estavora Senior Partners</div>
                  <div className="cta-concierge-sub">Direct access to principals · No call centers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
