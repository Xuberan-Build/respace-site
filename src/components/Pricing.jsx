import './Pricing.css'

const packages = [
  {
    name: 'Essential Reset',
    duration: '3–5 hours',
    desc: 'Perfect for small spaces or quick refreshes.',
    popular: false,
  },
  {
    name: 'Signature Respace',
    duration: '6–8 hours',
    desc: 'Ideal for multiple areas or deeper transformations.',
    popular: true,
  },
  {
    name: 'Full Transformation',
    duration: 'Multi-day',
    desc: 'For full-home or large-scale projects.',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section className="section pricing bg-cream" id="pricing">
      <div className="section-inner">
        <div className="section-header pricing-header">
          <p className="label">Investment</p>
          <h2 className="display display-lg">Simple, Transparent<br /><em>Pricing</em></h2>
          <p className="pricing-rate">$100 <span>/ hour</span> · 3 hour minimum</p>
        </div>

        <div className="pricing-grid">
          {packages.map((pkg) => (
            <div className={`pricing-card${pkg.popular ? ' pricing-card--featured' : ''}`} key={pkg.name}>
              {pkg.popular && <span className="pricing-badge">Most Popular</span>}
              <h3 className="pricing-name display display-sm">{pkg.name}</h3>
              <p className="pricing-duration">{pkg.duration}</p>
              <div className="pricing-line" />
              <p className="pricing-desc">{pkg.desc}</p>
              <a href="#contact" className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'} pricing-btn`}>
                Book Your Session
              </a>
            </div>
          ))}
        </div>

        <p className="pricing-addons">
          Optional add-ons: product sourcing, donation removal, maintenance visits
        </p>
      </div>
    </section>
  )
}
