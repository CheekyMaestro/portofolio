/**
 * Companies Section — "Collaborated With" logo marquee
 *
 * The track holds two identical halves and slides left by exactly 50%, so the
 * moment it resets the second half is sitting where the first one started and
 * the loop reads as seamless. Each half repeats the logo list REPEAT times so
 * there is enough content to fill a wide viewport.
 *
 * The images are deliberately NOT lazy-loaded: copies sitting off-screen would
 * still be unloaded when the marquee scrolls them into view, leaving blank
 * slots. There are only a handful of unique files and every copy shares a URL,
 * so the browser fetches each one once regardless.
 */
import { companies } from '../data/companies.js';

const REPEAT = 3;

function renderItem(company) {
  return `
    <div class="companies__item">
      <img class="companies__logo" src="${company.logo}" alt="" />
    </div>`;
}

export function renderCompanies(options = {}) {
  const { label = 'Collaborated With' } = options;

  if (!companies.length) return '';

  const half = Array.from({ length: REPEAT }, () => companies)
    .flat()
    .map(renderItem)
    .join('');

  return `
    <section class="companies reveal" id="companies">
      <div class="container">
        <p class="companies__label">${label}</p>
      </div>

      <div class="companies__marquee" aria-hidden="true">
        <div class="companies__track">
          ${half}
          ${half}
        </div>
      </div>

      <!-- The marquee is decorative; this is the list screen readers get. -->
      <ul class="companies__names">
        ${companies.map((c) => `<li>${c.name}</li>`).join('')}
      </ul>
    </section>
  `;
}
