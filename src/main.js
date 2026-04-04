/**
 * Main Entry Point — Portfolio SPA
 */
import './styles/index.css';
import { registerRoute, initRouter } from './router.js';
import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { refreshScrollReveal } from './utils/scroll-reveal.js';

// Import pages
import { renderHomePage } from './pages/home.js';
import { renderAboutPage } from './pages/about.js';
import { renderProjectsPage } from './pages/projects.js';
import { renderExperiencePage } from './pages/experience.js';
import { renderCertificatesPage } from './pages/certificates.js';
import { renderContactPage } from './pages/contact.js';
import { renderAwardsPage } from './pages/awards.js';

// Register routes
registerRoute('#/', renderHomePage);
registerRoute('#/about', renderAboutPage);
registerRoute('#/projects', renderProjectsPage);
registerRoute('#/experience', renderExperiencePage);
registerRoute('#/awards', renderAwardsPage);
registerRoute('#/certificates', renderCertificatesPage);
registerRoute('#/contact', renderContactPage);

// Re-init scroll reveal on page change
window.addEventListener('pagechange', () => {
  refreshScrollReveal();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  initRouter();
});
