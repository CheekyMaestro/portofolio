/**
 * Accordion Component
 */

export function renderAccordion(items) {
  const itemsHTML = items
    .map(
      (item, index) => `
      <div class="accordion__item ${index === 0 ? 'accordion__item--open' : ''}" data-accordion-id="${item.id}" id="accordion-${item.id}">
        <button class="accordion__trigger" aria-expanded="${index === 0 ? 'true' : 'false'}">
          <span>${item.title}</span>
          <span class="accordion__icon">+</span>
        </button>
        <div class="accordion__panel" ${index === 0 ? 'style="max-height: 500px;"' : ''}>
          <div class="accordion__content">
            <p>${item.content}</p>
            ${
              item.items
                ? `<ul>${item.items.map((i) => `<li>${i}</li>`).join('')}</ul>`
                : ''
            }
          </div>
        </div>
      </div>
    `
    )
    .join('');

  return `<div class="accordion reveal">${itemsHTML}</div>`;
}

/**
 * Initialize accordion click handlers
 */
export function initAccordion() {
  document.querySelectorAll('.accordion__trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion__item');
      const panel = item.querySelector('.accordion__panel');
      const isOpen = item.classList.contains('accordion__item--open');

      // Close all
      document.querySelectorAll('.accordion__item').forEach((i) => {
        i.classList.remove('accordion__item--open');
        i.querySelector('.accordion__trigger').setAttribute('aria-expanded', 'false');
        i.querySelector('.accordion__panel').style.maxHeight = null;
      });

      // Open clicked (if it was closed)
      if (!isOpen) {
        item.classList.add('accordion__item--open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}
