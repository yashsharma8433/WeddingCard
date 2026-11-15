import React, { useState } from 'react';
import { MapPin, Navigation, Plane, Train, Car } from 'lucide-react';

export default function Venue({ lang, t }) {
  const [activePhoto, setActivePhoto] = useState('/assets/ivara-aerial.webp');
  const [caption, setCaption] = useState(
    lang === 'hi' ? 'साँझ में जल के किनारे इवारा रिज़ॉर्ट्स का विहंगम दृश्य' : 'Aerial view of Ivara Resorts beside the water at dusk'
  );

  const gallery = [
    {
      thumb: '/assets/ivara-aerial.webp',
      full: '/assets/ivara-aerial.webp',
      caption_en: 'Aerial view of Ivara Resorts beside the water at dusk',
      caption_hi: 'साँझ में जल के किनारे इवारा रिज़ॉर्ट्स का विहंगम दृश्य'
    },
    {
      thumb: '/assets/ivara-sunset-thumb-Cchhel6u.webp',
      full: '/assets/ivara-sunset.webp',
      caption_en: 'Sunsets framed against the majestic Khajuraho skyline',
      caption_hi: 'सूर्यास्त में रिज़ॉर्ट के बगीचों से दिखता मंदिर'
    },
    {
      thumb: '/assets/ivara-grounds.webp',
      full: '/assets/ivara-grounds.webp',
      caption_en: 'Illuminated stone walkways and royal cottages at night',
      caption_hi: 'रिज़ॉर्ट के बगीचों में रोशन रास्ते और कॉटेज'
    },
    {
      thumb: '/assets/ivara-garden-thumb-e5PE8AEI.webp',
      full: '/assets/ivara-garden.webp',
      caption_en: 'Lush sprawling banquet gardens and open-air amphitheatres',
      caption_hi: 'विशाल लॉन और खुले बगीचे'
    }
  ];

  const handleSelectPhoto = (item) => {
    setActivePhoto(item.full);
    setCaption(lang === 'hi' ? item.caption_hi : item.caption_en);
  };

  return (
    <section id="venue" className="venue-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            {lang === 'hi' ? 'विरासत और सुकून' : 'HERITAGE & TRANQUILITY'}
          </span>
          <h2 className="section-title">{t.venueTitle}</h2>
          <div className="section-ornament">
            <span className="ornament-line" />
            <img src="/assets/venue-botanical-gold.webp" alt="Gold floral divider" className="ornament-gold-floral" />
            <span className="ornament-line" />
          </div>
          <p className="section-subtitle">{t.venueSubtitle}</p>
        </div>

        {/* Destination Feature Showcase */}
        <div className="destination-showcase">
          <div className="destination-text-side">
            <div className="destination-badge">
              {lang === 'hi' ? 'हमारा उत्सव स्थल' : 'THE RESORT SANCTUARY'}
            </div>
            <h3 className="destination-venue-name">Ivara Resorts & Spa</h3>
            <p className="destination-location-pin">
              <MapPin size={18} />
              <span>Khajuraho, Madhya Pradesh 471606</span>
            </p>
            <p className="destination-story">
              {lang === 'hi'
                ? 'यूनेस्को विश्व धरोहर खजुराहो के शांत सरोवर के किनारे स्थित इवारा रिज़ॉर्ट्स एक शाही और नैसर्गिक वातावरण प्रदान करता है। हरे-भरे विस्तृत लॉन और नक्काशीदार पत्थर के गलियारे हमारे शुभ विवाह को अविस्मरणीय बनाएंगे।'
                : 'Set against the tranquil lakes and historical UNESCO World Heritage temples of Khajuraho, Ivara Resorts provides a serene, royal oasis. Sprawling emerald lawns, handcrafted stone architecture, and starlit open-air amphitheaters make it the dream setting for our nuptials.'}
            </p>

            <div className="destination-actions">
              <a
                href="https://maps.google.com/?q=Ivara+Resort+Khajuraho"
                target="_blank"
                rel="noopener noreferrer"
                className="venue-btn venue-btn--maps"
              >
                <Navigation size={18} />
                <span>{lang === 'hi' ? 'गूगल मैप्स पर देखें' : 'Open in Google Maps'}</span>
              </a>
            </div>
          </div>

          <div className="destination-photo-side">
            <div className="photo-main-frame">
              <img src={activePhoto} alt="Ivara Resorts Showcase" className="venue-main-photo" />
              <div className="photo-caption">{caption}</div>
            </div>

            <div className="photo-thumbs-strip">
              {gallery.map((item, idx) => (
                <button
                  key={idx}
                  className={`thumb-btn ${activePhoto === item.full ? 'active' : ''}`}
                  onClick={() => handleSelectPhoto(item)}
                >
                  <img src={item.thumb} alt={`Resort View ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Travel Connectivity Cards */}
        <div className="travel-guide-wrapper">
          <h4 className="travel-guide-title">
            {lang === 'hi' ? 'खजुराहो कैसे पहुँचें' : 'How to Reach Khajuraho'}
          </h4>
          <div className="travel-modes-grid">
            <div className="travel-card">
              <div className="travel-icon-box">
                <Plane size={24} />
              </div>
              <h5>{lang === 'hi' ? 'हवाई मार्ग द्वारा' : 'By Air'}</h5>
              <p>
                {lang === 'hi'
                  ? 'खजुराहो एयरपोर्ट (HJR) दिल्ली और वाराणसी से सीधे जुड़ा है। जबलपुर व ग्वालियर भी निकटवर्ती विकल्प हैं।'
                  : 'Khajuraho Airport (HJR) connects directly to Delhi, Varanasi, and major hubs. Flights to nearby Jabalpur and Gwalior are also convenient alternatives.'}
              </p>
            </div>

            <div className="travel-card">
              <div className="travel-icon-box">
                <Train size={24} />
              </div>
              <h5>{lang === 'hi' ? 'रेल मार्ग द्वारा' : 'By Train'}</h5>
              <p>
                {lang === 'hi'
                  ? 'खजुराहो रेलवे स्टेशन (KURJ) वंदे भारत और संपर्क क्रांति से जुड़ा है। सतna जंक्शन भी पास है।'
                  : 'Khajuraho Railway Station (KURJ) connects to Delhi via Vande Bharat Express and UP Sampark Kranti. Satna and Mahoba junction stations are just 90 mins away.'}
              </p>
            </div>

            <div className="travel-card">
              <div className="travel-icon-box">
                <Car size={24} />
              </div>
              <h5>{lang === 'hi' ? 'शटल एवं अतिथि सत्कार' : 'Shuttles & Hospitality'}</h5>
              <p>
                {lang === 'hi'
                  ? 'हवाई अड्डे व स्टेशन पर हमारी स्वागत टीम मेहमानों को रिज़ॉर्ट तक सुरक्षित व सुगमता से पहुँचाएगी।'
                  : 'Dedicated wedding hospitality shuttles and private transfers will be stationed at Khajuraho Airport & Railway Station to welcome and escort guests smoothly to the resort.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
