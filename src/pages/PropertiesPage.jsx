import { useState, useMemo } from 'react';
import { properties, propertiesIntro, search } from '../data';
import { Cta } from '../sections/Cta';

export function PropertiesPage() {
  const [selectedLocation, setSelectedLocation] = useState('Any location');
  const [selectedType, setSelectedType] = useState('Any type');
  const [selectedPrice, setSelectedPrice] = useState('Any price');
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [savedProps, setSavedProps] = useState([]);

  const toggleSave = (e, propId) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedProps((prev) =>
      prev.includes(propId) ? prev.filter((id) => id !== propId) : [...prev, propId]
    );
  };

  const filteredProperties = useMemo(() => {
    return properties
      .filter((p) => {
        // Tag / status filter
        if (selectedTag === 'For Sale' && p.tag !== 'For Sale') return false;
        if (selectedTag === 'For Rent' && p.tag !== 'For Rent') return false;

        // Location filter
        if (selectedLocation !== 'Any location') {
          const locTarget = selectedLocation.toLowerCase().split(',')[0].trim();
          const cityMatch = (p.city || '').toLowerCase().includes(locTarget);
          const locMatch = (p.location || '').toLowerCase().includes(locTarget);
          if (!cityMatch && !locMatch) {
            return false;
          }
        }

        // Type filter
        if (selectedType !== 'Any type' && p.type !== selectedType) {
          return false;
        }

        // Price filter
        if (selectedPrice === 'Under $1.5M' || selectedPrice === 'Under $1M') {
          if (p.priceValue >= 1500000 || p.tag === 'For Rent') return false;
        } else if (selectedPrice === '$1.5M – $3M' || selectedPrice === '$1M – $2M') {
          if (p.priceValue < 1500000 || p.priceValue > 3000000 || p.tag === 'For Rent') return false;
        } else if (selectedPrice === '$3M+' || selectedPrice === '$2M+') {
          if (p.priceValue < 3000000 || p.tag === 'For Rent') return false;
        } else if (selectedPrice === 'Lease / NNN' || selectedPrice === 'Rentals') {
          if (p.tag !== 'For Rent') return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matches =
            p.name.toLowerCase().includes(q) ||
            p.location.toLowerCase().includes(q) ||
            (p.city && p.city.toLowerCase().includes(q)) ||
            p.type.toLowerCase().includes(q) ||
            (p.beds && p.beds.toLowerCase().includes(q)) ||
            (p.baths && p.baths.toLowerCase().includes(q)) ||
            (p.description && p.description.toLowerCase().includes(q));
          if (!matches) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.priceValue - b.priceValue;
        if (sortBy === 'price-desc') return b.priceValue - a.priceValue;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [selectedLocation, selectedType, selectedPrice, selectedTag, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedLocation('Any location');
    setSelectedType('Any type');
    setSelectedPrice('Any price');
    setSelectedTag('All');
    setSearchQuery('');
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedLocation !== 'Any location' ||
    selectedType !== 'Any type' ||
    selectedPrice !== 'Any price' ||
    selectedTag !== 'All' ||
    searchQuery.trim() !== '';

  return (
    <div className="properties-page">
      {/* Editorial Page Header / Masthead */}
      <section className="props-mast">
        <div className="container">
          <div className="props-mast__inner">
            <span className="eyebrow reveal">{propertiesIntro.eyebrow}</span>
            <h1 className="props-mast__heading reveal">{propertiesIntro.heading}</h1>
            <div className="props-mast__lower">
              <p className="props-mast__body reveal">{propertiesIntro.body}</p>
              <dl className="props-mast__stats reveal">
                {propertiesIntro.stats.map((s) => (
                  <div key={s.label} className="props-mast__stat">
                    <dt>{s.value}</dt>
                    <dd>{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Discovery Console */}
      <section className="props-filter-section">
        <div className="container">
          <div className="props-console reveal">
            {/* Top row: Search input & Status tabs */}
            <div className="props-console__top">
              <div className="props-search-input">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="props-icon">
                  <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm10.5 3-5.2-5.2" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by facility name, city, zoning, or commercial type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search commercial properties"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="props-clear-btn"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>

              <div className="props-status-pills" role="tablist" aria-label="Filter status">
                {['All', 'For Sale', 'For Rent'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    role="tab"
                    aria-selected={selectedTag === tag}
                    className={`props-pill${selectedTag === tag ? ' is-active' : ''}`}
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag === 'All' ? 'All Commercial Properties' : tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Middle row: Dropdown selectors */}
            <div className="props-console__filters">
              {/* Location */}
              <div className="props-select-field">
                <label htmlFor="p-loc">Market / City</label>
                <div className="props-select-wrap">
                  <select
                    id="p-loc"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    {search.location.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="props-chevron">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Type */}
              <div className="props-select-field">
                <label htmlFor="p-type">Property Type</label>
                <div className="props-select-wrap">
                  <select
                    id="p-type"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    {search.type.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="props-chevron">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Price Bracket */}
              <div className="props-select-field">
                <label htmlFor="p-price">Price Bracket</label>
                <div className="props-select-wrap">
                  <select
                    id="p-price"
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                  >
                    {search.price.map((pr) => (
                      <option key={pr} value={pr}>
                        {pr}
                      </option>
                    ))}
                  </select>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="props-chevron">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Sort Order */}
              <div className="props-select-field">
                <label htmlFor="p-sort">Sort Order</label>
                <div className="props-select-wrap">
                  <select
                    id="p-sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Curated &amp; Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name">Name (A–Z)</option>
                  </select>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="props-chevron">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Row: Active counts & Reset */}
            <div className="props-console__bar">
              <div className="props-results-info">
                <strong>{filteredProperties.length}</strong>{' '}
                {filteredProperties.length === 1 ? 'property' : 'properties'} available
                {hasActiveFilters && (
                  <button
                    type="button"
                    className="props-reset-btn"
                    onClick={resetFilters}
                  >
                    Clear filters
                  </button>
                )}
              </div>

              <div className="props-view-toggle" role="group" aria-label="Layout mode">
                <button
                  type="button"
                  aria-pressed={viewMode === 'grid'}
                  className={`props-toggle-btn${viewMode === 'grid' ? ' is-active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Grid view"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-pressed={viewMode === 'list'}
                  className={`props-toggle-btn${viewMode === 'list' ? ' is-active' : ''}`}
                  onClick={() => setViewMode('list')}
                  title="List view"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 6h16 M4 12h16 M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Cards Catalog */}
      <section className="section props-catalog-section">
        <div className="container">
          {filteredProperties.length === 0 ? (
            <div className="props-empty reveal">
              <div className="props-empty__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3>No matching commercial properties found</h3>
              <p>
                Try widening your price range, clearing specific filters, or contact our acquisitions desk to inquire about unlisted commercial inventory.
              </p>
              <button
                type="button"
                className="btn btn--dark"
                onClick={resetFilters}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'props-card-grid' : 'props-card-list'}>
              {filteredProperties.map((p, i) => {
                const isSaved = savedProps.includes(p.id);
                return (
                  <article
                    key={p.id}
                    className="prop-card reveal"
                    style={{ transitionDelay: `${(i % 6) * 50}ms` }}
                  >
                    <a className="prop-card__media-link" href={p.href}>
                      <div className="prop-card__media">
                        <img
                          src={p.image}
                          alt={`${p.name} in ${p.location}`}
                          loading="lazy"
                          width="600"
                          height="420"
                        />
                        <div className="prop-card__badges">
                          <span className="prop-card__tag">
                            {p.tag}
                          </span>
                          {p.featured && (
                            <span className="prop-card__featured">
                              Featured
                            </span>
                          )}
                        </div>

                        <button
                          type="button"
                          className={`prop-card__save${isSaved ? ' is-saved' : ''}`}
                          onClick={(e) => toggleSave(e, p.id)}
                          aria-label={isSaved ? 'Remove from saved' : 'Save property'}
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                          </svg>
                        </button>
                      </div>
                    </a>

                    <div className="prop-card__body">
                      <div className="prop-card__head">
                        <span className="prop-card__loc">{p.location}</span>
                        <h2 className="prop-card__title">{p.name}</h2>
                      </div>

                      {p.description && (
                        <p className="prop-card__desc">{p.description}</p>
                      )}

                      <ul className="prop-card__specs">
                        <li>
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h1M9 13h1M9 17h1M14 9h1M14 13h1M14 17h1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {p.beds}
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <rect x="2" y="7" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" fill="none" stroke="currentColor" strokeWidth="1.8" />
                          </svg>
                          {p.baths}
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M3 3h18v18H3z M3 9h18 M9 3v18" fill="none" stroke="currentColor" strokeWidth="1.8" />
                          </svg>
                          {p.area}
                        </li>
                      </ul>

                      <div className="prop-card__footer">
                        <div className="prop-card__price-wrap">
                          <span className="prop-card__price-label">Price / Rate</span>
                          <span className="prop-card__price">{p.price}</span>
                        </div>
                        <a className="btn btn--dark prop-card__btn" href={p.href}>
                          Inquire
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Advisory Consultation Section */}
      <section className="section section--paper-alt props-bespoke-section">
        <div className="container">
          <div className="props-bespoke reveal">
            <div className="props-bespoke__content">
              <span className="eyebrow">Off-Market Commercial Search</span>
              <h2>Looking for commercial facilities not listed publicly?</h2>
              <p>
                A substantial volume of prime commercial, industrial, and retail assets trade privately without ever appearing on public listing portals. Our commercial acquisitions desk represents companies and investors seeking targeted off-market commercial facilities.
              </p>
              <div className="props-bespoke__actions">
                <a className="btn btn--dark" href="/contact">
                  Request Commercial Brief
                </a>
                <a className="btn btn--outline" href="/cash-offer-vs-agent">
                  How We Compare
                </a>
              </div>
            </div>
            <div className="props-bespoke__aside">
              <div className="props-bespoke__card">
                <h4>Private Placement Highlights</h4>
                <ul>
                  <li>
                    <span className="check-bullet">✓</span>
                    Direct introductions to commercial building owners
                  </li>
                  <li>
                    <span className="check-bullet">✓</span>
                    Zoning, environmental Phase 1, and title verification
                  </li>
                  <li>
                    <span className="check-bullet">✓</span>
                    Strict non-disclosure agreements protecting operational privacy
                  </li>
                  <li>
                    <span className="check-bullet">✓</span>
                    Dedicated commercial acquisition advisor from intake to closing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <Cta />
    </div>
  );
}
