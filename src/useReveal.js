import { useEffect } from 'react';

// Adds .is-visible to every .reveal once it scrolls into view.
// One observer for the whole page; Framer's spring curves are approximated
// by the CSS transition on .reveal.
// ponytail: fires once and unobserves — no scroll-linked/parallax motion.
// Add a scroll-progress lib only if a section actually needs continuous tracking.
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    if (!nodes.length) return;

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}
