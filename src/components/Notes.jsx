import React, { useState } from 'react';
import { faqList } from '../data/weddingData';

export default function Notes({ lang, t }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="notes" className="notes-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            {lang === 'hi' ? 'उपयोगी जानकारियां' : 'PRACTICAL DETAILS'}
          </span>
          <h2 className="section-title">{t.notesTitle}</h2>
          <div className="section-ornament">
            <span className="ornament-line" />
            <img src="/assets/programme-gold-floral-0DH2Tm5B.png" alt="Gold floral divider" className="ornament-gold-floral" />
            <span className="ornament-line" />
          </div>
          <p className="section-subtitle">{t.notesSubtitle}</p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-accordion">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  className="faq-trigger"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{lang === 'hi' ? faq.q_hi : faq.q_en}</span>
                  <span className="faq-arrow">{isOpen ? '▲' : '▼'}</span>
                </button>
                <div className="faq-body">
                  <p>{lang === 'hi' ? faq.a_hi : faq.a_en}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
