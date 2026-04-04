/**
 * About Page
 */
import { renderAccordion, initAccordion } from '../components/accordion.js';
import { renderTimeline } from '../components/timeline.js';
import { renderCTA } from '../components/cta.js';
import { skills } from '../data/skills.js';
import { experiences } from '../data/experience.js';
import { techStack } from '../data/tech-stack.js';

export function renderAboutPage() {
  const techGridHTML = techStack
    .map(
      (tech) => `
      <div class="tech-card reveal" id="tech-${tech.name.toLowerCase().replace(/\s/g, '-')}">
        <div class="tech-card__icon">${tech.icon}</div>
        <div class="tech-card__name">${tech.name}</div>
        <div class="tech-card__desc">${tech.desc}</div>
      </div>
    `
    )
    .join('');

  const html = `
    <section class="about-page__intro page-section" id="about-intro">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-header__label">About Me</span>
          <h2 class="section-header__title">Get to Know Me</h2>
        </div>
        <div class="about-split">
          <div class="about-split__text reveal-left">
            <p>I'm <strong>Muhammad Ari Fathan Mahardika</strong>, a passionate student in the field of Data Science and Artificial Intelligence. I believe that data is the key to making better decisions and creating impactful solutions.</p>
            <p>With a passion for continuous learning and exploration, I develop expertise in Machine Learning, Deep Learning, and Data Analytics. Every project I work on is an opportunity to grow and make a real contribution.</p>
            <p>Beyond the world of data, I actively contribute to tech communities and campus organizations, and enjoy sharing knowledge with others.</p>
          </div>
          <div class="reveal-right">
            <img 
              src="/images/portait2.png" 
              alt="Ari Fathan" 
              class="about-split__image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="about-page__skills page-section" id="about-skills">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-header__label">Skills</span>
          <h2 class="section-header__title">What I Can Do</h2>
        </div>
        ${renderAccordion(skills)}
      </div>
    </section>



    <section class="about-page__tech page-section" id="about-tech">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-header__label">Tech Stack</span>
          <h2 class="section-header__title">Tools & Technologies</h2>
        </div>
        <div class="tech-grid">
          ${techGridHTML}
        </div>
      </div>
    </section>

    ${renderCTA()}
  `;

  return {
    html,
    init: () => {
      initAccordion();
    },
  };
}
