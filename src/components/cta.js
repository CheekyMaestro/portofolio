/**
 * CTA Section — Reusable call-to-action
 */

export function renderCTA(options = {}) {
  const {
    title = "Let's Work Together",
    subtitle = "Have an exciting project or want to discuss? Don't hesitate to reach out.",
    buttonText = "Get In Touch →",
    buttonLink = "#/contact",
  } = options;

  return `
    <section class="cta reveal" id="cta-section">
      <div class="container">
        <div class="cta__glow"></div>
        <h2 class="cta__title">${title}</h2>
        <p class="cta__subtitle">${subtitle}</p>
        <a href="${buttonLink}" class="btn btn--primary" id="cta-button">${buttonText}</a>
      </div>
    </section>
  `;
}
