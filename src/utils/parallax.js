/**
 * Simple parallax scroll effect for project background images
 */

export function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (!parallaxElements.length) return;

  function onScroll() {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.3;
      const rect = el.getBoundingClientRect();
      const offsetTop = rect.top + scrollY;
      const distance = scrollY - offsetTop;
      
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        el.style.transform = `translateY(${distance * speed}px)`;
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', onScroll);
  };
}
