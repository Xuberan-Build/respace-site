import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'How long does a session take?',
    a: 'Sessions start at 3 hours and vary depending on the space and scope. We\'ll give you a time estimate during your consultation.',
  },
  {
    q: 'Do I need to clean before you arrive?',
    a: 'Not at all. Come as you are — we handle everything judgment-free and meet your space exactly where it is.',
  },
  {
    q: 'Do you provide organizing products?',
    a: 'Yes. We can recommend and source products tailored to your space, style, and budget.',
  },
  {
    q: 'Will I have to throw everything away?',
    a: 'Never. We help you make intentional, empowered decisions. Nothing is forced, nothing is rushed.',
  },
  {
    q: 'Do you offer maintenance services?',
    a: 'Yes. We offer ongoing monthly and quarterly support to keep your space aligned long after your initial session.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(prev => prev === i ? null : i)

  return (
    <section className="section faq bg-ivory" id="faq">
      <div className="section-inner">
        <div className="section-header faq-header">
          <p className="label">Questions</p>
          <h2 className="display display-lg">Everything You<br /><em>Need to Know</em></h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div className={`faq-item${open === i ? ' faq-item--open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => toggle(i)} aria-expanded={open === i}>
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-answer" aria-hidden={open !== i}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
