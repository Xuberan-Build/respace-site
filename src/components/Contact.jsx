import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
      setSubmitted(true)
    } catch {
      // Fallback: let native form action handle it
      form.submit()
    }
  }

  if (submitted) {
    return (
      <section className="section contact bg-sage" id="contact">
        <div className="section-inner contact-success">
          <p className="label contact-label">Get Started</p>
          <h2 className="display display-lg contact-success-heading">
            Thank you —<br /><em>we'll be in touch within 24 hours.</em>
          </h2>
        </div>
      </section>
    )
  }

  return (
    <section className="section contact bg-sage" id="contact">
      <div className="section-inner contact-inner">
        <div className="contact-text">
          <p className="label contact-label">Get Started</p>
          <h2 className="display display-lg contact-heading">
            Your Space is Ready<br /><em>for a Reset</em>
          </h2>
          <p className="contact-sub">
            Your space should support you — not stress you. Let's build something
            that actually works for your life.
          </p>
        </div>

        <form
          className="contact-form"
          name="respace-contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="respace-contact" />
          <input type="hidden" name="bot-field" />

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
              <input id="name" name="name" type="text" required placeholder="Your full name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
              <input id="email" name="email" type="email" required placeholder="your@email.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="phone">Phone Number <span className="form-optional">(optional)</span></label>
              <input id="phone" name="phone" type="tel" placeholder="+1 (000) 000-0000" />
            </div>
            <div className="form-field">
              <label htmlFor="service">Service Interest</label>
              <select id="service" name="service">
                <option value="">Select a service</option>
                <option>Home Reset</option>
                <option>Closet Curation</option>
                <option>Move &amp; Transition</option>
                <option>Office &amp; Workspace</option>
                <option>Lifestyle Reset</option>
                <option>Maintenance Plan</option>
                <option>Not Sure Yet</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Tell us about your space</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Share anything helpful — the size of your space, what feels overwhelming, what you're hoping to feel when it's done."
            />
          </div>

          <button type="submit" className="btn btn-gold contact-submit">Send My Request</button>
        </form>
      </div>
    </section>
  )
}
