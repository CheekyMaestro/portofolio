/**
 * Scroll Reveal — Intersection Observer utility
 * Adds 'revealed' class to elements with 'reveal', 'reveal-left', 'reveal-right', or 'reveal-scale' class
 */

export function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Only reveal once
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  // Observe all reveal elements
  const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
  document.querySelectorAll(selectors).forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Call this after rendering a new page to re-observe new elements
 */
export function refreshScrollReveal() {
  // Small delay to let DOM paint
  requestAnimationFrame(() => {
    initScrollReveal();
  });
}
