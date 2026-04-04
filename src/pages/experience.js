/**
 * Experience Page — Visual cinematic layout with background images
 */
import { renderExperienceCards } from '../components/timeline.js';
import { renderCTA } from '../components/cta.js';
import { experiences } from '../data/experience.js';


export function renderExperiencePage() {
  const html = `
    <div class="experience-page__header" id="experience-header">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-header__label">Experience</span>
          <h1 class="section-header__title">Professional Journey</h1>
          <p class="section-header__subtitle">Every experience shapes my skills and perspective in turning data into value.</p>
        </div>
      </div>
    </div>
    <div class="experience-page__cards container" id="experience-cards">
      ${renderExperienceCards(experiences)}
    </div>
    ${renderCTA()}
  `;

  return { html };
}
