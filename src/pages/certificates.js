/**
 * Certificates Page
 */
import { renderCertCard } from '../components/cert-card.js';
import { renderCTA } from '../components/cta.js';
import { certificates } from '../data/certificates.js';

export function renderCertificatesPage() {
  const cardsHTML = certificates.map((cert) => renderCertCard(cert)).join('');

  const html = `
    <div class="certificates-page__header" id="certificates-header">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-header__label">Certificates</span>
          <h1 class="section-header__title">Certifications & Achievements</h1>
          <p class="section-header__subtitle">Proof of continuous learning and professional skill validation.</p>
        </div>
      </div>
    </div>
    <div class="certificates-page__grid container" id="certificates-grid">
      ${cardsHTML}
    </div>
    ${renderCTA()}
  `;

  return { html };
}
