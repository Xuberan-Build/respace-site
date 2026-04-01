import './Testimonials.css'

const quotes = [
  {
    text: 'Respace completely changed how I function in my home. Everything finally has a place—and I feel lighter.',
    location: 'Atlanta, GA',
  },
  {
    text: 'My space went from overwhelming to peaceful in one session. It\'s truly life-changing.',
    location: 'Atlanta, GA',
  },
  {
    text: 'This wasn\'t just organizing—it felt like a reset for my life.',
    location: 'Atlanta, GA',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials bg-sage">
      <div className="section-inner">
        <div className="section-header testimonials-header">
          <p className="label testimonials-label">Client Stories</p>
          <h2 className="display display-lg testimonials-heading">
            Transformation,<br /><em>In Their Words</em>
          </h2>
        </div>

        <div className="testimonials-grid">
          {quotes.map((q, i) => (
            <div className="testimonial" key={i}>
              <span className="testimonial-mark">"</span>
              <p className="testimonial-text">{q.text}</p>
              <p className="testimonial-attr">— {q.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
