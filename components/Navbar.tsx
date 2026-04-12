'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <div className="logo-cube">SIV</div>
        <div className="logo-text-wrap">
          <div className="l1">SIV Facilities</div>
          <div className="l2">Management Services Pvt. Ltd.</div>
        </div>
      </Link>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#why">Why Us</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Get a Quote →</a>
    </nav>
  )
}
