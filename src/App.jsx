import React, { useState, useEffect } from 'react';
import { translations } from './data/weddingData';
import PetalsCanvas from './components/PetalsCanvas';
import OpeningSplash from './components/OpeningSplash';
import Header from './components/Header';
import Hero from './components/Hero';
import WelcomeEditorial from './components/WelcomeEditorial';
import Programme from './components/Programme';
import DressCode from './components/DressCode';
import Venue from './components/Venue';
import Family from './components/Family';
import Notes from './components/Notes';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('wedding-lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('wedding-lang', lang);
    } catch {}
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <div className="wedding-body">
      {/* Background Handmade Paper Texture */}
      <div className="paper-texture" aria-hidden="true" />

      {/* Falling Flower Petals Canvas */}
      <PetalsCanvas />

      {/* Opening Countdown Curtain / Reveal Screen */}
      {!splashDone && (
        <OpeningSplash lang={lang} onEnter={() => setSplashDone(true)} />
      )}

      {/* Sticky Navigation & Shehnai Audio Player */}
      <Header lang={lang} setLang={setLang} t={t} />

      <main>
        {/* Hero Section */}
        <Hero lang={lang} t={t} />

        {/* Welcome Message & Video */}
        <WelcomeEditorial lang={lang} t={t} />

        {/* Celebration Programme (Day 1 & Day 2) */}
        <Programme lang={lang} t={t} />

        {/* What to Wear (Dress Code) */}
        <DressCode lang={lang} t={t} />

        {/* Destination & Venue */}
        <Venue lang={lang} t={t} />

        {/* Welcoming Family */}
        <Family lang={lang} t={t} />

        {/* Good to Know FAQs */}
        <Notes lang={lang} t={t} />

        {/* RSVP & Blessings Wall */}
        <RSVP lang={lang} t={t} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
