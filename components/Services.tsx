const services = [
  {
    num: '01',
    name: 'Housekeeping',
    desc: 'Professional trained staff maintaining cleanliness and hygiene across offices, buildings, and commercial areas daily.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
  },
  {
    num: '02',
    name: 'Office Housekeeping',
    desc: 'Daily dusting, waste management, and sanitation ensuring a clean, organised, productive workplace every day.',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
  },
  {
    num: '03',
    name: 'Pantry Boy Services',
    desc: 'Skilled pantry staff for beverage service, pantry hygiene, and smooth office operations throughout the day.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
    ),
  },
  {
    num: '04',
    name: 'Deep Cleaning',
    desc: 'Intensive cleaning of floors, walls, furniture, and hard-to-reach areas using advanced professional equipment.',
    icon: (
      <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    ),
  },
  {
    num: '05',
    name: 'Carpet Shampooing',
    desc: 'Specialised carpet cleaning removing stains, dirt, and allergens — restoring a fresh and healthy environment.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
    ),
  },
  {
    num: '06',
    name: 'Manpower Supply',
    desc: 'Background-verified UT & KST manpower deployment — reliable, trained personnel for your operational needs.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="svc-header sr">
        <div>
          <div className="sec-eyebrow">What We Offer</div>
          <h2 className="sec-title">
            Integrated <span className="dim">Facility Services</span>
          </h2>
        </div>
        <p className="sec-desc">
          Every solution tailored to your environment — from daily office upkeep to intensive
          deep cleans and skilled manpower deployment.
        </p>
      </div>

      <div className="svc-grid">
        {services.map((s, i) => (
          <div key={s.num} className={`svc-card sr d${i + 1} tilt-card`}>
            <div className="svc-n">{s.num}</div>
            <div className="svc-icon">{s.icon}</div>
            <div className="svc-name">{s.name}</div>
            <div className="svc-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
