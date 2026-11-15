import React, { useState, useEffect } from 'react';
import { WEDDING_DATE } from '../data/weddingData';

export default function OpeningSplash({ lang, onEnter }) {
  const [days, setDays] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const now = new Date();
    const diff = WEDDING_DATE - now;
    const totalDays = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
    setDays(totalDays);
  }, []);

  const handleOpen = () => {
    setIsVisible(false);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <div className={`splash-reveal ${!isVisible ? 'splash-hidden' : ''}`}>
      <div className="splash-inner">
        <div className="splash-blessing">
          <span className="blessing-ornament">✧</span>
          <span className="blessing-text">॥ श्री गणेशाय नमः ॥</span>
          <span className="blessing-ornament">✧</span>
        </div>

        <div className="splash-counter-box">
          <div className="splash-number">{String(days).padStart(2, '0')}</div>
          <div className="splash-label">
            {lang === 'hi' ? 'दिन बाकी हैं' : 'DAYS TO GO'}
          </div>
        </div>

        <p className="splash-couple-title">MOHIT & MOHINI</p>

        <button className="splash-enter-btn" onClick={handleOpen}>
          <span>{lang === 'hi' ? 'निमंत्रण पत्र खोलें' : 'Open Invitation'}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
