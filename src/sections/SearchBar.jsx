import { search } from '../data';

const icons = {
  Location: 'M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  'Property Type': 'M4 11 12 4l8 7 M6 10v9h12v-9',
  'Price Range': 'M4 7h16v10H4z M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
};

// Demo filter UI — mirrors the export, which also posts nowhere.
// ponytail: no state or routing; wire to a query string when /properties exists.
export function SearchBar() {
  return (
    <section className="section searchbar-section">
      <div className="searchbar-wrap">
        <form
          className="searchbar reveal"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Property search"
        >
          <Field label="Location" options={search.location} />
          <Field label="Property Type" options={search.type} />
          <Field label="Price Range" options={search.price} />
          <button className="btn btn--dark searchbar__submit" type="submit">
            <span className="header-cta__dot" aria-hidden="true" />
            Find Properties
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, options }) {
  const id = `f-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <div className="searchbar__field">
      <label htmlFor={id}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={icons[label]} />
        </svg>
        {label}
      </label>
      <div className="searchbar__select">
        <select id={id} defaultValue={options[0]}>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="searchbar__chevron">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}
