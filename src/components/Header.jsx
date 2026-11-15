import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';

export default function Header({ lang, setLang, t }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.warn('Autoplay blocked:', err);
      });
    }
  };

  const navItems = [
    { href: '#programme', label: t.navProgramme },
    { href: '#dress-code', label: t.navDressCode },
    { href: '#venue', label: t.navVenue },
    { href: '#family', label: t.navFamily },
    { href: '#notes', label: t.navNotes },
    { href: '#rsvp', label: t.navRsvp, highlight: true }
  ];

  return (
    <header className="wedding-header">
      <div className="header-inner">
        <a href="#hero" className="nav-brand">
          <span className="brand-monogram">M&M</span>
          <span className="brand-names">Mohit & Mohini</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`nav-link ${item.highlight ? 'nav-link--highlight' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="header-actions">
          {/* Audio Player Button */}
          <button
            className={`utility-btn music-btn ${isPlaying ? 'playing' : ''}`}
            onClick={toggleMusic}
            title={isPlaying ? 'Pause Shehnai' : 'Play Shehnai'}
          >
            {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span className="music-label">{isPlaying ? (lang === 'hi' ? 'बज रही है' : 'Playing') : (lang === 'hi' ? 'शहनाई' : 'Shehnai')}</span>
            <span className="sound-wave" aria-hidden="true">
              <i /><i /><i /><i />
            </span>
          </button>
          <audio ref={audioRef} loop preload="auto">
            <source src="/assets/wedding-shehnai.mp3" type="audio/mpeg" />
          </audio>

          {/* Language Toggle */}
          <button
            className="utility-btn lang-btn"
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            title="Switch Language"
          >
            <span className={`lang-option ${lang === 'en' ? 'active' : ''}`}>EN</span>
            <span className="lang-divider">/</span>
            <span className={`lang-option ${lang === 'hi' ? 'active' : ''}`}>हि</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="mobile-nav-drawer open">
          <nav className="mobile-nav-links">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`mobile-nav-item ${item.highlight ? 'mobile-nav-item--highlight' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
