import Image from 'next/image'

const features = [
  { title: 'Trained & Verified Manpower', desc: 'All personnel background-checked and professionally trained before every deployment.' },
  { title: 'Modern Equipment', desc: 'Industry-grade machinery and eco-certified, safe cleaning chemicals on every job.' },
  { title: 'Customised Service Plans', desc: 'Tailored solutions based on your specific requirements, site, and schedule.' },
  { title: 'Reliable & Timely', desc: 'Punctuality and consistency are non-negotiable at SIV — every single day.' },
  { title: 'Strict Safety Standards', desc: 'All operations follow the highest hygiene, safety, and quality benchmarks.' },
]

export default function WhyUs() {
  return (
    <section className="section" id="why">
      <div className="sr">
        <div className="sec-eyebrow">Our Advantage</div>
        <h2 className="sec-title">Why Choose <span className="dim">SIV?</span></h2>
      </div>

      <div className="why-grid">
        <div className="why-left">
          <p className="sec-desc sr">
            We combine experienced manpower, modern equipment, and a client-first approach
            to deliver measurable, consistent results.
          </p>
          <div className="why-feats">
            {features.map((f, i) => (
              <div key={f.title} className={`why-feat sr d${i + 1}`}>
                <div className="wf-dot" />
                <div>
                  <div className="wf-title">{f.title}</div>
                  <div className="wf-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-photo-col sr">
          <div className="why-photo-card">
            <Image src="/images/staff-deployed.jpg" alt="SIV staff at corporate site" width={600} height={260} style={{objectFit:'cover',objectPosition:'top',width:'100%',height:'260px'}} />
            <div className="why-photo-caption">Corporate Deployment</div>
          </div>
          <div className="why-photo-card">
            <Image src="/images/staff-outdoor.jpg" alt="SIV outdoor staff" width={600} height={260} style={{objectFit:'cover',objectPosition:'top',width:'100%',height:'260px'}} />
            <div className="why-photo-caption">Field Ready Team</div>
          </div>
        </div>
      </div>
    </section>
  )
}
