/**
 * Timeline Component — Visual experience sections
 */

/**
 * Render the split timeline with images (for Experience page)
 * Central vertical line, cards alternate left/right, images on opposite side
 */
export function renderExperienceCards(items) {
  const cardsHTML = items
    .map((item, index) => {
      const isEven = index % 2 === 0;

      return `
        <div class="exp-row ${isEven ? 'exp-row--left' : 'exp-row--right'} reveal" id="exp-${item.id}">
          ${isEven ? `
            <!-- Card Left, Image Right -->
            <div class="exp-row__card-side">
              <div class="exp-row__card">
                <h3 class="exp-row__role">${item.role}</h3>
                <p class="exp-row__company">${item.company}</p>
                <p class="exp-row__desc">${item.description}</p>
                ${item.impacts ? `
                  <div class="exp-row__impacts">
                    ${item.impacts.map(i => `<span class="exp-row__impact"><span class="exp-row__arrow">▹</span>${i}</span>`).join('')}
                  </div>
                ` : ''}
              </div>
            </div>
            <div class="exp-row__timeline-center">
              <div class="exp-row__dot"></div>
              <span class="exp-row__date">${item.date}</span>
            </div>
            <div class="exp-row__image-side">
              <div class="exp-row__image-wrapper">
                <img src="${item.image}" alt="${item.role}" class="exp-row__image" loading="lazy" />
                <div class="exp-row__image-overlay"></div>
                <span class="exp-row__image-label">${item.role}</span>
              </div>
            </div>
          ` : `
            <!-- Image Left, Card Right -->
            <div class="exp-row__image-side">
              <div class="exp-row__image-wrapper">
                <img src="${item.image}" alt="${item.role}" class="exp-row__image" loading="lazy" />
                <div class="exp-row__image-overlay"></div>
                <span class="exp-row__image-label">${item.role}</span>
              </div>
            </div>
            <div class="exp-row__timeline-center">
              <div class="exp-row__dot"></div>
              <span class="exp-row__date">${item.date}</span>
            </div>
            <div class="exp-row__card-side">
              <div class="exp-row__card">
                <h3 class="exp-row__role">${item.role}</h3>
                <p class="exp-row__company">${item.company}</p>
                <p class="exp-row__desc">${item.description}</p>
                ${item.impacts ? `
                  <div class="exp-row__impacts">
                    ${item.impacts.map(i => `<span class="exp-row__impact"><span class="exp-row__arrow">▹</span>${i}</span>`).join('')}
                  </div>
                ` : ''}
              </div>
            </div>
          `}
        </div>
      `;
    })
    .join('');

  return `
    <div class="exp-split">
      <div class="exp-split__line"></div>
      ${cardsHTML}
    </div>
  `;
}

/**
 * Render the simple vertical timeline (used on About page for compact view)
 */
export function renderTimeline(items) {
  const itemsHTML = items
    .map(
      (item) => `
      <div class="timeline__item reveal" id="timeline-${item.id}">
        <div class="timeline__dot"></div>
        <span class="timeline__date">${item.date}</span>
        <div class="timeline__card">
          <h3 class="timeline__role">${item.role}</h3>
          <p class="timeline__company">${item.company}</p>
          <p class="timeline__desc">${item.description}</p>
          ${
            item.impacts
              ? `<div class="timeline__impacts">
                  ${item.impacts.map((impact) => `<span class="timeline__impact">${impact}</span>`).join('')}
                </div>`
              : ''
          }
        </div>
      </div>
    `
    )
    .join('');

  return `<div class="timeline">${itemsHTML}</div>`;
}
