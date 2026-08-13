/**
 * Project Card Component — Featured card for home page
 */

export function renderFeaturedCard(project) {
  const tagsHTML = project.tags
    .map((tag) => `<span class="featured-card__tag">${tag}</span>`)
    .join('');

  // Prioritize demo link, fallback to github
  const hasDemo = project.links.demo && project.links.demo !== '#';
  const hasGithub = project.links.github && project.links.github !== '#';
  const primaryLink = hasDemo ? project.links.demo : (hasGithub ? project.links.github : '#');
  const linkLabel = hasDemo ? '🌐 Live Demo ↗' : (hasGithub ? '⌥ GitHub ↗' : '');

  return `
    <a href="${primaryLink}" target="_blank" rel="noopener noreferrer" class="featured-card reveal" id="featured-${project.id}">
      <div style="overflow:hidden;">
        <img 
          src="${project.image}" 
          alt="${project.title}" 
          class="featured-card__image"
          loading="lazy"
          onerror="this.style.background='linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))'; this.alt='${project.title}';"
        />
      </div>
      <div class="featured-card__overlay">
        <div class="featured-card__tags">${tagsHTML}</div>
        <h3 class="featured-card__title">${project.title}</h3>
        <p class="featured-card__desc">${project.description}</p>
        ${linkLabel ? `<span class="featured-card__link-label">${linkLabel}</span>` : ''}
      </div>
    </a>
  `;
}


/**
 * Award Section — Full-width cinematic card for Awards page (no links)
 */
export function renderAwardSection(award, index) {
  const tagsHTML = award.tags
    .map((tag) => `<span class="project-section__tag">${tag}</span>`)
    .join('');

  return `
    <section class="project-section reveal-scale" id="award-${award.id}">
      <img
        src="${award.image}"
        alt="${award.title}"
        class="project-section__bg"
        data-parallax="0.15"
        loading="lazy"
        onerror="this.style.background='linear-gradient(135deg, hsl(220,18%,10%), hsl(220,16%,14%))';"
      />
      <div class="project-section__overlay"></div>
      <div class="project-section__content container">
        <div class="project-section__tags">${tagsHTML}</div>
        <h2 class="project-section__title">${award.title}</h2>
        <p class="project-section__desc">${award.description}</p>
      </div>
    </section>
  `;
}

/**
 * Project Section — Full-width cinematic card for Projects page
 */
export function renderProjectSection(project, index) {
  const tagsHTML = project.tags
    .map((tag) => `<span class="project-section__tag">${tag}</span>`)
    .join('');

  const isEven = index % 2 === 0;

  return `
    <section class="project-section reveal-scale" id="project-${project.id}">
      <img 
        src="${project.image}" 
        alt="${project.title}" 
        class="project-section__bg"
        data-parallax="0.15"
        loading="lazy"
        onerror="this.style.background='linear-gradient(135deg, hsl(220,18%,10%), hsl(220,16%,14%))';"
      />
      <div class="project-section__overlay"></div>
      <div class="project-section__content container">
        <div class="project-section__tags">${tagsHTML}</div>
        <h2 class="project-section__title">${project.title}</h2>
        <p class="project-section__desc">${project.description}</p>
        <div class="project-section__actions">
          ${project.links.demo && project.links.demo !== '#' ? `<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm" id="demo-${project.id}">View Demo →</a>` : ''}
          <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--sm" id="github-${project.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  `;
}
