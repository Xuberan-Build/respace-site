import './Services.css'

const services = [
  {
    title: 'Home Reset',
    body: 'Full-home or room-by-room organization tailored to your lifestyle.',
  },
  {
    title: 'Closet Curation',
    body: 'Refined wardrobe organization designed for ease and elegance.',
  },
  {
    title: 'Move & Transition',
    body: 'Seamless unpacking and setup so your new space feels like home instantly.',
  },
  {
    title: 'Office & Workspace',
    body: 'Streamlined systems that support productivity and growth.',
  },
  {
    title: 'Lifestyle Reset',
    body: 'A deep refresh and realignment session for your full living environment.',
  },
  {
    title: 'Maintenance Plans',
    body: 'Monthly and quarterly upkeep to keep your space aligned and elevated.',
  },
]

export default function Services() {
  return (
    <section className="section services bg-ivory" id="services">
      <div className="section-inner">
        <div className="section-header services-header">
          <p className="label">What We Offer</p>
          <h2 className="display display-lg">Every Space,<br /><em>Intentionally Designed</em></h2>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={s.title}>
              <span className="service-card-index">0{i + 1}</span>
              <h3 className="service-card-title display display-sm">{s.title}</h3>
              <div className="service-card-line" />
              <p className="service-card-body">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <a href="#contact" className="btn btn-primary">Schedule Your Consultation</a>
        </div>
      </div>
    </section>
  )
}
