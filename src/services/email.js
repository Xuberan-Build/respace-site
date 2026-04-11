import emailjs from '@emailjs/browser'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

/**
 * Sends a contact notification to info@respace-usa.com via EmailJS.
 * Called alongside the Netlify form POST — failure here is non-blocking.
 *
 * @param {FormData} formData - The raw FormData from the contact form submission
 * @returns {Promise} EmailJS send promise
 */
export function sendContactNotification(formData) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    return Promise.reject(new Error('EmailJS environment variables are not configured.'))
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name:    formData.get('name')    || 'Not provided',
      from_email:   formData.get('email')   || 'Not provided',
      phone:        formData.get('phone')   || 'Not provided',
      service:      formData.get('service') || 'Not specified',
      message:      formData.get('message') || 'No message provided',
      reply_to:     formData.get('email'),
    },
    PUBLIC_KEY
  )
}
