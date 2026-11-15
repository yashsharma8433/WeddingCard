import React from 'react';

export default function Footer({ lang }) {
  return (
    <footer className="wedding-footer">
      <div className="footer-container">
        <div className="footer-monogram">
          <img
            src="/assets/hero-monogram-watercolor-XBwObef-.png"
            alt="M&M Monogram"
            className="footer-monogram-img"
          />
        </div>
        <p className="footer-couple-name">Mohit & Mohini</p>
        <p className="footer-dates">
          {lang === 'hi' ? '25 – 26 नवंबर 2026 • खजुराहो' : '25 – 26 November 2026 • Khajuraho'}
        </p>
        <div className="footer-flourish">❦ ❖ ❦</div>
        <p className="footer-blessing-note">
          {lang === 'hi'
            ? '"समस्त परिवार के साथ हम आपके शुभागमन की प्रतीक्षा में हैं।"'
            : '"Together with our families, we look forward to welcoming you."'}
        </p>
        <div className="footer-subtext">
          <span>Made with love for Mohit & Mohini</span>
        </div>
      </div>
    </footer>
  );
}
