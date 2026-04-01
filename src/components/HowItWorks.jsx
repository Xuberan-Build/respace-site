import './HowItWorks.css'

const steps = [
  {
    num: '01',
    title: 'Vision & Assessment',
    body: 'We begin with a personalized consultation to understand your lifestyle, habits, and goals for your space.',
  },
  {
    num: '02',
    title: 'Curate & Transform',
    body: 'We declutter, organize, and redesign your environment using systems tailored to your daily flow.',
  },
  {
    num: '03',
    title: 'Maintain & Elevate',
    body: 'You receive simple, sustainable systems to maintain your space with ease and confidence.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section how bg-cream" id="process">
      <div className="section-inner">
        <div className="section-header how-header">
          <p className="label">The Process</p>
          <h2 className="display display-lg">Three Steps to a<br /><em>Transformed Space</em></h2>
        </div>

        <div className="how-steps">
          {steps.map((step) => (
            <div className="how-step" key={step.num}>
              <span className="how-step-num">{step.num}</span>
              <div className="how-step-line" />
              <h3 className="how-step-title display display-sm">{step.title}</h3>
              <p className="how-step-body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
