import './About.css'

const values = [
  'Intentional Living',
  'Function Meets Beauty',
  'Judgment-Free Transformation',
  'Sustainable Systems',
  'Elevated Simplicity',
]

export default function About() {
  return (
    <section className="section about bg-cream" id="about">
      <div className="section-inner about-inner">
        <div className="about-text">
          <div className="section-header">
            <p className="label">Our Story</p>
            <h2 className="display display-lg about-heading">
              More Than Organization —<br /><em>It's a Reset</em>
            </h2>
          </div>

          <p className="body-lg about-p">
            Respace was created from a deep understanding that our environments directly
            impact how we feel, think, and show up in life.
          </p>
          <p className="body-lg about-p">
            What started as a passion for creating order and beauty evolved into a mission:
            to help people reconnect with their space as a source of peace, clarity, and power.
          </p>

          <div className="about-bio">
            <div className="divider" />
            <p className="about-bio-opener">
              I'm the founder of Respace, a luxury organizing experience rooted in
              transformation, intention, and flow.
            </p>
            <p className="about-bio-body">
              I believe your space should feel like a sanctuary — not a source of stress.
              My approach blends functionality with elevated design to create environments
              that truly support your lifestyle. Every project is personal.
              Every transformation is intentional.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary about-cta">Begin Your Respace Journey</a>
        </div>

        <div className="about-aside">
          <div className="about-values">
            <p className="label about-values-label">What We Believe</p>
            <ul className="about-values-list">
              {values.map((v) => (
                <li key={v}>
                  <span className="about-values-mark" aria-hidden="true">—</span>
                  {v}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-accent-block" aria-hidden="true">
            <span className="about-accent-text display">
              Your space,<br /><em>elevated.</em>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
