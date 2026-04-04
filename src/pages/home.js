/**
 * Home Page
 */
import { renderHero } from '../components/hero.js';
import { renderFeaturedCard } from '../components/project-card.js';
import { renderCTA } from '../components/cta.js';
import { projects } from '../data/projects.js';

export function renderHomePage() {
  const featuredProjects = projects.filter((p) => p.featured);

  const html = `
    ${renderHero()}
    
    <section class="home__featured page-section" id="home-featured">
      <div class="container">
        <div class="home__featured-intro reveal">
          <h2 class="home__featured-title">FEATURED PROJECTS</h2>
          <p class="home__featured-desc">These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful data solutions.</p>
        </div>
        <div class="home__featured-grid">
          ${featuredProjects.map((p) => renderFeaturedCard(p)).join('')}
        </div>
        <div style="text-align: center; margin-top: var(--space-2xl);">
          <a href="#/projects" class="btn btn--outline reveal" id="home-view-all">View All Projects →</a>
        </div>
      </div>
    </section>

    ${renderCTA()}
  `;

  return { html };
}
