/**
 * Hero Section Component — Home page hero
 */

export function renderHero() {
  return `
    <section class="hero" id="hero">
      <!-- Floating decorative elements -->
      <div class="floating-dot floating-dot--sm" style="top: 15%; left: 8%; animation-delay: 0s;"></div>
      <div class="floating-dot floating-dot--md" style="top: 25%; right: 15%; animation-delay: 1s;"></div>
      <div class="floating-dot floating-dot--lg" style="bottom: 20%; left: 5%; animation-delay: 2s;"></div>
      <div class="floating-dot floating-dot--ring" style="top: 10%; right: 8%; animation-delay: 3s;"></div>
      <div class="floating-dot floating-dot--sm" style="bottom: 30%; right: 25%; animation-delay: 1.5s;"></div>

      <div class="container">
        <div class="hero__inner">
          <div class="hero__content">
            <span class="hero__greeting reveal stagger-1">Hi, my name is</span>
            <h1 class="hero__name reveal stagger-2">
              Muhammad Ari
              <span class="accent">Fathan M.</span>
            </h1>
            <p class="hero__title reveal stagger-3">
              Data & AI Enthusiast — Transforming raw data into impactful insights through the power of Machine Learning and Artificial Intelligence.
            </p>
            <div class="hero__buttons reveal stagger-4">
              <a href="#/projects" class="btn btn--primary" id="hero-cta-projects">View Projects →</a>
              <a href="#/contact" class="btn btn--outline" id="hero-cta-contact">Contact Me</a>
            </div>
          </div>
          <div class="hero__image-wrapper reveal-right stagger-3">
            <div class="hero__image-glow"></div>
            <img 
              src="/images/portait.png" 
              alt="Muhammad Ari Fathan Mahardika — Data & AI Enthusiast" 
              class="hero__image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  `;
}
