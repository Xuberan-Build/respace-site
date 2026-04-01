import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-accent" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-content">
          <p className="label hero-label">Luxury Home Organization</p>
          <div className="divider" />

          <h1 className="display display-xl hero-heading">
            Reclaim Your Space.<br />
            <em>Realign Your Life.</em>
          </h1>

          <p className="body-lg hero-sub">
            Luxury home and lifestyle organization designed to bring clarity,
            calm, and elevated flow into your everyday living.
          </p>

          <p className="hero-support">
            At Respace, we don't just organize—we transform environments into
            intentional, functional sanctuaries.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Book Your Transformation</a>
            <a href="#services" className="btn btn-secondary">Explore Services</a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">200+</span>
            <span className="hero-stat-label">Spaces Transformed</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">5★</span>
            <span className="hero-stat-label">Client Experience</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">3hr</span>
            <span className="hero-stat-label">Minimum Session</span>
          </div>
        </div>
      </div>
    </section>
  )
}
