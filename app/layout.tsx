import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SIV Facilities Management Services Pvt. Ltd.',
  description: 'Professional housekeeping, deep cleaning, pantry services, carpet shampooing and manpower solutions across India. Trusted by corporate offices, hospitality, and commercial establishments.',
  keywords: 'facility management, housekeeping, deep cleaning, pantry boy, carpet shampooing, manpower supply, New Delhi',
  openGraph: {
    title: 'SIV Facilities Management Services Pvt. Ltd.',
    description: 'Your trusted partner in facility management — delivering professional cleaning and manpower solutions across India.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
