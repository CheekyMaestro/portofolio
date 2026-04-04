/**
 * Projects Page — Cinematic scroll-based storytelling
 */
import { renderProjectSection } from '../components/project-card.js';
import { projects } from '../data/projects.js';
import { initParallax } from '../utils/parallax.js';

export function renderProjectsPage() {
  const projectSectionsHTML = projects
    .map((project, index) => renderProjectSection(project, index))
    .join('');

  const html = `
    <div class="projects-page__header" id="projects-header">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; margin: 0 auto;">
          <span class="section-header__label">My Projects</span>
          <h1 class="section-header__title">Featured Projects</h1>
          <p class="section-header__subtitle" style="margin: var(--space-md) auto 0;">Where data meets real-world impact. Every project tells its own story.</p>
        </div>
      </div>
    </div>
    <div class="projects-page__list container" id="projects-list">
      ${projectSectionsHTML}
    </div>
  `;

  return {
    html,
    init: () => {
      const cleanupParallax = initParallax();
      return cleanupParallax;
    },
  };
}
