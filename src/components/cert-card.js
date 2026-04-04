/**
 * Certificate Card Component
 */

export function renderCertCard(cert) {
  return `
    <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="cert-card reveal" id="cert-${cert.id}">
      <div class="cert-card__image-wrapper">
        <img 
          src="${cert.image}" 
          alt="${cert.title}"
          class="cert-card__image"
          loading="lazy"
          onerror="this.style.background='linear-gradient(135deg, var(--bg-tertiary), var(--bg-elevated))'; this.style.display='flex';"
        />
      </div>
      <div class="cert-card__body">
        <span class="cert-card__tag">${cert.tag}</span>
        <h3 class="cert-card__title">${cert.title}</h3>
        <p class="cert-card__issuer">${cert.issuer} • ${cert.date}</p>
      </div>
    </a>
  `;
}
