import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Contact from '@/components/Contact'
import ClientEffects from '@/components/ClientEffects'
import { Clients, Team, MissionVision, Stats, Footer } from '@/components/Sections'

export default function Home() {
  return (
    <>
      {/* Background layers */}
      <div className="bg-canvas" />
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
      <div className="noise" />

      {/* Client-side interactions */}
      <ClientEffects />

      {/* Page */}
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Clients />
      <Team />
      <MissionVision />
      <Contact />
      <Footer />
    </>
  )
}
