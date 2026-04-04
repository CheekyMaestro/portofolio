/**
 * Form validation utility
 */

const validators = {
  required: (value) => {
    if (!value || value.trim() === '') {
      return 'This field is required';
    }
    return null;
  },

  email: (value) => {
    if (!value) return null;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Invalid email format';
    }
    return null;
  },

  minLength: (min) => (value) => {
    if (!value) return null;
    if (value.length < min) {
      return `Minimum ${min} characters`;
    }
    return null;
  },
};

/**
 * Validate a single field
 * @param {string} value - Field value
 * @param {Array<string|Function>} rules - Validation rules
 * @returns {string|null} Error message or null
 */
export function validateField(value, rules) {
  for (const rule of rules) {
    let error;
    if (typeof rule === 'string') {
      error = validators[rule]?.(value);
    } else if (typeof rule === 'function') {
      error = rule(value);
    }
    if (error) return error;
  }
  return null;
}

/**
 * Validate entire form
 * @param {Object} formData - { fieldName: value }
 * @param {Object} fieldRules - { fieldName: [rules] }
 * @returns {Object} { isValid, errors: { fieldName: errorMessage } }
 */
export function validateForm(formData, fieldRules) {
  const errors = {};
  let isValid = true;

  for (const [field, rules] of Object.entries(fieldRules)) {
    const error = validateField(formData[field], rules);
    if (error) {
      errors[field] = error;
      isValid = false;
    }
  }

  return { isValid, errors };
}

export { validators };
