import { useEffect } from 'react';

// Adds .is-visible to every .reveal once it scrolls into view.
// Uses MutationObserver so dynamically filtered/mounted elements are also observed and revealed.
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((n) => n.classList.add('is-visible'));
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
      { rootMargin: '120px 0px 100px 0px', threshold: 0 }
    );

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((n) => {
        const rect = n.getBoundingClientRect();
        if (rect.top < window.innerHeight + 150) {
          n.classList.add('is-visible');
        } else {
          io.observe(n);
        }
      });
    };

    observeAll();

    const mo = new MutationObserver(() => {
      observeAll();
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

