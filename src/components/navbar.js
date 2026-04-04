/**
 * Navbar Component — Floating pill navbar with scroll-aware behavior
 */

const NAV_LINKS = [
  { label: 'Home', hash: '#/' },
  { label: 'About', hash: '#/about' },
  { label: 'Projects', hash: '#/projects' },
  { label: 'Experience', hash: '#/experience' },
  { label: 'Awards', hash: '#/awards' },
  { label: 'Certificates', hash: '#/certificates' },
  { label: 'Contact', hash: '#/contact' },
];

export function renderNavbar() {
  const container = document.getElementById('navbar-root');
  if (!container) return;

  container.innerHTML = `
    <nav class="navbar" id="navbar">
      <div class="navbar__inner">
        <a class="navbar__logo" href="#/">P<span>ortofolio.</span></a>
        <div class="navbar__links">
          ${NAV_LINKS.map(
            (link) =>
              `<a class="navbar__link" href="${link.hash}" id="nav-${link.hash.replace('#/', '') || 'home'}">${link.label}</a>`
          ).join('')}
        </div>
        <button class="navbar__toggle" id="nav-toggle" aria-label="Navigation menu">
          <span class="navbar__toggle-line"></span>
          <span class="navbar__toggle-line"></span>
          <span class="navbar__toggle-line"></span>
        </button>
      </div>
    </nav>
    <div class="navbar__mobile-menu" id="mobile-menu">
      ${NAV_LINKS.map(
        (link) =>
          `<a class="navbar__mobile-link" href="${link.hash}">${link.label}</a>`
      ).join('')}
    </div>
  `;

  initNavbarBehavior();
}

function initNavbarBehavior() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  let lastScrollY = 0;
  let ticking = false;

  // Scroll-aware show/hide
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          navbar.classList.add('navbar--hidden');
        } else {
          navbar.classList.remove('navbar--hidden');
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Mobile toggle
  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('navbar__toggle--open');
    mobileMenu.classList.toggle('navbar__mobile-menu--open');
    document.body.style.overflow = mobileMenu.classList.contains('navbar__mobile-menu--open') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('.navbar__mobile-link').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('navbar__toggle--open');
      mobileMenu.classList.remove('navbar__mobile-menu--open');
      document.body.style.overflow = '';
    });
  });
}
