import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { WEDDING_DATE } from '../data/weddingData';

export default function Hero({ lang, t }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = WEDDING_DATE - now;
      setTimeLeft({
        days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((diff / 1000 / 60) % 60)),
        seconds: Math.max(0, Math.floor((diff / 1000) % 60))
      });
    };
    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, []);

  const downloadICS = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Mohit and Mohini//Wedding Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:Mohit & Mohini Wedding Celebration',
      'DESCRIPTION:Join us for the auspicious wedding festivities of Mohit and Mohini in Khajuraho! Haldi, Sangeet, Baaraat & Vedic Pheras.',
      'LOCATION:Ivara Resorts, Khajuraho, Madhya Pradesh, India',
      'DTSTART:20261125T060000Z',
      'DTEND:20261126T180000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Mohit_Mohini_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="hero-section">
      {/* Corner Watercolor Bouquets */}
      <img
        src="/assets/hero-bouquet-top-right-D0_T51yK.png"
        alt="Floral Corner Art"
        className="hero-corner-art hero-corner-art--top-right"
      />
      <img
        src="/assets/hero-bouquet-bottom-left-DzXdwcuV.png"
        alt="Floral Corner Art"
        className="hero-corner-art hero-corner-art--bottom-left"
      />

      {/* Swaying Evil Eye Charm */}
      <div className="evil-eye-wrapper" title="Nazar Na Lage | Auspicious Protection">
        <div className="evil-eye-thread" />
        <img src="/assets/evil-eye-BCJVWzZn.png" alt="Evil Eye Charm" className="evil-eye-img" />
      </div>

      <div className="hero-container">
        {/* Sacred Inscription */}
        <div className="hero-sacred-blessing">
          <span className="sacred-leaf">❧</span>
          <span className="sacred-text">{t.shreeGanesha}</span>
          <span className="sacred-leaf">❧</span>
        </div>

        {/* Monogram Crest */}
        <div className="hero-crest-wrap">
          <div className="hero-crest-halo" />
          <img
            src="/assets/hero-monogram-watercolor-XBwObef-.png"
            alt="Mohit & Mohini Monogram Crest"
            className="hero-crest-img"
          />
        </div>

        {/* Kicker */}
        <p className="hero-kicker">{t.heroKicker}</p>

        {/* Couple Names */}
        <div className="hero-names-lockup">
          <h1 className="hero-name hero-name--groom">{t.groomName}</h1>
          <div className="hero-ampersand-wrap">
            <span className="hero-amp-line" />
            <span className="hero-ampersand">&</span>
            <span className="hero-amp-line" />
          </div>
          <h1 className="hero-name hero-name--bride">{t.brideName}</h1>
        </div>

        {/* Lineage */}
        <div className="hero-lineage">
          <p className="lineage-line">{t.lineageGroom}</p>
          <span className="lineage-dot">✦</span>
          <p className="lineage-line">{t.lineageBride}</p>
        </div>

        {/* Dates & Location */}
        <div className="hero-meta-box">
          <div className="hero-meta-item">
            <Calendar size={18} className="meta-icon" />
            <span className="meta-text">{t.heroDates}</span>
          </div>
          <span className="meta-divider">|</span>
          <div className="hero-meta-item">
            <MapPin size={18} className="meta-icon" />
            <span className="meta-text">{t.heroVenueCity}</span>
          </div>
        </div>

        {/* Live Countdown Clock */}
        <div className="live-countdown-container">
          <p className="countdown-eyebrow">{t.countdownEyebrow}</p>
          <div className="countdown-grid">
            <div className="countdown-card">
              <span className="count-num">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="count-unit">{lang === 'hi' ? 'दिन' : 'Days'}</span>
            </div>
            <span className="count-sep">:</span>
            <div className="countdown-card">
              <span className="count-num">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="count-unit">{lang === 'hi' ? 'घंटे' : 'Hours'}</span>
            </div>
            <span className="count-sep">:</span>
            <div className="countdown-card">
              <span className="count-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="count-unit">{lang === 'hi' ? 'मिनट' : 'Mins'}</span>
            </div>
            <span className="count-sep">:</span>
            <div className="countdown-card">
              <span className="count-num">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="count-unit">{lang === 'hi' ? 'सेकंड' : 'Secs'}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hero-cta-group">
          <a href="#programme" className="hero-btn hero-btn--primary">
            <span>{lang === 'hi' ? 'कार्यक्रम देखें' : 'View Programme'}</span>
            <ArrowRight size={16} />
          </a>
          <button className="hero-btn hero-btn--secondary" onClick={downloadICS}>
            <Calendar size={16} />
            <span>{lang === 'hi' ? 'कैलेंडर में जोड़ें' : 'Save the Date'}</span>
          </button>
        </div>

        {/* Scroll Cue */}
        <a href="#welcome-note" className="hero-scroll-cue">
          <span className="scroll-cue-text">{lang === 'hi' ? 'विस्तार से देखें' : 'Scroll to Explore'}</span>
          <div className="scroll-cue-mouse">
            <div className="scroll-cue-wheel" />
          </div>
        </a>
      </div>
    </section>
  );
}
