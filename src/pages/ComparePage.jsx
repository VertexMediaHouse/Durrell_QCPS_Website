import { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  Handshake,
  Home,
  Check,
  CalendarCheck,
  AlertCircle,
  Camera,
  Users,
  Banknote,
  TrendingUp,
} from 'lucide-react';
import { team, footer } from '../data';

export function ComparePage() {
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [condition, setCondition] = useState('Needs Minor Updates');
  const [submitted, setSubmitted] = useState(false);

  const handleOfferSubmit = (e) => {
    e.preventDefault();
    if (!address.trim() || !contact.trim()) return;
    setSubmitted(true);
  };

  const qcpsPoints = [
    { title: 'No traditional agent listing commission', desc: 'Keep what is offered without deducting standard 5–6% broker commissions.' },
    { title: 'No need to prepare the home for showings', desc: 'No open houses, decluttering, or endless cleaning for prospective buyers.' },
    { title: 'We consider properties that need repairs', desc: 'Sell as-is. No requirements for roof replacements, plumbing fixes, or painting.' },
    { title: 'Direct communication with the home-buying team', desc: 'Speak directly with decision-makers rather than communicating through third-party intermediaries.' },
    { title: 'Discuss a closing timeline that works for both parties', desc: 'Choose a timeline that coordinates smoothly with your next housing transition.' },
    { title: 'No traditional open-house process', desc: 'Your private life stays private—no lockboxes, strangers touring, or signs in your lawn.' },
  ];

  const agentPoints = [
    { title: 'Agent commissions and other selling costs may apply', desc: 'Standard commission fees and closing expenses are factored into the net proceed calculation.' },
    { title: 'Home preparation and repairs may be recommended', desc: 'Agents typically advise upgrades, painting, staging, or repairs to maximize curb appeal.' },
    { title: 'Property photography and scheduled showings', desc: 'Requires professional photos, MLS listings, and keeping your home showroom-ready for visitors.' },
    { title: 'Negotiations with prospective buyers', desc: 'Offers often come with buyer inspection demands, repair concessions, and appraisal contingencies.' },
    { title: 'Closing depends on the buyer, financing and transaction', desc: 'Transactions are subject to mortgage underwriting, property appraisals, and lender approvals.' },
    { title: 'A more traditional listing and marketing process', desc: 'Wide public market exposure designed to reach retail buyers browsing public real estate portals.' },
  ];

  const qcpsSteps = [
    {
      num: '01',
      title: 'Tell us about your property',
      desc: 'Share basic details about your home, condition, and your ideal timeline.',
      icon: Home,
    },
    {
      num: '02',
      title: 'Review your cash offer',
      desc: 'Receive a straightforward, zero-obligation cash offer based on current market data.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'Agree on terms and closing details',
      desc: 'If you accept, finalize terms and pick a closing schedule that fits your move.',
      icon: Handshake,
    },
  ];

  const agentSteps = [
    {
      num: '01',
      title: 'Prepare and list your home',
      desc: 'Complete recommended repairs, deep cleaning, staging, photography, and MLS listing.',
      icon: Camera,
    },
    {
      num: '02',
      title: 'Schedule showings and review offers',
      desc: 'Accommodate weekend open houses, buyer walk-throughs, and compare retail buyer bids.',
      icon: Users,
    },
    {
      num: '03',
      title: 'Negotiate and proceed toward closing',
      desc: 'Work through inspections, buyer financing approvals, appraisals, and paperwork.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="compare-page">
      {/* ================= SECTION 1: HERO ================= */}
      <section className="compare-hero">
        <div className="container">
          <span className="eyebrow reveal">UNDERSTANDING YOUR OPTIONS</span>
          <h1 className="compare-hero__heading reveal">
            What's the Best Way to Sell Your House?
          </h1>
          <p className="compare-hero__body reveal">
            Every homeowner has different needs. Compare selling directly to QCPS with
            listing through a traditional real estate agent to find the option that works best for you.
          </p>

          <dl className="compare-metrics reveal">
            <div className="compare-metric">
              <dt>100%</dt>
              <dd>Free property evaluation</dd>
            </div>
            <div className="compare-metric">
              <dt>0%</dt>
              <dd>Hidden fees or obligations</dd>
            </div>
            <div className="compare-metric">
              <dt>1 : 1</dt>
              <dd>Direct communication with the buyers</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ================= SECTION 2: SIDE-BY-SIDE COMPARISON ================= */}
      <section className="section section--paper-alt" id="comparison">
        <div className="container">
          <span className="eyebrow reveal">Side-by-side comparison</span>
          <div className="split-head reveal">
            <h2>Two distinct paths to your next move.</h2>
            <div className="split-head__aside">
              <p>
                A straightforward alternative compared with the conventional open-market process.
                Review how fees, showings, and timelines differ.
              </p>
            </div>
          </div>

          <div className="compare-cards-grid">
            {/* LEFT CARD: QCPS */}
            <div className="compare-card compare-card--featured reveal">
              <div className="compare-card__header">
                <span className="compare-card__tag compare-card__tag--accent">
                  <span className="compare-card__dot" aria-hidden="true" />
                  Direct Sale Alternative
                </span>
                <h3 className="compare-card__title">Sell Directly to QCPS</h3>
                <p className="compare-card__subtitle">
                  A straightforward alternative to traditional home selling.
                </p>
              </div>

              <div className="compare-card__divider" />

              <ul className="compare-points-list">
                {qcpsPoints.map((point, index) => (
                  <li key={index} className="compare-point">
                    <div className="compare-point__icon-wrap compare-point__icon-wrap--accent">
                      <CheckCircle2 size={18} />
                    </div>
                    <div className="compare-point__text">
                      <span className="compare-point__headline">{point.title}</span>
                      <p className="compare-point__detail">{point.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="compare-card__footer">
                <a href="#offer-form" className="btn btn--primary compare-card__btn">
                  <span>Get My Cash Offer</span>
                  <ArrowRight size={16} />
                </a>
                <span className="compare-card__footnote">
                  No hidden fees · Free written proposal
                </span>
              </div>
            </div>

            {/* RIGHT CARD: TRADITIONAL AGENT */}
            <div className="compare-card compare-card--agent reveal">
              <div className="compare-card__header">
                <span className="compare-card__tag">
                  Traditional Route
                </span>
                <h3 className="compare-card__title">Sell With an Agent</h3>
                <p className="compare-card__subtitle">
                  The traditional route to putting your property on the market.
                </p>
              </div>

              <div className="compare-card__divider" />

              <ul className="compare-points-list">
                {agentPoints.map((point, index) => (
                  <li key={index} className="compare-point">
                    <div className="compare-point__icon-wrap compare-point__icon-wrap--muted">
                      <Clock size={17} />
                    </div>
                    <div className="compare-point__text">
                      <span className="compare-point__headline">{point.title}</span>
                      <p className="compare-point__detail">{point.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="compare-card__footer">
                <a href="#considerations" className="btn btn--ghost compare-card__btn">
                  <span>Explore Selling Priorities</span>
                </a>
                <span className="compare-card__footnote">
                  Traditional open market listing process
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: VISUAL SELLING JOURNEY ================= */}
      <section className="section">
        <div className="container">
          <span className="eyebrow reveal">Visual selling journey</span>
          <div className="split-head reveal">
            <h2>The selling journey compared.</h2>
            <div className="split-head__aside">
              <p>
                From your initial contact through to the closing table, here is how the milestones differ
                between a direct cash transaction and a traditional retail agent process.
              </p>
            </div>
          </div>

          <div className="compare-journey-container">
            {/* Timeline 1: QCPS */}
            <div className="compare-journey-block compare-journey-block--featured reveal">
              <div className="compare-journey-banner">
                <div className="compare-journey-tag">
                  <span className="compare-journey-dot" />
                  QCPS Direct Workflow
                </div>
                <h3 className="compare-journey-title">
                  Three Straightforward Steps
                </h3>
              </div>

              <ol className="compare-steps-grid">
                {qcpsSteps.map((step, idx) => {
                  const IconComponent = step.icon;
                  return (
                    <li key={idx} className="compare-step-item">
                      <div className="compare-step-top">
                        <span className="compare-step-num compare-step-num--accent">{step.num}</span>
                        <div className="compare-step-icon compare-step-icon--accent">
                          <IconComponent size={19} />
                        </div>
                      </div>
                      <h4 className="compare-step-title">{step.title}</h4>
                      <p className="compare-step-desc">{step.desc}</p>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Timeline 2: Traditional Agent */}
            <div className="compare-journey-block compare-journey-block--agent reveal">
              <div className="compare-journey-banner">
                <div className="compare-journey-tag compare-journey-tag--agent">
                  Traditional Agent Workflow
                </div>
                <h3 className="compare-journey-title">
                  The Retail Market Route
                </h3>
              </div>

              <ol className="compare-steps-grid">
                {agentSteps.map((step, idx) => {
                  const IconComponent = step.icon;
                  return (
                    <li key={idx} className="compare-step-item">
                      <div className="compare-step-top">
                        <span className="compare-step-num">{step.num}</span>
                        <div className="compare-step-icon">
                          <IconComponent size={19} />
                        </div>
                      </div>
                      <h4 className="compare-step-title">{step.title}</h4>
                      <p className="compare-step-desc">{step.desc}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TRANSPARENT CONSIDERATIONS ================= */}
      <section className="section section--paper" id="considerations">
        <div className="container">
          <span className="eyebrow reveal">Transparent considerations</span>
          <div className="split-head reveal">
            <h2>The right choice depends on your priorities.</h2>
            <div className="split-head__aside">
              <p>
                Every homeowner has different needs. There is no one-size-fits-all answer in real estate—the best
                option depends on the property's condition, location, timeline, and selling costs.
              </p>
            </div>
          </div>

          <div className="compare-priority-grid reveal">
            <div className="compare-priority-card">
              <div className="compare-priority-icon">
                <CalendarCheck size={22} />
              </div>
              <h3>Convenience &amp; Flexibility</h3>
              <p>
                A cash sale may offer convenience and flexibility. Sellers who prioritize speed, certainty, or wish
                to avoid the disruption of public open houses, staging, and unpredictable repairs often choose a direct transaction.
              </p>
            </div>

            <div className="compare-priority-card">
              <div className="compare-priority-icon">
                <TrendingUp size={22} />
              </div>
              <h3>Market Exposure &amp; Potential Price</h3>
              <p>
                A traditional listing may attract more potential buyers and could result in a higher sale price,
                particularly if the property is already in turnkey condition and you have several months to negotiate retail offers.
              </p>
            </div>

            <div className="compare-priority-card">
              <div className="compare-priority-icon">
                <Banknote size={22} />
              </div>
              <h3>Condition, Location &amp; Selling Costs</h3>
              <p>
                The best option depends on the property's condition, location, timeline, and selling costs.
                Carrying costs (mortgage, insurance, property taxes) and major repair estimates should always be factored into net returns.
              </p>
            </div>
          </div>

          {/* Decision Matrix */}
          <div className="compare-matrix reveal">
            <div className="compare-matrix-col">
              <h4 className="compare-matrix-title">
                <span className="compare-matrix-dot compare-matrix-dot--accent" />
                When Selling Directly Often Fits Best:
              </h4>
              <ul className="compare-matrix-list">
                <li>Property needs repairs, roof work, or aesthetic updates you prefer not to fund</li>
                <li>Need to sell within a specific window due to relocation, inheritance, or life change</li>
                <li>Desire privacy with zero public open houses, stranger walkthroughs, or yard signs</li>
                <li>Value certainty over waiting months for prospective buyer mortgage approvals</li>
              </ul>
            </div>

            <div className="compare-matrix-col compare-matrix-col--agent">
              <h4 className="compare-matrix-title">
                <span className="compare-matrix-dot" />
                When a Traditional Agent Often Fits Best:
              </h4>
              <ul className="compare-matrix-list">
                <li>Your home is recently renovated, professionally landscaped, and move-in ready</li>
                <li>You have a flexible timeline and can comfortably wait 60–120+ days for peak retail offers</li>
                <li>You are comfortable investing upfront in cleaning, staging, and standard agent commissions</li>
                <li>Maximizing top-line retail price is your single highest priority</li>
              </ul>
            </div>
          </div>

          <div className="compare-disclaimer reveal">
            <AlertCircle size={20} className="compare-disclaimer__icon" />
            <p>
              <strong>Our Commitment to Transparency:</strong> We do not claim that QCPS is right for every seller,
              nor do we guarantee that a direct sale yields higher proceeds than an open market peak bid. We provide honest,
              written evaluations so you can evaluate all factors with total clarity.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: FINAL CTA ================= */}
      <section className="section cta-section" id="offer-form">
        <div className="container">
          <div className="cta-lux reveal">
            {/* Ambient luxury backdrop */}
            <div className="cta-lux__backdrop" aria-hidden="true">
              <div className="cta-lux__glow" />
              <div className="cta-lux__grid-pattern" />
            </div>

            <div className="cta-lux__inner">
              {/* Left Column: Heading & Reassurance */}
              <div className="cta-lux__editorial">
                <div className="cta-lux__status-pill">
                  <span className="cta-lux__pulse-dot" aria-hidden="true" />
                  <span>Direct Cash Evaluation · No Obligation</span>
                </div>

                <h2 className="cta-lux__heading">
                  Curious What Your House Could Be Worth to Us?
                </h2>

                <p className="cta-lux__body">
                  Tell us a little about your property. Our team will review the details and discuss your options
                  with transparent numbers and zero pressure.
                </p>

                <div className="cta-lux__metrics">
                  <div className="cta-lux__metric">
                    <span className="cta-lux__metric-val">&lt; 24h</span>
                    <span className="cta-lux__metric-label">Offer evaluation turnaround</span>
                  </div>
                  <div className="cta-lux__metric-div" aria-hidden="true" />
                  <div className="cta-lux__metric">
                    <span className="cta-lux__metric-val">100%</span>
                    <span className="cta-lux__metric-label">Confidential &amp; non-binding</span>
                  </div>
                  <div className="cta-lux__metric-div" aria-hidden="true" />
                  <div className="cta-lux__metric">
                    <span className="cta-lux__metric-val">$0</span>
                    <span className="cta-lux__metric-label">Commissions or fees</span>
                  </div>
                </div>

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
              </div>

              {/* Right Column: Cash Offer Form */}
              <div className="cta-lux__interactive-card">
                <div className="cta-card-header">
                  <span className="cta-card-eyebrow">Request Property Proposal</span>
                  <h3 className="cta-card-title">Get My Cash Offer</h3>
                  <p className="cta-card-desc">
                    Submit your property details below for an honest, confidential review.
                  </p>
                </div>

                {submitted ? (
                  <div className="cta-card-success">
                    <div className="cta-card-success__icon" aria-hidden="true">
                      <CheckCircle2 size={28} />
                    </div>
                    <h4>Property Details Received</h4>
                    <p>
                      Thank you. We have received the information for <strong>{address}</strong>. Our acquisitions team will review the details and reach out confidentially via <strong>{contact}</strong>.
                    </p>
                    <button
                      type="button"
                      className="cta-card-success__reset"
                      onClick={() => {
                        setSubmitted(false);
                        setAddress('');
                        setContact('');
                      }}
                    >
                      Submit Another Property
                    </button>
                  </div>
                ) : (
                  <form className="compare-form" onSubmit={handleOfferSubmit}>
                    <div className="compare-field">
                      <label htmlFor="compare-address">Property Address</label>
                      <input
                        id="compare-address"
                        type="text"
                        className="compare-input"
                        placeholder="e.g. 742 Evergreen Terrace, City, State"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>

                    <div className="compare-field">
                      <label htmlFor="compare-contact">Phone Number or Email</label>
                      <input
                        id="compare-contact"
                        type="text"
                        className="compare-input"
                        placeholder="e.g. (555) 000-0000 or email@domain.com"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                      />
                    </div>

                    <div className="compare-field">
                      <label htmlFor="compare-condition">Property Condition</label>
                      <select
                        id="compare-condition"
                        className="compare-select"
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                      >
                        <option value="Move-In Ready">Move-In Ready / Excellent</option>
                        <option value="Needs Minor Updates">Needs Minor Cosmetic Updates</option>
                        <option value="Needs Significant Work">Needs Significant Repairs / Fixer</option>
                        <option value="Inherited or Distressed">Inherited / Distressed Condition</option>
                      </select>
                    </div>

                    <button type="submit" className="btn btn--primary compare-submit-btn">
                      <span>Get My Cash Offer</span>
                      <ArrowRight size={16} />
                    </button>

                    <div className="compare-form-perks">
                      <span>✓ 100% Free &amp; Confidential</span>
                      <span>✓ Zero Obligation to Accept</span>
                    </div>
                  </form>
                )}

                {/* Team Concierge Footer */}
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
                    <div className="cta-concierge-title">Estavora Acquisition Team</div>
                    <div className="cta-concierge-sub">Direct access to principals · No automated bots</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
