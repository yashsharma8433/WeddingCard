import React, { useState } from 'react';
import { dressCodeDetails } from '../data/weddingData';

export default function DressCode({ lang, t }) {
  const [activeTheme, setActiveTheme] = useState('haldi');

  const themeKeys = [
    { id: 'haldi', label_en: 'Haldi', label_hi: 'हल्दी' },
    { id: 'sangeet', label_en: 'Sangeet', label_hi: 'संगीत' },
    { id: 'baaraat', label_en: 'Baaraat & Reception', label_hi: 'बारात व रिसेप्शन' },
    { id: 'phere', label_en: 'The Sacred Pheras', label_hi: 'पावन फेरे' }
  ];

  const currentDetails = dressCodeDetails[activeTheme] || dressCodeDetails.haldi;

  return (
    <section id="dress-code" className="dress-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            {lang === 'hi' ? 'परिधान एवं रंग' : 'STYLE & PALETTES'}
          </span>
          <h2 className="section-title">{t.dressTitle}</h2>
          <div className="section-ornament">
            <span className="ornament-line" />
            <img src="/assets/programme-gold-floral-0DH2Tm5B.png" alt="Gold floral divider" className="ornament-gold-floral" />
            <span className="ornament-line" />
          </div>
          <p className="section-subtitle">{t.dressSubtitle}</p>
        </div>

        {/* Function Switcher Pills */}
        <div className="dress-nav-pills" role="tablist">
          {themeKeys.map(item => (
            <button
              key={item.id}
              className={`dress-pill ${activeTheme === item.id ? 'active' : ''}`}
              onClick={() => setActiveTheme(item.id)}
            >
              {lang === 'hi' ? item.label_hi : item.label_en}
            </button>
          ))}
        </div>

        {/* Interactive Parchment Card */}
        <div className="dress-display-card">
          <div className="dress-card-header">
            <div className="dress-card-eyebrow">
              {lang === 'hi' ? currentDetails.eyebrow_hi : currentDetails.eyebrow_en}
            </div>
            <h3 className="dress-card-title">
              {lang === 'hi' ? currentDetails.title_hi : currentDetails.title_en}
            </h3>
            <p className="dress-card-desc">
              {lang === 'hi' ? currentDetails.desc_hi : currentDetails.desc_en}
            </p>
          </div>

          {/* Color Palette Swatches */}
          <div className="palette-group">
            <h4 className="palette-heading">
              {lang === 'hi' ? 'अनुशंसित रंग पैलेट' : 'Recommended Color Palette'}
            </h4>
            <div className="swatches-row">
              {currentDetails.swatches.map((swatch, idx) => (
                <div key={idx} className="swatch-item">
                  <div className="swatch-circle" style={{ backgroundColor: swatch.color }} />
                  <span className="swatch-name">
                    {lang === 'hi' ? swatch.name_hi : swatch.name_en}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Attire Columns */}
          <div className="attire-columns">
            <div className="attire-col">
              <div className="attire-col-header">
                <span className="attire-gender-symbol">♀</span>
                <h4>{lang === 'hi' ? 'महिलाओं के लिए' : 'For Women'}</h4>
              </div>
              <ul className="attire-list">
                {(lang === 'hi' ? currentDetails.women_hi : currentDetails.women_en).map((txt, idx) => (
                  <li key={idx}>{txt}</li>
                ))}
              </ul>
            </div>

            <div className="attire-col">
              <div className="attire-col-header">
                <span className="attire-gender-symbol">♂</span>
                <h4>{lang === 'hi' ? 'पुरुषों के लिए' : 'For Men'}</h4>
              </div>
              <ul className="attire-list">
                {(lang === 'hi' ? currentDetails.men_hi : currentDetails.men_en).map((txt, idx) => (
                  <li key={idx}>{txt}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
