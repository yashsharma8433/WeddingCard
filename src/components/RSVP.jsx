import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function RSVP({ lang, t }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    attendance: 'Attending',
    wish: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [wishes, setWishes] = useState([
    {
      author: 'Vikram & Neha Malhotra',
      time: 'Just now',
      text: "Heartiest congratulations Mohit & Mohini! May your journey together be as timeless, radiant, and joyous as this celebration. Can't wait to dance at the Sangeet!"
    },
    {
      author: 'Suresh Uncle & Anita Chachi',
      time: '2 hours ago',
      text: 'हमारे प्यारे मोहित और मोहिनी को ढेर सारा आशीर्वाद। जीवन के इस नए सफर में खुशियां और प्रेम सदा बना रहे।'
    },
    {
      author: 'College Squad (Aman, Dev & Pooja)',
      time: 'Yesterday',
      text: "Still can't believe our buddy is getting hitched! Ready to rock the Baaraat and dance till dawn. Lots of love M&M!"
    }
  ]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('mohit_mohini_wishes');
      if (saved) {
        setWishes(prev => [...JSON.parse(saved), ...prev]);
      }
    } catch (e) {}
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    if (formData.wish) {
      const newWish = {
        author: formData.name,
        time: lang === 'hi' ? 'अभी-अभी' : 'Just now',
        text: formData.wish
      };
      const updated = [newWish, ...wishes];
      setWishes(updated);
      try {
        localStorage.setItem('mohit_mohini_wishes', JSON.stringify([newWish]));
      } catch (err) {}
    }

    setSubmitted(true);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(
      "✨ We joyfully invite you to the wedding celebration of Mohit & Mohini! ✨\n\n" +
      "📅 Dates: November 25 – 26, 2026\n" +
      "📍 Venue: Ivara Resorts, Khajuraho, Madhya Pradesh\n\n" +
      "View full itinerary, dress code, and wedding updates here:\n" +
      window.location.origin
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section id="rsvp" className="rsvp-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            {lang === 'hi' ? 'अपनी उपस्थिति से अनुग्रहीत करें' : 'HONOR US WITH YOUR PRESENCE'}
          </span>
          <h2 className="section-title">{t.rsvpTitle}</h2>
          <div className="section-ornament">
            <span className="ornament-line" />
            <img src="/assets/programme-gold-floral-0DH2Tm5B.png" alt="Gold floral divider" className="ornament-gold-floral" />
            <span className="ornament-line" />
          </div>
          <p className="section-subtitle">{t.rsvpSubtitle}</p>
        </div>

        <div className="rsvp-layout-grid">
          {/* Form Card */}
          <div className="rsvp-form-card">
            <h3 className="form-title">
              {lang === 'hi' ? 'उपस्थिति की पुष्टि करें' : 'Confirm Your Attendance'}
            </h3>
            <p className="form-intro">
              {lang === 'hi'
                ? 'अतिथि सत्कार की सुगम व्यवस्था हेतु कृपया 25 अक्टूबर 2026 तक पुष्टि प्रदान करें।'
                : 'Please let us know by October 25, 2026 to help us prepare your hospitality seamlessly.'}
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="wedding-form">
                <div className="form-group">
                  <label htmlFor="name">{lang === 'hi' ? 'पूरा नाम *' : 'Full Name *'}</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder={lang === 'hi' ? 'उदा. आनंद व सुनीता शर्मा' : 'e.g. Anand & Sunita Sharma'}
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">{lang === 'hi' ? 'मोबाइल नंबर *' : 'WhatsApp / Mobile *'}</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="guests">{lang === 'hi' ? 'सदस्यों की संख्या' : 'Number of Guests'}</label>
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={e => setFormData({ ...formData, guests: e.target.value })}
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Family Members</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>{lang === 'hi' ? 'क्या आप पधार रहे हैं?' : 'Will you be attending?'}</label>
                  <div className="radio-options">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="attendance"
                        value="Attending"
                        checked={formData.attendance === 'Attending'}
                        onChange={e => setFormData({ ...formData, attendance: e.target.value })}
                      />
                      <span>{lang === 'hi' ? 'सप्रेम उपस्थित रहेंगे' : 'Joyfully Attending'}</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="attendance"
                        value="Blessings Only"
                        checked={formData.attendance === 'Blessings Only'}
                        onChange={e => setFormData({ ...formData, attendance: e.target.value })}
                      />
                      <span>{lang === 'hi' ? 'दूर से ही आशीर्वाद भेज रहे हैं' : 'Celebrating in spirit'}</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="wish">
                    {lang === 'hi' ? 'मोहित व मोहिनी के लिए शुभकामना संदेश' : 'Message / Blessing for Mohit & Mohini'}
                  </label>
                  <textarea
                    id="wish"
                    rows="3"
                    placeholder={lang === 'hi' ? 'अपना स्नेहिल संदेश यहाँ लिखें...' : 'Write your heartfelt wishes...'}
                    value={formData.wish}
                    onChange={e => setFormData({ ...formData, wish: e.target.value })}
                  />
                </div>

                <button type="submit" className="submit-btn">
                  <span>{lang === 'hi' ? 'शुभकामनाएं व RSVP भेजें' : 'Submit RSVP & Wishes'}</span>
                  <Send size={16} />
                </button>
              </form>
            ) : (
              <div className="rsvp-success-msg visible">
                <CheckCircle2 size={56} className="success-icon" />
                <h4>{lang === 'hi' ? 'आपका बहुत-बहुत धन्यवाद!' : 'Thank you so much!'}</h4>
                <p>
                  {lang === 'hi'
                    ? 'आपका संदेश और उपस्थिति की सूचना दोनों परिवारों को प्राप्त हो गई है।'
                    : 'Your response and blessings have been warmly received by Mohit & Mohini’s families.'}
                </p>
              </div>
            )}
          </div>

          {/* Live Wishes Wall */}
          <div className="wishes-wall-card">
            <div className="wishes-header">
              <h3 className="wishes-title">{lang === 'hi' ? 'आशीर्वाद व संदेश' : 'Blessings & Love'}</h3>
              <span className="wishes-counter">{wishes.length} Wishes</span>
            </div>

            <div className="wishes-scroller">
              {wishes.map((item, idx) => (
                <div key={idx} className="wish-item">
                  <div className="wish-meta">
                    <strong className="wish-author">{item.author}</strong>
                    <span className="wish-time">{item.time}</span>
                  </div>
                  <p className="wish-text">"{item.text}"</p>
                </div>
              ))}
            </div>

            <div className="share-invite-box">
              <p>{lang === 'hi' ? 'यह निमंत्रण पत्र परिजनों व मित्रों के साथ साझा करें:' : 'Share this invitation with family & friends:'}</p>
              <button className="whatsapp-btn" onClick={shareWhatsApp}>
                <span>Share on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
