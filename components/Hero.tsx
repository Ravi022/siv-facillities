import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        New Delhi · Trusted Nationwide
      </div>

      <h1 className="hero-h1">
        Your Trusted<br />
        Partner in <span className="red-word">Facility</span><br />
        Management
      </h1>

      <p className="hero-sub">
        Professional housekeeping, deep cleaning, and manpower solutions — delivered to
        corporate offices, hospitality venues, and institutions across India.
      </p>

      <div className="hero-btns">
        <a href="#services" className="btn-hero-main">Explore Services</a>
        <a href="#contact" className="btn-hero-ghost">Request a Quote</a>
      </div>

      <div className="hero-photos">
        <div className="hero-photo hp1 tilt-card">
          <Image src="/images/staff-outdoor.jpg" alt="SIV Staff" width={200} height={280} style={{objectFit:'cover',objectPosition:'top'}} />
        </div>
        <div className="hero-photo hp2 tilt-card">
          <Image src="/images/staff-bar.jpg" alt="SIV Staff at venue" width={240} height={340} style={{objectFit:'cover',objectPosition:'top'}} />
        </div>
        <div className="hero-photo hp3 tilt-card">
          <Image src="/images/staff-corporate.jpg" alt="SIV Housekeeping" width={200} height={280} style={{objectFit:'cover',objectPosition:'top'}} />
        </div>
      </div>
    </section>
  )
}
