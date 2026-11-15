import React, { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
import { programmeDays } from '../data/weddingData';

export default function Programme({ lang, t }) {
  const [activeDay, setActiveDay] = useState('day1');

  const currentDayData = programmeDays.find(d => d.id === activeDay) || programmeDays[0];

  return (
    <section id="programme" className="programme-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            {lang === 'hi' ? 'शुभ समारोह समय-सारणी' : 'CELEBRATION ITINERARY'}
          </span>
          <h2 className="section-title">{t.programmeTitle}</h2>
          <div className="section-ornament">
            <span className="ornament-line" />
            <img src="/assets/programme-gold-floral-0DH2Tm5B.png" alt="Gold floral divider" className="ornament-gold-floral" />
            <span className="ornament-line" />
          </div>
          <p className="section-subtitle">{t.programmeSubtitle}</p>
        </div>

        {/* Day Switcher Tabs */}
        <div className="day-tabs-wrapper">
          {programmeDays.map(day => (
            <button
              key={day.id}
              className={`day-tab-btn ${activeDay === day.id ? 'active' : ''}`}
              onClick={() => setActiveDay(day.id)}
            >
              <span className="day-label">{lang === 'hi' ? day.label_hi : day.label_en}</span>
              <span className="day-date">{lang === 'hi' ? day.date_hi : day.date_en}</span>
            </button>
          ))}
        </div>

        {/* Day Schedule Panel */}
        <div className="day-schedule-content active">
          <div className={`day-banner day-banner--${currentDayData.id}`}>
            <h3 className="day-headline">
              {lang === 'hi' ? currentDayData.headline_hi : currentDayData.headline_en}
            </h3>
            <p className="day-meta-text">
              {lang === 'hi' ? currentDayData.desc_hi : currentDayData.desc_en}
            </p>
          </div>

          <div className="events-grid">
            {currentDayData.events.map(event => (
              <article key={event.id} className={`event-card event-card--${event.id}`}>
                <div className="event-image-wrap">
                  <img src={event.image} alt={event.name_en} className="event-art-img" />
                  <span className="event-badge">
                    {lang === 'hi' ? event.badge_hi : event.badge_en}
                  </span>
                </div>

                <div className="event-details">
                  <div className="event-time-badge">
                    <Clock size={15} />
                    <span>{event.time}</span>
                  </div>

                  <h4 className="event-name">
                    {lang === 'hi' ? event.name_hi : event.name_en}
                  </h4>

                  <p className="event-venue">
                    <MapPin size={14} />
                    <span>{lang === 'hi' ? event.venue_hi : event.venue_en}</span>
                  </p>

                  <p className="event-desc">
                    {lang === 'hi' ? event.desc_hi : event.desc_en}
                  </p>

                  {/* Featured Live Artist Pill if applicable */}
                  {event.artistName && (
                    <div className="featured-artist-pill">
                      <img src={event.artistThumb} alt={event.artistName} className="artist-thumb" />
                      <div className="artist-info">
                        <span className="artist-role">
                          {lang === 'hi' ? event.artistRole_hi : event.artistRole_en}
                        </span>
                        <span className="artist-name">{event.artistName}</span>
                      </div>
                    </div>
                  )}

                  <div className="event-tag-wrap">
                    <span className="event-tag" style={{ borderLeft: `3px solid ${event.accent}` }}>
                      {lang === 'hi' ? event.tag_hi : event.tag_en}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
