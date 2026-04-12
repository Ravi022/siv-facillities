import type { ReactNode } from 'react'
import Image from 'next/image'

type ClientSector = 'hospitality' | 'travel' | 'fnb' | 'security' | 'real-estate'

function ClientSectorLogo({ sector }: { sector: ClientSector }) {
  const svg = (children: ReactNode) => (
    <svg
      className="cc-icon-svg"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {children}
    </svg>
  )

  switch (sector) {
    case 'hospitality':
      return svg(
        <>
          <path
            d="M6 26V14h4v12M10 14h12v12H10M22 14V8a4 4 0 0 0-8 0v6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 18h4M14 22h4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </>
      )
    case 'travel':
      return svg(
        <>
          <path
            d="M11 12h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M14 12V10a4 4 0 0 1 8 0v2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M11 18h10"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </>
      )
    case 'fnb':
      return svg(
        <>
          <path
            d="M10 8v14a3 3 0 0 0 6 0V8"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M13 8v14M16 8v14"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="22" cy="20" r="5" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M22 17v6M19.5 20h5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </>
      )
    case 'security':
      return svg(
        <>
          <path
            d="M16 4 6 9v9c0 5.25 4.25 9.5 10 10 5.75-.5 10-4.75 10-10V9L16 4Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="m12 16 3 3 6-7"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    case 'real-estate':
      return svg(
        <>
          <path
            d="M6 26V14l10-8 10 8v12"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 26V18h8v8"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M16 18v-4h4v4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </>
      )
  }
}

// ── CLIENTS ────────────────────────────────────────────────
const clients: {
  num: string
  name: string
  sector: string
  sectorKey: ClientSector
}[] = [
  { num: '01', name: 'Smokey Lounge Cafe & Bar', sector: 'Hospitality', sectorKey: 'hospitality' },
  { num: '02', name: 'DTS Travels Pvt. Ltd.', sector: 'Travel', sectorKey: 'travel' },
  { num: '03', name: 'Biryani Wala Restaurant', sector: 'F&B', sectorKey: 'fnb' },
  { num: '04', name: '24Sky Security Services Pvt. Ltd.', sector: 'Security', sectorKey: 'security' },
  { num: '05', name: 'Bijli Realty Pvt. Ltd.', sector: 'Real Estate', sectorKey: 'real-estate' },
]

export function Clients() {
  return (
    <section className="section" id="clients">
      <div className="sr">
        <div className="sec-eyebrow">Trusted By</div>
        <h2 className="sec-title">Our <span className="dim">Clients &amp; Partners</span></h2>
        <p className="sec-desc">
          Leading organisations across hospitality, travel, food service, security, and real
          estate trust SIV for consistent, high-quality facility management.
        </p>
      </div>
      <div className="clients-grid">
        {clients.map((c, i) => (
          <div key={c.num} className={`client-card sr d${i + 1} tilt-card`}>
            <div className="cc-num">{c.num}</div>
            <div className="cc-icon" aria-hidden>
              <ClientSectorLogo sector={c.sectorKey} />
            </div>
            <div className="cc-name">{c.name}</div>
            <div className="cc-sector">{c.sector}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── TEAM ────────────────────────────────────────────────────
const team = [
  {
    img: '/images/owner.png',
    role: 'Founder & Managing Director',
    name: 'Vinod Kumar',
    note: 'Leading SIV with vision and commitment. Contact: +91 9310981108 / 7289075329',
  },
  {
    img: '/images/staff-bar.jpg',
    role: 'Deployed Staff — Hospitality',
    name: 'Facility Executives',
    note: 'Uniformed professionals delivering premier hygiene at hospitality client sites.',
  },
  {
    img: '/images/staff-corporate.jpg',
    role: 'Deployed Staff — Corporate',
    name: 'Housekeeping Team',
    note: 'Background-verified housekeeping staff for corporate and commercial environments.',
  },
]

export function Team() {
  return (
    <section className="section" id="team">
      <div className="sr">
        <div className="sec-eyebrow">The People</div>
        <h2 className="sec-title">Leadership &amp; <span className="dim">Field Team</span></h2>
        <p className="sec-desc">
          From founder to frontline — every SIV member is uniformed, trained, and committed
          to an exceptional standard of service.
        </p>
      </div>
      <div className="team-grid">
        {team.map((t, i) => (
          <div key={t.name} className={`team-card sr d${i + 1} tilt-card`}>
            <div className="tc-img">
              <Image src={t.img} alt={t.name} width={400} height={320}
                style={{objectFit:'cover',objectPosition:'top center',width:'100%',height:'320px'}} />
              <div className="tc-img-overlay" />
            </div>
            <div className="tc-body">
              <div className="tc-role">{t.role}</div>
              <div className="tc-name">{t.name}</div>
              <div className="tc-note">{t.note}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── MISSION & VISION ────────────────────────────────────────
export function MissionVision() {
  return (
    <section className="section">
      <div className="sr">
        <div className="sec-eyebrow">Purpose</div>
        <h2 className="sec-title">Mission &amp; <span className="dim">Vision</span></h2>
      </div>
      <div className="mv-grid">
        <div className="mv-card sr d1">
          <div className="mv-tag">Mission</div>
          <div className="mv-title">Enhancing Workplace Efficiency &amp; Hygiene</div>
          <div className="mv-text">
            To provide dependable, high-quality facility management services that enhance
            workplace efficiency and hygiene standards — ensuring every client space reflects
            professionalism and care.
          </div>
        </div>
        <div className="mv-card sr d2">
          <div className="mv-tag">Vision</div>
          <div className="mv-title">Leading Through Excellence Across India</div>
          <div className="mv-text">
            To become a leading name in facility management by consistently delivering
            excellence, building long-term client relationships, and setting new benchmarks
            in service quality.
          </div>
        </div>
      </div>
    </section>
  )
}

// ── STATS ────────────────────────────────────────────────────
export function Stats() {
  return (
    <div className="stats-row">
      {[
        { num: '5', sup: '+', label: 'Corporate Clients' },
        { num: '6', sup: '+', label: 'Service Lines' },
        { num: '100', sup: '%', label: 'Verified Staff' },
      ].map((s) => (
        <div key={s.label} className="stat-glass sr tilt-card">
          <div className="stat-num">{s.num}<span className="accent">{s.sup}</span></div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

// ── FOOTER ───────────────────────────────────────────────────
export function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <div className="footer-logo-cube">SIV</div>
        <div>
          <div style={{fontSize:'14px',fontWeight:600,color:'#fff'}}>SIV Facilities Management Services</div>
          <div style={{fontSize:'11px',color:'rgba(255,255,255,0.3)',marginTop:'2px'}}>
            © 2026 · New Delhi — 110022 · Registered in India
          </div>
        </div>
      </div>
      <div className="footer-links">
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  )
}
