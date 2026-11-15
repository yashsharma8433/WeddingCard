import React, { useState } from 'react';
import { familyData } from '../data/weddingData';

export default function Family({ lang, t }) {
  const [activeSide, setActiveSide] = useState('groom');

  const roster = familyData[activeSide] || familyData.groom;

  return (
    <section id="family" className="family-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            {lang === 'hi' ? 'स्नेह व आशीर्वाद' : 'WITH LOVE & BLESSINGS'}
          </span>
          <h2 className="section-title">{t.familyTitle}</h2>
          <div className="section-ornament">
            <span className="ornament-line" />
            <img src="/assets/programme-gold-floral-0DH2Tm5B.png" alt="Gold floral divider" className="ornament-gold-floral" />
            <span className="ornament-line" />
          </div>
          <p className="section-subtitle">{t.familySubtitle}</p>
        </div>

        {/* Side Switcher Buttons */}
        <div className="family-toggle-group">
          <button
            className={`family-side-btn ${activeSide === 'groom' ? 'active' : ''}`}
            onClick={() => setActiveSide('groom')}
          >
            <span>{lang === 'hi' ? 'वर पक्ष (मोहित का परिवार)' : "Mohit's Family (Groom)"}</span>
          </button>
          <button
            className={`family-side-btn ${activeSide === 'bride' ? 'active' : ''}`}
            onClick={() => setActiveSide('bride')}
          >
            <span>{lang === 'hi' ? 'वधू पक्ष (मोहिनी का परिवार)' : "Mohini's Family (Bride)"}</span>
          </button>
        </div>

        {/* Family Cards Roster Grid */}
        <div className="family-content-panel active">
          <div className="family-roster-grid">
            {roster.map((unit, idx) => (
              <div
                key={idx}
                className={`family-unit-card ${unit.relation_en.includes('PARENTS') ? 'family-unit-card--highlight' : ''}`}
              >
                <span className="unit-role">
                  {lang === 'hi' ? unit.relation_hi : unit.relation_en}
                </span>
                <p className="unit-names">{unit.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
