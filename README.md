# Durrell QCPS Website

ESTAVORA — a real-estate marketing site built as a React single-page app with Vite.

## Getting started

```bash
npm install
npm run dev      # dev server with HMR
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | Run Oxlint |

## Layout

```
src/
  App.jsx          page composition — section order lives here
  App.css          section styles
  index.css        design tokens, layout primitives, buttons
  data.js          all page copy and listing data
  useReveal.js     scroll-reveal hook
  sections/        one component per page section
public/images/     photography
```

Content is data-driven: copy, listings, testimonials and journal posts all come from
`src/data.js`, so editing text rarely means touching a component.

Design tokens (palette, radii, container width) are CSS custom properties on `:root`
in `src/index.css`.
