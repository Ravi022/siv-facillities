# SIV Facilities Management Services — Next.js Website

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# Open http://localhost:3000
```

## 🌐 Deploy to Vercel (Easiest — Free)

1. Push this folder to a GitHub repository
2. Go to https://vercel.com → "Add New Project"
3. Import your GitHub repo
4. Click **Deploy** — done! You get a live URL instantly

## 🌐 Deploy to Netlify

1. Run `npm run build` locally
2. Go to https://netlify.com → drag & drop the `.next` folder
   OR connect your GitHub repo for auto-deploys

## 🌐 Deploy to a VPS / Server

```bash
npm install
npm run build
npm start
# Runs on port 3000 — use nginx as a reverse proxy
```

## 📁 Project Structure

```
siv-nextjs/
├── app/
│   ├── layout.tsx        # Root layout + metadata (SEO)
│   ├── page.tsx          # Main page — assembles all sections
│   └── globals.css       # All styles (glassmorphism, animations)
├── components/
│   ├── Navbar.tsx        # Floating glass navbar
│   ├── Hero.tsx          # Hero section with 3D photo stack
│   ├── Services.tsx      # 6 service cards with tilt effect
│   ├── WhyUs.tsx         # Why choose SIV + feature list
│   ├── Sections.tsx      # Clients, Team, Stats, Mission/Vision, Footer
│   ├── Contact.tsx       # Enquiry form (client component)
│   └── ClientEffects.tsx # Scroll reveal + 3D tilt + orb parallax
└── public/
    └── images/           # All 5 staff/team photos
```

## ✏️ Customising Content

- **Contact details**: Edit `components/Contact.tsx`
- **Services list**: Edit `components/Services.tsx`
- **Clients**: Edit `components/Sections.tsx` → `clients` array
- **Team**: Edit `components/Sections.tsx` → `team` array
- **Colors**: Edit `app/globals.css` → `:root` variables
- **Images**: Replace files in `public/images/`

## 📞 Contact

SIV Facilities Management Services Pvt. Ltd.  
H 65, R.K. Puram Sector-7, New Delhi — 110022  
📞 9310981108 / 7289075329  
✉️ smileyivaanfms@gmail.com
