/**
 * Awards Page — Same structure as Projects page
 */
import { renderAwardSection } from '../components/project-card.js';
import { awards } from '../data/awards.js';
import { initParallax } from '../utils/parallax.js';

export function renderAwardsPage() {
  const awardSectionsHTML = awards
    .map((award, index) => renderAwardSection(award, index))
    .join('');

  const html = `
    <div class="projects-page__header" id="awards-header">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; margin: 0 auto;">
          <span class="section-header__label">My Awards</span>
          <h1 class="section-header__title">Achievements & Recognition</h1>
          <p class="section-header__subtitle" style="margin: var(--space-md) auto 0;">A collection of awards and recognition I've received throughout my journey.</p>
        </div>
      </div>
    </div>
    <div class="projects-page__list container" id="awards-list">
      ${awardSectionsHTML}
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
