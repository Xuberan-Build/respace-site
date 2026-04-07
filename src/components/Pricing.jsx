import './Pricing.css'

const packages = [
  {
    name: 'Essential Re-Space',
    tagline: 'A foundational reset for intentional, functional living',
    duration: '3–5 hour engagement',
    idealFor: 'Closets, pantries, desks, and small spaces',
    features: [
      'Light edit and decluttering of items',
      'Foundational system creation',
      'Functional flow enhancement',
    ],
    investment: '$255 – $500',
    popular: false,
    luxury: false,
  },
  {
    name: 'Signature Re-Space',
    tagline: 'A curated transformation designed to restore flow and clarity',
    duration: '6–10 hour engagement',
    idealFor: 'Kitchens, bedrooms, offices, retail zones',
    features: [
      'Guided edit and refinement of belongings',
      'Customized organization systems',
      'Spatial flow optimization',
      'Tailored product recommendations',
    ],
    investment: '$510 – $1,000',
    popular: true,
    luxury: false,
  },
  {
    name: 'Full Re-Space Transformation',
    tagline: 'A comprehensive reset designed to elevate your entire environment',
    duration: '12+ hour engagement — multi-day',
    idealFor: 'Full homes, corporate offices, retail stores, restaurants',
    features: [
      'Complete space transformation',
      'System design and layout refinement',
      'Functionality and aesthetic alignment',
      'Hands-on or fully managed experience',
    ],
    investment: '$1,200 – $4,000+',
    note: 'Custom proposal provided',
    popular: false,
    luxury: false,
  },
  {
    name: 'The Re-Space Experience',
    tagline: 'A high-touch, done-for-you transformation experience',
    duration: 'Fully managed engagement',
    idealFor: 'Clients seeking a fully elevated, hands-off service',
    features: [
      'Full-service transformation',
      'Curated product sourcing and purchasing',
      'Visual styling — containers, labeling, finishing touches',
      'Priority scheduling',
      'Ongoing maintenance planning',
    ],
    investment: 'Starting at $3,000+',
    popular: false,
    luxury: true,
  },
]

const addons = [
  { name: 'Product sourcing and procurement', price: '$100 – $250 or % of total spend' },
  { name: 'Elevated styling and labeling', price: '$100 – $300' },
  { name: 'Ongoing maintenance visits', price: '$200 – $500 / month' },
  { name: 'Expedited scheduling', price: '+25% of investment' },
]

export default function Pricing() {
  return (
    <section className="section pricing bg-cream" id="pricing">
      <div className="section-inner">
        <div className="section-header pricing-header">
          <p className="label">Investment</p>
          <h2 className="display display-lg">Simple, Transparent<br /><em>Pricing</em></h2>
        </div>

        <div className="pricing-grid">
          {packages.map((pkg) => (
            <div
              className={`pricing-card${pkg.popular ? ' pricing-card--featured' : ''}${pkg.luxury ? ' pricing-card--luxury' : ''}`}
              key={pkg.name}
            >
              {pkg.popular && <span className="pricing-badge">Most Popular</span>}
              {pkg.luxury && <span className="pricing-badge">Luxury Tier</span>}
              <h3 className="pricing-name display display-sm">{pkg.name}</h3>
              <p className="pricing-tagline">{pkg.tagline}</p>
              <div className="pricing-line" />
              <p className="pricing-meta">
                <span className="pricing-meta-label">Ideal for</span>
                {pkg.idealFor}
              </p>
              <p className="pricing-meta">
                <span className="pricing-meta-label">Duration</span>
                {pkg.duration}
              </p>
              <ul className="pricing-features">
                {pkg.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="pricing-investment">
                <span className="pricing-investment-amount">{pkg.investment}</span>
                {pkg.note && <span className="pricing-investment-note">{pkg.note}</span>}
              </div>
              <a
                href="#contact"
                className={`btn ${pkg.popular || pkg.luxury ? 'btn-primary' : 'btn-secondary'} pricing-btn`}
              >
                Book a Consultation
              </a>
            </div>
          ))}
        </div>

        <div className="pricing-addons">
          <p className="label pricing-addons-title">Curated Enhancements</p>
          <div className="pricing-addons-grid">
            {addons.map((addon) => (
              <div className="pricing-addon" key={addon.name}>
                <span className="pricing-addon-name">{addon.name}</span>
                <span className="pricing-addon-price">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
