import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

export default function WelcomeEditorial({ lang, t }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="welcome-note" className="welcome-section section-padding">
      <div className="section-container">
        <div className="welcome-card">
          <div className="card-flourish card-flourish--top">❧ ❖ ❧</div>
          <h2 className="welcome-heading">{t.welcomeHeading}</h2>

          <p className="welcome-quote">{t.welcomeQuote}</p>

          {/* Embedded Welcome Video */}
          <div className="welcome-video-container">
            <video
              ref={videoRef}
              src="/videos/welcome-silent.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="welcome-video-element"
            />
            {!isPlaying && (
              <button
                className="welcome-video-play-btn"
                onClick={togglePlay}
                aria-label="Play welcome video"
              >
                <Play size={24} fill="currentColor" />
              </button>
            )}
          </div>

          <div className="welcome-signoff">
            <span className="signoff-with-love">{t.withLove}</span>
            <span className="signoff-names">Mohit & Mohini</span>
          </div>

          <div className="card-flourish card-flourish--bottom">❧ ❖ ❧</div>
        </div>
      </div>
    </section>
  );
}
