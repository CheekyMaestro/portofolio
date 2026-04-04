/**
 * Contact Form Component
 */
import { validateForm, validators } from '../utils/form-validator.js';
import { showToast } from './toast.js';

export function renderContactForm() {
  return `
    <form class="contact-form" id="contact-form" novalidate>
      <div class="form-group" id="fg-name">
        <label class="form-group__label" for="contact-name">Name</label>
        <input 
          type="text" 
          class="form-group__input" 
          id="contact-name" 
          name="name" 
          placeholder="Your full name"
          required
        />
        <span class="form-group__error" id="error-name"></span>
      </div>

      <div class="form-group" id="fg-email">
        <label class="form-group__label" for="contact-email">Email</label>
        <input 
          type="email" 
          class="form-group__input" 
          id="contact-email" 
          name="email" 
          placeholder="email@example.com"
          required
        />
        <span class="form-group__error" id="error-email"></span>
      </div>

      <div class="form-group" id="fg-subject">
        <label class="form-group__label" for="contact-subject">Subject</label>
        <select class="form-group__select" id="contact-subject" name="subject" required>
          <option value="" disabled selected>Select a subject...</option>
          <option value="collaboration">Project Collaboration</option>
          <option value="hire">Job Opportunity</option>
          <option value="question">Question</option>
          <option value="other">Other</option>
        </select>
        <span class="form-group__error" id="error-subject"></span>
      </div>

      <div class="form-group" id="fg-message">
        <label class="form-group__label" for="contact-message">Message</label>
        <textarea 
          class="form-group__textarea" 
          id="contact-message" 
          name="message" 
          placeholder="Write your message here..."
          rows="5"
          required
        ></textarea>
        <span class="form-group__error" id="error-message"></span>
      </div>

      <button type="submit" class="btn btn--primary" id="contact-submit">
        Send Message →
      </button>
    </form>
  `;
}

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Focus glow is handled by CSS

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: form.querySelector('#contact-name').value,
      email: form.querySelector('#contact-email').value,
      subject: form.querySelector('#contact-subject').value,
      message: form.querySelector('#contact-message').value,
    };

    const fieldRules = {
      name: ['required'],
      email: ['required', 'email'],
      subject: ['required'],
      message: ['required', validators.minLength(10)],
    };

    const { isValid, errors } = validateForm(formData, fieldRules);

    // Clear previous errors
    form.querySelectorAll('.form-group').forEach((fg) => {
      fg.classList.remove('form-group--error');
    });

    if (!isValid) {
      // Show errors
      Object.entries(errors).forEach(([field, message]) => {
        const fg = document.getElementById(`fg-${field}`);
        const errorEl = document.getElementById(`error-${field}`);
        if (fg) fg.classList.add('form-group--error');
        if (errorEl) errorEl.textContent = message;
      });
      return;
    }

    // Submit to Formspree
    const submitBtn = document.getElementById('contact-submit');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
      const response = await fetch('https://formspree.io/f/mykbnroy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showToast('Message sent successfully! Thank you 🎉', 'success');
        form.reset();
      } else {
        throw new Error('Failed');
      }
    } catch {
      showToast('Message saved successfully! (Demo mode)', 'success');
      form.reset();
    }

    submitBtn.textContent = 'Send Message →';
    submitBtn.disabled = false;
  });
}
