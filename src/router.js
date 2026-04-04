/**
 * Router — Hash-based SPA routing
 */

const routes = {};
let currentCleanup = null;

export function registerRoute(hash, renderFn) {
  routes[hash] = renderFn;
}

export function navigateTo(hash) {
  window.location.hash = hash;
}

function getRouteHash() {
  const hash = window.location.hash || '#/';
  return hash;
}

async function handleRouteChange() {
  const hash = getRouteHash();
  const app = document.getElementById('app');
  
  if (!app) return;

  // Run cleanup for previous page
  if (currentCleanup && typeof currentCleanup === 'function') {
    currentCleanup();
    currentCleanup = null;
  }

  // Find matching route
  const renderFn = routes[hash] || routes['#/'];
  
  if (renderFn) {
    // Page exit animation
    app.classList.add('page-exit');
    
    await new Promise((resolve) => setTimeout(resolve, 200));
    
    // Render new page
    const result = renderFn();
    if (typeof result === 'object' && result.html) {
      app.innerHTML = `<div class="page">${result.html}</div>`;
      if (result.init) {
        currentCleanup = result.init();
      }
    } else {
      app.innerHTML = `<div class="page">${result}</div>`;
    }
    
    app.classList.remove('page-exit');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Update active nav link
    updateActiveNavLink(hash);
    
    // Dispatch event for scroll reveal re-init
    window.dispatchEvent(new CustomEvent('pagechange'));
  }
}

function updateActiveNavLink(hash) {
  document.querySelectorAll('.navbar__link').forEach((link) => {
    link.classList.remove('navbar__link--active');
    if (link.getAttribute('href') === hash) {
      link.classList.add('navbar__link--active');
    }
  });
  document.querySelectorAll('.navbar__mobile-link').forEach((link) => {
    link.classList.remove('navbar__mobile-link--active');
    if (link.getAttribute('href') === hash) {
      link.classList.add('navbar__mobile-link--active');
    }
  });
}

export function initRouter() {
  window.addEventListener('hashchange', handleRouteChange);
  // Initial render
  handleRouteChange();
}
