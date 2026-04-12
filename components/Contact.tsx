'use client'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', company: '', service: '', message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="section" id="contact">
      <div className="sr">
        <div className="sec-eyebrow">Get In Touch</div>
        <h2 className="sec-title">Request a Quote or <span className="dim">Consultation</span></h2>
      </div>

      <div className="contact-grid">
        {/* Info Panel */}
        <div className="contact-info-glass sr d1">
          <div className="ci-title">SIV Facilities Management Services Pvt. Ltd.</div>

          <div className="ci-item">
            <div className="ci-lbl">Phone</div>
            <div className="ci-val">
              <a href="tel:9310981108">+91 9310981108</a><br />
              <a href="tel:7289075329">+91 7289075329</a>
            </div>
          </div>

          <div className="ci-item">
            <div className="ci-lbl">Email</div>
            <div className="ci-val">
              <a href="mailto:smileyivaanfms@gmail.com">smileyivaanfms@gmail.com</a>
            </div>
          </div>

          <div className="ci-item">
            <div className="ci-lbl">Address</div>
            <div className="ci-val">
              H 65, R.K. Puram Sector-7,<br />
              Adarsh Colony, Near Satija Market,<br />
              New Delhi — 110022
            </div>
          </div>

          <div className="ci-item">
            <div className="ci-lbl">Hours</div>
            <div className="ci-val">Monday – Saturday, 9 AM – 7 PM</div>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-glass sr d2">
          <div className="cf-title">Send Us an Enquiry</div>
          <form onSubmit={handleSubmit}>
            <div className="form-row-2">
              <div className="fld">
                <label className="fl">Full Name</label>
                <input className="fi" type="text" name="name" placeholder="Your full name"
                  value={form.name} onChange={handleChange} required />
              </div>
              <div className="fld">
                <label className="fl">Phone</label>
                <input className="fi" type="tel" name="phone" placeholder="+91 XXXXX XXXXX"
                  value={form.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className="fld">
              <label className="fl">Email Address</label>
              <input className="fi" type="email" name="email" placeholder="you@company.com"
                value={form.email} onChange={handleChange} required />
            </div>

            <div className="fld">
              <label className="fl">Company / Organisation</label>
              <input className="fi" type="text" name="company" placeholder="Company name"
                value={form.company} onChange={handleChange} />
            </div>

            <div className="fld">
              <label className="fl">Service Required</label>
              <select className="fi" name="service" value={form.service} onChange={handleChange}>
                <option value="" disabled>Select a service</option>
                <option>Housekeeping Services</option>
                <option>Office Housekeeping</option>
                <option>Pantry Boy Services</option>
                <option>Deep Cleaning Services</option>
                <option>Carpet Shampooing</option>
                <option>Manpower Supply (UT / KST)</option>
              </select>
            </div>

            <div className="fld">
              <label className="fl">Message</label>
              <textarea className="fi fi-ta" name="message"
                placeholder="Describe your requirements, site size, preferred schedule..."
                value={form.message} onChange={handleChange} />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={submitted}
            >
              {submitted ? '✓ Enquiry Submitted — We Will Contact You Shortly' : 'Submit Enquiry →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
