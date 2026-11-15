# Mohit weds Mohini — Digital Wedding Invitation Card (React 18 + Vite)

A bespoke, royal Indian digital wedding invitation card web application created for **Mohit & Mohini**, inspired by the luxury aesthetic of [yumisani.com](https://yumisani.com).

Built entirely from scratch as a clean, modular **React 18 + Vite** application (no minified bundles or black-box chunks).

---

## 📁 Project Structure

```text
mohit-weds-mohini/
├── public/                     # Static assets (images, audio, videos, icons)
│   ├── assets/                 # Botanical bouquets, monograms, illustrations, shehnai audio
│   └── videos/                 # Background loops
├── src/
│   ├── components/             # Modular React components
│   │   ├── OpeningSplash.jsx   # Auspicious reveal & rolling countdown
│   │   ├── Header.jsx          # Blur nav, shehnai audio toggle, EN/HI switcher
│   │   ├── PetalsCanvas.jsx    # Real-time 2D falling flower petals physics
│   │   ├── Hero.jsx            # Couple typography, swinging talisman, live countdown, .ics calendar
│   │   ├── WelcomeEditorial.jsx# Welcome note & background video
│   │   ├── Programme.jsx       # Day 1 & Day 2 events with artist highlights
│   │   ├── DressCode.jsx       # Swatches & attire recommendations
│   │   ├── Venue.jsx           # Ivara Khajuraho photo gallery & travel guide
│   │   ├── Family.jsx          # Groom & Bride family member rosters
│   │   ├── Notes.jsx           # FAQ accordion
│   │   ├── RSVP.jsx            # RSVP form, localStorage wishes wall, WhatsApp share
│   │   └── Footer.jsx          # Closing blessings & monograms
│   ├── data/
│   │   └── weddingData.js      # Centralized bilingual content model (easy editing!)
│   ├── App.jsx                 # Main state coordinator
│   ├── index.css               # Royal Indian parchment, gold gradients, animations
│   └── main.jsx                # React 18 DOM root
├── index.html                  # HTML entry point with Google Fonts preloads
├── vite.config.js              # Vite configuration
└── package.json                # React 18 & Vite dependencies
```

---

## ✨ Features

- **React 18 + Vite**: Lightning-fast Hot Module Replacement (HMR) and optimized modern builds.
- **Pure Modular JSX Source**: Every section is cleanly divided into standalone components in `src/components/`.
- **Centralized Data**: Customize names, dates, itineraries, and family trees easily in [`src/data/weddingData.js`](src/data/weddingData.js).
- **Sacred Inscription & Opening Reveal**: Auspicious `॥ श्री गणेशाय नमः ॥` animation with rolling days countdown.
- **Audio Experience**: Embedded classical wedding shehnai player with animated equalizer bars.
- **Live 2D Petals Canvas**: Falling rose & marigold petals floating gently on the screen.
- **Live Countdown & Calendar (.ics)**: Real-time countdown to the wedding day with 1-click Google / Apple / Outlook calendar event download.
- **Bilingual (English & Hindi)**: Instant dynamic language toggle (`EN` / `हि`).
- **Interactive RSVP & Wishes Wall**: Guests can submit blessings saved locally, or share directly to WhatsApp.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production build in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 One-Click Deployment
This application can be deployed directly to:
- **Vercel**: Import the GitHub repo and deploy with default Vite preset (`npm run build`, output: `dist`).
- **Netlify**: Set build command `npm run build` and publish directory `dist`.
- **GitHub Pages**: Build and push the `dist/` directory or use GitHub Actions for Vite.
