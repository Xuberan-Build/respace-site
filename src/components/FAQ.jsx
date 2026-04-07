import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'What are your rates?',
    a: 'Our services range from $30 to $60 per hour, depending on the size, complexity, and scope of the project.',
  },
  {
    q: 'Is there a minimum booking time?',
    a: 'Yes. We require a minimum of 5 hours per session to ensure meaningful progress and results.',
  },
  {
    q: 'Is a consultation required?',
    a: 'Yes. A consultation is required to provide an accurate estimate. Consultations can be in-person or virtual. For virtual consultations, clients must provide clear images of all areas needing organization, photos of walls, closets, cabinets, and storage areas, and measurements or dimensions where applicable.',
  },
  {
    q: 'What happens during a consultation?',
    a: 'During your consultation, we will assess your space and needs, discuss your goals, lifestyle, or business operations, identify problem areas and opportunities, provide a recommended plan and estimated timeline, and discuss budget and any materials needed.',
  },
  {
    q: 'Is there a minimum number of spaces required?',
    a: 'No. We can organize one area or multiple spaces depending on your needs.',
  },
  {
    q: 'Should I be present during the organizing process?',
    a: 'That depends on your preference and the scope of the project. Some clients prefer to be involved in the decision-making process, while others prefer a hands-off, full-service experience. We will determine what works best during your consultation.',
  },
  {
    q: 'Do you provide organizing products?',
    a: 'Yes. We can recommend and source organizing products tailored to your space, style, and budget. All purchases will be discussed and approved prior to buying.',
  },
  {
    q: 'Do you charge for consultations?',
    a: 'Consultations are complimentary for local clients.',
  },
  {
    q: 'How do I book?',
    a: 'Getting started is simple. Request a consultation, receive your customized plan, and schedule your service. Use the contact form below or reach out directly — we will take it from there.',
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
