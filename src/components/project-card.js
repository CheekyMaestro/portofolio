/**
 * Project Card Component — Featured card for home page
 */

export function renderFeaturedCard(project) {
  const tagsHTML = project.tags
    .map((tag) => `<span class="featured-card__tag">${tag}</span>`)
    .join('');

  // Use demo link if available
  const hasDemo = project.links.demo && project.links.demo !== '#';
  const primaryLink = hasDemo ? project.links.demo : '#';
  const linkLabel = hasDemo ? '🌐 Live Demo ↗' : '';

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
        </div>
      </div>
    </section>
  `;
}
