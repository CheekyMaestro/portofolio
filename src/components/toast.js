/**
 * Toast Notification Component
 */

let toastTimeout = null;

export function showToast(message, type = 'success') {
  const container = document.getElementById('toast-root');
  if (!container) return;

  const icon = type === 'success' ? '✅' : '❌';

  container.innerHTML = `
    <div class="toast toast--${type}" id="toast">
      <span class="toast__icon">${icon}</span>
      <span class="toast__message">${message}</span>
    </div>
  `;

  // Trigger show
  requestAnimationFrame(() => {
    const toast = document.getElementById('toast');
    if (toast) toast.classList.add('toast--visible');
  });

  // Auto hide
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    const toast = document.getElementById('toast');
    if (toast) toast.classList.remove('toast--visible');
    setTimeout(() => {
      container.innerHTML = '';
    }, 400);
  }, 4000);
}
