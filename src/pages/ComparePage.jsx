import { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  Handshake,
  Building2,
  Check,
  CalendarCheck,
  AlertCircle,
  FileText,
  Users,
  Banknote,
  TrendingUp,
} from 'lucide-react';
import { team, footer } from '../data';

export function ComparePage() {
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [propertyType, setPropertyType] = useState('Industrial / Warehouse');
  const [occupancy, setOccupancy] = useState('Owner-Occupied');
  const [submitted, setSubmitted] = useState(false);

  const handleOfferSubmit = (e) => {
    e.preventDefault();
    if (!address.trim() || !contact.trim()) return;
    setSubmitted(true);
  };

  const qcpsPoints = [
    { title: 'Zero commercial broker commissions', desc: 'Keep full proceeds without deducting standard 4% to 6% broker commissions ($80,000–$200,000+ savings).' },
    { title: 'As-is acquisition with zero required repairs', desc: 'No requirements to replace roofing, upgrade aging HVAC units, or fund costly tenant improvements.' },
    { title: 'No public listing or tenant disruption', desc: 'Your transaction stays confidential. No public signboards or endless buyer walk-throughs alarming tenants and staff.' },
    { title: 'Direct capital with no bank loan contingencies', desc: 'Transactions are funded directly using verified capital. No waiting on commercial bank loan committees.' },
    { title: 'Flexible closing timeline & leaseback terms', desc: 'Close in 14–21 days or structure a custom leaseback so your ongoing business operations never skip a beat.' },
    { title: 'Direct communication with principals', desc: 'Deal directly with acquisition decision-makers rather than communicating through layered intermediaries.' },
  ];

  const agentPoints = [
    { title: 'Broker commissions and marketing fees apply', desc: 'Standard 4% to 6% commercial broker fees and closing expenses reduce your net realized proceeds.' },
    { title: 'Buyer repair credits and lender conditions', desc: 'Commercial buyers and lenders frequently demand structural repairs, Phase 1 remediations, or escrow holdbacks.' },
    { title: 'Public marketing and disruptive walkthroughs', desc: 'Public portal listings, drone photography, and scheduled tours that can trigger tenant concern or turnover.' },
    { title: 'Financing contingencies & loan fall-through risks', desc: 'Buyer financing (SBA 504/7a, CMBS, or conventional bank debt) takes 60–90+ days and often collapses.' },
    { title: 'Lengthy 6 to 12 month marketing period', desc: 'Commercial properties average several months to locate a qualified buyer capable of securing debt.' },
    { title: 'Mounting carrying costs during the listing', desc: 'Commercial property taxes, building insurance, utility baselines, and debt service accrue every month.' },
  ];

  const qcpsSteps = [
    {
      num: '01',
      title: 'Submit commercial property details',
      desc: 'Share basic building information: square footage, parcel address, zoning, and current occupancy.',
      icon: Building2,
    },
    {
      num: '02',
      title: 'Receive firm written cash proposal',
      desc: 'Our team underwrites comps and provides a clear, zero-obligation cash offer within 48 hours.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'Close through title & receive wire',
      desc: 'Finalize escrow with an established commercial title company on your preferred schedule.',
      icon: Handshake,
    },
  ];

  const agentSteps = [
    {
      num: '01',
      title: 'Prepare offering memorandum & list',
      desc: 'Gather historical rent rolls, profit & loss statements, order commercial photography, and sign broker exclusive.',
      icon: FileText,
    },
    {
      num: '02',
      title: 'Conduct buyer tours & vet offers',
      desc: 'Coordinate multiple buyer walkthroughs, evaluate letters of intent (LOIs), and negotiate purchase agreements.',
      icon: Users,
    },
    {
      num: '03',
      title: 'Wait on lender underwriting & closing',
      desc: 'Navigate 60–90+ days of commercial appraisals, environmental reports, SBA/bank committee reviews, and title escrow.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="compare-page">
      {/* ================= SECTION 1: HERO ================= */}
      <section className="compare-hero">
        <div className="container">
          <span className="eyebrow reveal">TRANSACTION OPTIONS</span>
          <h1 className="compare-hero__heading reveal">
            What's the Best Way to Sell Your Commercial Property?
          </h1>
          <p className="compare-hero__body reveal">
            Every commercial property owner has distinct financial and operational requirements. Compare selling directly to QCPS with listing through a traditional commercial brokerage to determine the optimal exit strategy for your asset.
          </p>

          <dl className="compare-metrics reveal">
            <div className="compare-metric">
              <dt>100%</dt>
              <dd>Free commercial evaluation</dd>
            </div>
            <div className="compare-metric">
              <dt>$0</dt>
              <dd>Listing commissions deducted</dd>
            </div>
            <div className="compare-metric">
              <dt>14–21</dt>
              <dd>Days to direct cash close</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ================= SECTION 2: SIDE-BY-SIDE CARDS ================= */}
      <section className="section section--paper-alt" id="comparison">
        <div className="container">
          <span className="eyebrow reveal">Direct Comparison</span>
          <div className="split-head reveal">
            <h2>Two clear paths to selling your commercial asset.</h2>
            <div className="split-head__aside">
              <p>
                A straightforward alternative compared with the conventional open-market brokerage process.
              </p>
            </div>
          </div>

          <div className="compare-cards-grid">
            {/* Direct QCPS Card */}
            <div className="compare-card compare-card--featured reveal">
              <div className="compare-card__header">
                <span className="compare-card__tag compare-card__tag--accent">
                  <span className="compare-card__dot" aria-hidden="true" />
                  Direct Acquisition
                </span>
                <h3 className="compare-card__title">Sell Directly to QCPS</h3>
                <p className="compare-card__subtitle">
                  A fast, confidential cash transaction with zero broker commissions.
                </p>
              </div>

              <div className="compare-card__divider" />

              <ul className="compare-points-list">
                {qcpsPoints.map((point, index) => (
                  <li key={index} className="compare-point">
                    <div className="compare-point__icon-wrap compare-point__icon-wrap--accent">
                      <Check size={16} strokeWidth={2.5} />
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
                  <span>Request a Cash Offer</span>
                  <ArrowRight size={16} />
                </a>
                <span className="compare-card__footnote">
                  Zero obligation · Written proposal within 48 hours
                </span>
              </div>
            </div>

            {/* Traditional Agent Card */}
            <div className="compare-card compare-card--agent reveal">
              <div className="compare-card__header">
                <span className="compare-card__tag">
                  Traditional Method
                </span>
                <h3 className="compare-card__title">Sell Through a Broker</h3>
                <p className="compare-card__subtitle">
                  Public open-market listing designed to reach retail commercial investors.
                </p>
              </div>

              <div className="compare-card__divider" />

              <ul className="compare-points-list">
                {agentPoints.map((point, index) => (
                  <li key={index} className="compare-point">
                    <div className="compare-point__icon-wrap compare-point__icon-wrap--muted">
                      <Clock size={16} strokeWidth={2} />
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
                  <span>Explore Broker Trade-Offs</span>
                </a>
                <span className="compare-card__footnote">
                  Standard 6-month exclusive listing agreement
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: VISUAL SELLING JOURNEY ================= */}
      <section className="section section--dark" id="journey">
        <div className="container">
          <span className="eyebrow reveal">Visual Comparison</span>
          <div className="split-head reveal">
            <h2>The selling journey compared.</h2>
            <div className="split-head__aside">
              <p>
                From initial valuation to final escrow wire transfer, compare the milestones of each approach.
              </p>
            </div>
          </div>

          <div className="compare-journey-container">
            {/* QCPS 3-Step Journey */}
            <div className="compare-journey-block compare-journey-block--featured reveal">
              <div className="compare-journey-banner">
                <div className="compare-journey-tag">
                  <span className="compare-journey-dot" />
                  Direct Process with QCPS
                </div>
                <h3 className="compare-journey-title">
                  Streamlined, 3-step direct transaction.
                </h3>
              </div>

              <ol className="compare-steps-grid">
                {qcpsSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.num} className="compare-step-item">
                      <div className="compare-step-header">
                        <div className="compare-step-icon">
                          <Icon size={20} strokeWidth={2} />
                        </div>
                        <span className="compare-step-num">{step.num}</span>
                      </div>
                      <h4 className="compare-step-title">{step.title}</h4>
                      <p className="compare-step-desc">{step.desc}</p>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Agent 3-Step Journey */}
            <div className="compare-journey-block compare-journey-block--agent reveal">
              <div className="compare-journey-banner">
                <div className="compare-journey-tag compare-journey-tag--agent">
                  Traditional Broker Listing
                </div>
                <h3 className="compare-journey-title">
                  Conventional multi-phase public marketing.
                </h3>
              </div>

              <ol className="compare-steps-grid">
                {agentSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.num} className="compare-step-item">
                      <div className="compare-step-header">
                        <div className="compare-step-icon compare-step-icon--muted">
                          <Icon size={20} strokeWidth={2} />
                        </div>
                        <span className="compare-step-num">{step.num}</span>
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
          <span className="eyebrow reveal">Commercial Considerations</span>
          <div className="split-head reveal">
            <h2>The right choice depends on your business priorities.</h2>
            <div className="split-head__aside">
              <p>
                Every commercial asset has unique tenant structures, deferred maintenance, and owner objectives. The optimal approach depends on your required timeline, tax strategy, and capital needs.
              </p>
            </div>
          </div>

          <div className="compare-priority-grid reveal">
            <div className="compare-priority-card">
              <div className="compare-priority-icon">
                <CalendarCheck size={22} />
              </div>
              <h3>Certainty &amp; Operational Speed</h3>
              <p>
                A direct cash sale provides definitive closing dates and eliminates lender fall-through risk. Business owners retiring, relocating machinery, or needing immediate liquidity frequently choose this route.
              </p>
            </div>

            <div className="compare-priority-card">
              <div className="compare-priority-icon">
                <TrendingUp size={22} />
              </div>
              <h3>Public Market Exposure</h3>
              <p>
                A traditional commercial brokerage listing reaches a broader audience of speculative investors. If your building is fully renovated, 100% leased to credit tenants, and you can wait 6–12 months, a broker may achieve a top-dollar retail bid.
              </p>
            </div>

            <div className="compare-priority-card">
              <div className="compare-priority-icon">
                <Banknote size={22} />
              </div>
              <h3>Net Realized Proceeds</h3>
              <p>
                Always calculate net proceeds after deducting 4% to 6% broker commissions, carrying costs (taxes, insurance, loan interest), and buyer concession requests during bank appraisal negotiations.
              </p>
            </div>
          </div>

          {/* Decision Matrix */}
          <div className="compare-matrix reveal">
            <div className="compare-matrix-col">
              <h4 className="compare-matrix-title">
                <span className="compare-matrix-dot compare-matrix-dot--accent" />
                When Selling Directly to QCPS Fits Best:
              </h4>
              <ul className="compare-matrix-list">
                <li>Building has deferred roof, HVAC, or structural maintenance you prefer not to fund</li>
                <li>You desire confidentiality with zero public signs, marketing portals, or tenant panic</li>
                <li>You need to close quickly to settle a partnership dissolution, estate, or 1031 timeline</li>
                <li>You need a post-closing leaseback to transition business machinery, staff, and inventory</li>
                <li>You want to avoid paying tens of thousands in commercial broker commissions</li>
              </ul>
            </div>

            <div className="compare-matrix-col compare-matrix-col--agent">
              <h4 className="compare-matrix-title">
                <span className="compare-matrix-dot" />
                When a Traditional Commercial Broker Often Fits Best:
              </h4>
              <ul className="compare-matrix-list">
                <li>Your commercial facility is recently renovated, fully occupied by credit tenants on long-term NNN leases</li>
                <li>You have a flexible timeline and can comfortably wait 6–12 months for peak retail offers</li>
                <li>You are comfortable with open public marketing and multiple prospective buyer tours</li>
                <li>Maximizing top-line headline price is your single highest priority over certainty and speed</li>
              </ul>
            </div>
          </div>

          <div className="compare-disclaimer reveal">
            <AlertCircle size={20} className="compare-disclaimer__icon" />
            <p>
              <strong>Our Commitment to Candor:</strong> We do not claim that a direct sale to QCPS is the right fit for every commercial asset. If your property is better suited for a specialized institutional auction or open-market broker campaign, we will state that plainly during your initial review.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: FINAL CTA ================= */}
      <section className="section cta-section" id="offer-form">
        <div className="container">
          <div className="cta-lux reveal">
            {/* Ambient backdrop */}
            <div className="cta-lux__backdrop" aria-hidden="true">
              <div className="cta-lux__glow" />
              <div className="cta-lux__grid-pattern" />
            </div>

            <div className="cta-lux__inner">
              {/* Left Column: Heading & Reassurance */}
              <div className="cta-lux__editorial">
                <div className="cta-lux__status-pill">
                  <span className="cta-lux__pulse-dot" aria-hidden="true" />
                  <span>Direct Commercial Evaluation · No Obligation</span>
                </div>

                <h2 className="cta-lux__heading">
                  Request a Written Cash Proposal for Your Commercial Property
                </h2>

                <p className="cta-lux__body">
                  Share your building address and basic details. Our acquisitions team will review comparable sales, zoning data, and provide a clear, confidential cash offer within 48 hours.
                </p>

                <div className="cta-lux__metrics">
                  <div className="cta-lux__metric">
                    <span className="cta-lux__metric-val">&lt; 48h</span>
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
                    <span className="cta-lux__metric-label">Broker fees or deductions</span>
                  </div>
                </div>

                <div className="cta-lux__channels">
                  <a href={`tel:${footer?.phone || '+12125550148'}`} className="cta-lux__channel-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>{footer?.phone || '+1 (212) 555-0148'}</span>
                  </a>

                  <a href={`mailto:${footer?.email || 'info@qcps.example'}`} className="cta-lux__channel-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <span>{footer?.email || 'info@qcps.example'}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Cash Offer Form */}
              <div className="cta-lux__interactive-card">
                <div className="cta-card-header">
                  <span className="cta-card-eyebrow">Direct Acquisitions Desk</span>
                  <h3 className="cta-card-title">Get My Commercial Offer</h3>
                  <p className="cta-card-desc">
                    Submit your property details below for an honest, confidential evaluation.
                  </p>
                </div>

                {submitted ? (
                  <div className="cta-card-success">
                    <div className="cta-card-success__icon" aria-hidden="true">
                      <CheckCircle2 size={28} />
                    </div>
                    <h4>Commercial Details Received</h4>
                    <p>
                      Thank you. We have received the details for <strong>{address}</strong> ({propertyType}). A senior commercial acquisitions partner will review the information and contact you confidentially via <strong>{contact}</strong>.
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
                      Submit Another Commercial Property
                    </button>
                  </div>
                ) : (
                  <form className="compare-form" onSubmit={handleOfferSubmit}>
                    <div className="compare-field">
                      <label htmlFor="compare-address">Property Address &amp; City</label>
                      <input
                        id="compare-address"
                        type="text"
                        className="compare-input"
                        placeholder="e.g. 1450 Industrial Parkway, Brooklyn, NY"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>

                    <div className="compare-field">
                      <label htmlFor="compare-contact">Direct Phone or Corporate Email</label>
                      <input
                        id="compare-contact"
                        type="text"
                        className="compare-input"
                        placeholder="e.g. (555) 012-3456 or name@company.com"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                      />
                    </div>

                    <div className="compare-field">
                      <label htmlFor="compare-type">Property Type</label>
                      <select
                        id="compare-type"
                        className="compare-select"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                      >
                        <option value="Industrial / Warehouse">Industrial / Warehouse / Distribution</option>
                        <option value="Office Building">Office Building / Commercial Suite</option>
                        <option value="Retail Plaza">Retail Plaza / Strip Storefront</option>
                        <option value="Flex / R&D">Flex / R&D / Light Manufacturing</option>
                        <option value="Medical Facility">Medical / Healthcare Clinic</option>
                        <option value="Commercial Land">Commercial Land / Industrial Yard</option>
                      </select>
                    </div>

                    <div className="compare-field">
                      <label htmlFor="compare-occupancy">Occupancy Status</label>
                      <select
                        id="compare-occupancy"
                        className="compare-select"
                        value={occupancy}
                        onChange={(e) => setOccupancy(e.target.value)}
                      >
                        <option value="Owner-Occupied">Owner-Occupied (Active Business)</option>
                        <option value="Fully Leased">Fully Leased to Tenants</option>
                        <option value="Partially Leased">Partially Leased / Partial Vacancy</option>
                        <option value="100% Vacant">100% Vacant Facility</option>
                      </select>
                    </div>

                    <button type="submit" className="btn btn--primary compare-submit-btn">
                      <span>Get My Cash Offer</span>
                      <ArrowRight size={16} />
                    </button>

                    <p className="compare-form-note">
                      Strictly confidential. We respect your operational privacy and will never contact tenants or place public signs on your property.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
