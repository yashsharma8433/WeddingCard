/**
 * Mohit & Mohini Wedding Data
 * Bilingual Data Model (English / Hindi)
 */

export const WEDDING_DATE = new Date('2026-11-25T11:30:00+05:30');

export const translations = {
  en: {
    shreeGanesha: "॥ श्री गणेशाय नमः ॥",
    daysToGo: "DAYS TO GO",
    openInvitation: "Open Invitation",
    navProgramme: "The Programme",
    navDressCode: "What to Wear",
    navVenue: "The Destination",
    navFamily: "Family",
    navNotes: "Good to Know",
    navRsvp: "RSVP & Wishes",
    heroKicker: "THE WEDDING OF",
    groomName: "MOHIT",
    brideName: "MOHINI",
    lineageGroom: "Son of Smt. Saroj & Shri Ramesh Sharma",
    lineageBride: "Daughter of Smt. Sunita & Shri Manoj Verma",
    heroDates: "November 25 – 26, 2026",
    heroVenueCity: "Khajuraho, Madhya Pradesh",
    countdownEyebrow: "CELEBRATION BEGINS IN",
    welcomeHeading: "Warmest Welcome",
    welcomeQuote: "\"Having you with us for this deeply personal celebration is the greatest gift. Join us in Khajuraho for two magical days of laughter, music, colours, and lifelong blessings as we begin our forever.\"",
    withLove: "With all our love,",
    programmeTitle: "The Programme",
    programmeSubtitle: "Two glorious days of celebrations, rituals, and unforgettable moments.",
    dressTitle: "What to Wear",
    dressSubtitle: "Curated shades and style guides for each celebratory occasion.",
    venueTitle: "The Destination",
    venueSubtitle: "Where timeless temple heritage, serene lakeside luxury, and our celebration unite.",
    familyTitle: "Welcoming You",
    familySubtitle: "Our cherished elders, loving parents, and proud families awaiting your presence.",
    notesTitle: "Good to Know",
    notesSubtitle: "A few gentle notes to make your journey and stay perfectly effortless.",
    rsvpTitle: "RSVP & Send Blessings",
    rsvpSubtitle: "Kindly confirm your attendance or share a warm congratulatory note for the couple."
  },
  hi: {
    shreeGanesha: "॥ श्री गणेशाय नमः ॥",
    daysToGo: "दिन बाकी हैं",
    openInvitation: "निमंत्रण पत्र खोलें",
    navProgramme: "कार्यक्रम",
    navDressCode: "ड्रेस कोड",
    navVenue: "वेन्यू",
    navFamily: "परिवार",
    navNotes: "ज़रूरी बातें",
    navRsvp: "शुभकामनाएं व RSVP",
    heroKicker: "मंगल परिणय",
    groomName: "मोहित",
    brideName: "मोहिनी",
    lineageGroom: "सुपुत्र: श्रीमती सरोज एवं श्री रमेश शर्मा",
    lineageBride: "सुपुत्री: श्रीमती सुनीता एवं श्री मनोज वर्मा",
    heroDates: "25 – 26 नवंबर 2026",
    heroVenueCity: "खजुराहो, मध्य प्रदेश",
    countdownEyebrow: "शुभ उत्सव का प्रारंभ",
    welcomeHeading: "हार्दिक स्वागत",
    welcomeQuote: "\"हमारे जीवन के इस सबसे पावन और खास उत्सव में आपकी उपस्थिति ही हमारे लिए ईश्वर का सबसे बड़ा उपहार है। खजुराहो के इस मनोरम वातावरण में हँसी, संगीत, रंगों और शुभाशीर्वाद से भरे इन दो दिनों के लिए आप सभी सादर आमंत्रित हैं।\"",
    withLove: "सप्रेम न्योता,",
    programmeTitle: "विवाह कार्यक्रम",
    programmeSubtitle: "दो दिनों का पावन उत्सव, रस्में और खुशियों के यादगार पल।",
    dressTitle: "क्या पहनें (ड्रेस कोड)",
    dressSubtitle: "प्रत्येक समारोह के लिए चुने गए विशेष रंग और परिधान सुझाव।",
    venueTitle: "वेन्यू एवं गंतव्य",
    venueSubtitle: "खजुराहो के ऐतिहासिक मंदिर, शांत झीलें और हमारे मिलन का साक्षी वेन्यू।",
    familyTitle: "स्वागताकांक्षी परिवार",
    familySubtitle: "हमारे पूज्य बुजुर्ग, स्नेही माता-पिता और आपकी प्रतीक्षा करता पूरा परिवार।",
    notesTitle: "ज़रूरी बातें",
    notesSubtitle: "आपकी यात्रा और प्रवास को सहज व सुखद बनाने हेतु कुछ विनम्र सुझाव।",
    rsvpTitle: "उपस्थिति पुष्टि व आशीर्वाद",
    rsvpSubtitle: "कृपया अपनी उपस्थिति दर्ज कराएं या वर-वधू को अपना स्नेहिल संदेश प्रेषित करें।"
  }
};

export const programmeDays = [
  {
    id: "day1",
    label_en: "Day 01",
    label_hi: "पहला दिन",
    date_en: "Wednesday, 25 Nov 2026",
    date_hi: "बुधवार, 25 नवंबर 2026",
    headline_en: "A Day of Welcome, Colour, and Sufi Romance",
    headline_hi: "स्वागत, रंग और रूहानी सूफी संगीत का दिन",
    desc_en: "From sunlit marigold hues to an enchanting sufi evening beneath the stars.",
    desc_hi: "धूप खिली हल्दी की बहार से लेकर तारों की छांव में सूफी संगीत की शाम।",
    events: [
      {
        id: "haldi",
        name_en: "Haldi Utsav",
        name_hi: "हल्दी उत्सव",
        time: "11:30 AM – 3:00 PM",
        venue_en: "Poolside Garden",
        venue_hi: "पूलसाइड गार्डन",
        badge_en: "Afternoon Garden",
        badge_hi: "दोपहर का उत्सव",
        desc_en: "Splashes of turmeric, cheerful laughter, floral showers, and spirited dances to open the wedding festivities.",
        desc_hi: "पीली हल्दी की सोंधी सुगंध, फूलों की बरसात, संगीत और अपनों के साथ आनंदमय शुरुआत।",
        image: "/assets/haldi-programme-illustration-optimized-BLlX4QCy.webp",
        tag_en: "Attire: Yellow & Mustard",
        tag_hi: "पहनावा: पीला व सरसों रंग",
        accent: "#d98132"
      },
      {
        id: "mayra",
        name_en: "Mayra (Bhaat)",
        name_hi: "मायरा (भात)",
        time: "3:00 PM – 5:00 PM",
        venue_en: "Pavilion Hall",
        venue_hi: "पैवेलियन हॉल",
        badge_en: "Traditional Ritual",
        badge_hi: "पारंपरिक रस्म",
        desc_en: "A touching ceremony honoring maternal blessings, gifts of love, and heartwarming family bonds.",
        desc_hi: "मातृपक्ष के स्नेह, उपहारों और आशीर्वाद का भावुक व उल्लासपूर्ण पारंपरिक समारोह।",
        image: "/assets/mayra-programme-illustration-optimized-nDuYeJ0Y.webp",
        tag_en: "Attire: Festive Pastels & Florals",
        tag_hi: "पहनावा: पेस्टल व फ्लोरल परिधान",
        accent: "#b66c86"
      },
      {
        id: "sangeet",
        name_en: "Sangeet & Sufi Night",
        name_hi: "संगीत व सूफी नाइट",
        time: "8:00 PM – 11:30 PM",
        venue_en: "Crescent Lawn",
        venue_hi: "क्रेसेंट लॉन",
        badge_en: "Sufi Night & Glitz",
        badge_hi: "संगीत संध्या",
        desc_en: "An enchanting night of glitz, glamorous dance performances by friends and family, followed by a live soulful Sufi concert.",
        desc_hi: "पारिवारिक नृत्य प्रस्तुतियां, चमक-दमक और उसके बाद 'गुल सूफी बैंड' के साथ दिलकश रूहानी संगीत।",
        image: "/assets/sangeet-programme-illustration-optimized-BTfErkXA.webp",
        artistRole_en: "Live In Concert",
        artistRole_hi: "लाइव सूफी प्रस्तुति",
        artistName: "Gul Sufi Band",
        artistThumb: "/assets/gul-sufi-band-feature-optimized-CZ6Z51Gy.webp",
        tag_en: "Attire: Royal Blue, Velvet & Glitter",
        tag_hi: "पहनावा: रॉयल ब्लू, मखमली व ग्लिटर",
        accent: "#1f274e"
      }
    ]
  },
  {
    id: "day2",
    label_en: "Day 02",
    label_hi: "दूसरा दिन",
    date_en: "Thursday, 26 Nov 2026",
    date_hi: "गुरुवार, 26 नवंबर 2026",
    headline_en: "A Day of Royal Procession, Vows, and Forever",
    headline_hi: "शाही बारात, सात फेरे और अनंत बंधन का दिन",
    desc_en: "From the high-energy Baaraat procession to the sacred musical Vedic pheras.",
    desc_hi: "ढोल-नगाड़ों की थाप पर शाही बारात से लेकर वैदिक मंत्रोच्चार के बीच पावन फेरे।",
    events: [
      {
        id: "baaraat",
        name_en: "Baaraat Swagat",
        name_hi: "बारात व अगवानी",
        time: "10:30 AM – 1:00 PM",
        venue_en: "Nectar Royal Gate",
        venue_hi: "नेक्टर रॉयल गेट",
        badge_en: "Royal Procession",
        badge_hi: "शाही बारात",
        desc_en: "Resonating dhols, royal vintage cars, non-stop dancing, and a heartfelt traditional welcome for the groom and his procession.",
        desc_hi: "ढोल, डीजे, विंटेज कार और थिरकते कदमों के साथ दूल्हे राजा की भव्य शाही बारात।",
        image: "/assets/baaraat-programme-illustration-optimized-cEegl50z.webp",
        tag_en: "Attire: Regal Pastels & Turbans",
        tag_hi: "पहनावा: पेस्टल शेरवानी व साफे",
        accent: "#b38948"
      },
      {
        id: "varmala",
        name_en: "Jaimala (Varmala)",
        name_hi: "जयमाला",
        time: "1:00 PM – 1:30 PM",
        venue_en: "Crescent Lawn",
        venue_hi: "क्रेसेंट लॉन",
        badge_en: "Floral Exchange",
        badge_hi: "वरमाला समारोह",
        desc_en: "A shower of rose petals as Mohit and Mohini exchange fragrant jasmine and rose garlands under a blooming floral canopy.",
        desc_hi: "गुलाब की पंखुड़ियों की बारिश के बीच एक-दूसरे को वरमाला पहनाकर जीवनसाथी चुनने का पल।",
        image: "/assets/varmala-programme-illustration-optimized-qy2txoor.webp",
        tag_en: "Attire: Soft Lilac, Blush & Mint",
        tag_hi: "पहनावा: लिलाक, ब्लश व मिंट",
        accent: "#9a79b2"
      },
      {
        id: "reception",
        name_en: "Preeti Bhoj (Reception)",
        name_hi: "प्रीतिभोज (रिसेप्शन)",
        time: "12:30 PM onwards",
        venue_en: "Grand Banquet Lawns",
        venue_hi: "ग्रैंड बैंक्वेट लॉन",
        badge_en: "Royal Feast",
        badge_hi: "प्रीतिभोज",
        desc_en: "A grand multi-cuisine culinary banquet celebrating regional delicacies, handcrafted desserts, and warm camaraderie.",
        desc_hi: "शाही व्यंजनों, पारंपरिक मिष्ठानों और आत्मीय स्वागत का भव्य समारोह।",
        image: "/assets/reception-programme-illustration-optimized-lxjrOzhc.webp",
        tag_en: "Attire: Festive Elegant Indian",
        tag_hi: "पहनावा: सुरुचिपूर्ण भारतीय परिधान",
        accent: "#6f9d97"
      },
      {
        id: "phere",
        name_en: "Vedic Pheras & Saptapadi",
        name_hi: "वैदिक फेरे व सप्तपदी",
        time: "4:00 PM – 7:00 PM",
        venue_en: "The Heritage Amphitheatre",
        venue_hi: "हेरिटेज एम्फीथिएटर",
        badge_en: "The Sacred Vows",
        badge_hi: "पावन वचन",
        desc_en: "Seven eternal vows around the sacred Agni as twilight settles over the temples, accompanied by serene Vedic chanting and live musical pheras.",
        desc_hi: "पवित्र अग्नि के समक्ष सात फेरे, किरण नरुला के संगीतमय फेरे और बड़ों का शुभाशीर्वाद।",
        image: "/assets/phere-programme-illustration-optimized-CKNoT6U_.webp",
        artistRole_en: "Musical Pheras",
        artistRole_hi: "संगीतमय फेरे",
        artistName: "Kiran Narula",
        artistThumb: "/assets/kiran-narula-feature-optimized-BxvxyJOY.webp",
        tag_en: "Attire: Auspicious Red, Gold & Ivory",
        tag_hi: "पहनावा: लाल, सुनहरा व श्वेत",
        accent: "#b33d2f"
      }
    ]
  }
];

export const dressCodeDetails = {
  haldi: {
    title_en: "Sunlit, Easy & Festive",
    title_hi: "धूप खिली, उल्लासपूर्ण व सहज शैली",
    eyebrow_en: "Day 1 / Afternoon Garden",
    eyebrow_hi: "पहला दिन / दोपहर का उत्सव",
    desc_en: "Think bright marigold, joyful yellows, breezy silhouettes, and florals that love sunlight. Comfortable movement for dancing is key!",
    desc_hi: "पीला, सरसों, संतरी और हल्के फूलों वाले परिधान। खुले लॉन में नृत्य और हल्दी के लिए आरामदायक वस्त्र सर्वोत्तम रहेंगे।",
    swatches: [
      { name_en: "Marigold Yellow", name_hi: "गेंदा पीला", color: "#f5b027" },
      { name_en: "Mustard Gold", name_hi: "सरसों गोल्ड", color: "#d98132" },
      { name_en: "Burnt Orange", name_hi: "नारंगी", color: "#c85a17" },
      { name_en: "Ivory White", name_hi: "श्वेत", color: "#fffcf0" }
    ],
    women_en: [
      "Lightweight yellow or mustard lehengas",
      "Printed floral sharara & peplum sets",
      "Georgette / Chanderi drape sarees",
      "Floral jewelry & comfortable flats"
    ],
    women_hi: [
      "हल्के पीले या सरसों रंग के लहंगे",
      "फ्लोरल प्रिंट वाले शरारा व गरारा सूट",
      "जॉर्जेट या चंदेरी सिल्क साड़ियां",
      "फूलों के गहने व आरामदायक सैंडल"
    ],
    men_en: [
      "Kurta-pyjama with embroidered Nehru jacket",
      "Breezy linen or Lucknowi Chikankari kurtas",
      "Comfortable ethnic juttis / loafers"
    ],
    men_hi: [
      "कढ़ाईदार नेहरू जैकेट के साथ कुर्ता-पायजामा",
      "हल्के लिनेन या लखनवी चिकनकारी कुर्ते",
      "आरामदायक मोजड़ी व लोफर्स"
    ]
  },
  sangeet: {
    title_en: "Midnight Glamour & Sufi Romance",
    title_hi: "शाही चमक, मखमली शान व सूफी अंदाज",
    eyebrow_en: "Day 1 / Sufi Starlit Night",
    eyebrow_hi: "पहला दिन / सितारों भरी सूफी रात",
    desc_en: "A night for sequins, midnight energy, mirror-work, and royal elegance. Flowing silhouettes tailored for dancing beneath the stars.",
    desc_hi: "चमकदार सितारों, दर्पण के काम, गहरे नीले और मखमली रंगों की रात। खुले मंच पर नृत्य और सूफी संगीत के अनुकूल परिधान।",
    swatches: [
      { name_en: "Royal Midnight Blue", name_hi: "रॉयल ब्लू", color: "#16254c" },
      { name_en: "Emerald Velvet", name_hi: "गहरा हरा", color: "#1b4d3e" },
      { name_en: "Champagne Shimmer", name_hi: "शैम्पेन गोल्ड", color: "#d8be7b" },
      { name_en: "Obsidian Black", name_hi: "काला", color: "#1a1a1a" }
    ],
    women_en: [
      "Glamorous sequin lehengas or metallic drape sarees",
      "Floor-length embellished anarkalis",
      "Indo-western cocktail gowns",
      "Statement chandbalis & dancing shoes"
    ],
    women_hi: [
      "सीक्विन वर्क वाले लहंगे या मेटैलिक साड़ियां",
      "फ्लोर-लेंथ अनारकली सूट",
      "इंडो-वेस्टर्न कॉकटेल ड्रेसेस",
      "शानदार चांदबाली व सुंदर फुटवियर"
    ],
    men_en: [
      "Midnight blue or black royal Bandhgala / Achkan",
      "Modern tailored Tuxedo or formal suit",
      "Open-front velvet sherwani with metallic accents"
    ],
    men_hi: [
      "रॉयल ब्लू या ब्लैक बंदगला / अचकन",
      "मॉडर्न टक्सीडो या फॉर्मल सूट",
      "मखमली शेरवानी व क्लासी जूते"
    ]
  },
  baaraat: {
    title_en: "Daylight Pastels & Regal Grandeur",
    title_hi: "सौम्य पेस्टल, शाही साफे व भव्यता",
    eyebrow_en: "Day 2 / Royal Procession & Feast",
    eyebrow_hi: "दूसरा दिन / शाही बारात व प्रीतिभोज",
    desc_en: "Soft pastels, powder blues, blush tones, and understated luxury that photograph breathtakingly in daytime sunshine.",
    desc_hi: "पाउडर ब्लू, ब्लश पिंक, मिंट ग्रीन और सुनहरे रंगों का संगम जो दिन के उजाले में अत्यंत मनमोहक दिखता है।",
    swatches: [
      { name_en: "Powder Blue", name_hi: "पाउडर ब्लू", color: "#a8c5da" },
      { name_en: "Blush Peach", name_hi: "गुलाबी ब्लश", color: "#f4c6bd" },
      { name_en: "Sage Mint", name_hi: "मिंट ग्रीन", color: "#b9d5c8" },
      { name_en: "Regal Gold", name_hi: "शाही सुनहरी", color: "#dfc072" }
    ],
    women_en: [
      "Soft pastel lehengas with delicate zari embroidery",
      "Organza or Banarasi silk sarees in blush & mint",
      "Cape style indo-western sets",
      "Elegant pearl and kundan accessories"
    ],
    women_hi: [
      "बारीक ज़री वाले पेस्टल रंग के लहंगे",
      "ऑर्गेंजा या बनारसी सिल्क साड़ियां",
      "केप स्टाइल इंडो-वेस्टर्न परिधान",
      "कुंदन और मोतियों के आभूषण"
    ],
    men_en: [
      "Pastel raw silk Sherwani with royal safa (turban)",
      "Open sherwani over textured kurta",
      "Tailored daytime pastel blazer with trousers"
    ],
    men_hi: [
      "पेस्टल सिल्क शेरवानी व राजपूताना साफा",
      "कुर्ते पर ओपन शेरवानी या जैकेट",
      "सुरुचिपूर्ण पेस्टल ब्लेज़र व ट्राउजर्स"
    ]
  },
  phere: {
    title_en: "Auspicious Heritage & Traditional Grace",
    title_hi: "पवित्र पारंपरिक लाल, स्वर्ण व श्वेत परिधान",
    eyebrow_en: "Day 2 / Sacred Evening Vows",
    eyebrow_hi: "दूसरा दिन / पावन गोधूलि वेला फेरे",
    desc_en: "The solemn, auspicious ceremony of Vedic pheras calls for traditional Indian regal elegance. Rich reds, auspicious ivory, and gold.",
    desc_hi: "पवित्र सात वचनों और फेरों की वेला में शुद्ध भारतीय पारंपरिक परिधान — सिंदूरी लाल, स्वर्ण और क्रीम रंग सर्वोत्तम हैं।",
    swatches: [
      { name_en: "Auspicious Crimson", name_hi: "सिंदूरी लाल", color: "#991b1b" },
      { name_en: "Pure Ivory", name_hi: "क्रीम श्वेत", color: "#fffbf0" },
      { name_en: "Temple Gold", name_hi: "मंदिर स्वर्ण", color: "#d4af37" },
      { name_en: "Deep Maroon", name_hi: "मैरून", color: "#581825" }
    ],
    women_en: [
      "Traditional silk sarees (Kanjeevaram / Banarasi)",
      "Bridal hues: Crimson, deep rose, or ivory with gold border",
      "Polki, temple jewelry, and fragrant gajra"
    ],
    women_hi: [
      "पारंपरिक कांजीवरम या बनारसी सिल्क साड़ियां",
      "सिंदूरी लाल, रानी गुलाबी या गोल्डन बॉर्डर साड़ियां",
      "टेंपल ज्वेलरी व बालों में महकता मोगरे का गजरा"
    ],
    men_en: [
      "Traditional ivory / cream raw silk Sherwani or Kurta-Dhoti",
      "Classic Achkan with royal embroidered stole (doshala)",
      "Traditional mojris"
    ],
    men_hi: [
      "क्रीम या श्वेत सिल्क शेरवानी अथवा धोती-कुर्ता",
      "कढ़ाईदार दोशाला (दुपट्टा) के साथ अचकन",
      "पारंपरिक जरीदार मोजड़ी"
    ]
  }
};

export const familyData = {
  groom: [
    { relation_en: "DADA-DADI JI", relation_hi: "दादा-दादी जी", name: "LATE SMT. SHANTI DEVI & SHRI RAMSWAROOP SHARMA" },
    { relation_en: "NANA-NANI JI", relation_hi: "नाना-नानी जी", name: "SMT. BHAGWATI DEVI & LATE SHRI OMPRAKASH JOSHI" },
    { relation_en: "LOVING PARENTS", relation_hi: "स्नेही माता-पिता", name: "SMT. SAROJ & SHRI RAMESH SHARMA" },
    { relation_en: "CHACHA-CHACHI JI", relation_hi: "चाचा-चाची जी", name: "SMT. ANITA & SHRI SURESH SHARMA" },
    { relation_en: "MAMA-MAMI JI", relation_hi: "मामा-मामी जी", name: "SMT. REKHA & SHRI RAKESH JOSHI" },
    { relation_en: "BUA-FUFAJI", relation_hi: "बुआ-फूफाजी", name: "SMT. PUSHPA & SHRI ASHOK TRIVEDI" },
    { relation_en: "BROTHERS & SISTERS", relation_hi: "भाई-बहन", name: "AMAN, ROHAN, PRIYA & SHRUTI" }
  ],
  bride: [
    { relation_en: "DADA-DADI JI", relation_hi: "दादा-दादी जी", name: "LATE SMT. KRISHNA DEVI & SHRI HARISHANKAR VERMA" },
    { relation_en: "NANA-NANI JI", relation_hi: "नाना-नानी जी", name: "SMT. PREMVATI & LATE SHRI KAILASHNATH SAXENA" },
    { relation_en: "LOVING PARENTS", relation_hi: "स्नेही माता-पिता", name: "SMT. SUNITA & SHRI MANOJ VERMA" },
    { relation_en: "BADE PAPA-BADI MUMMY", relation_hi: "बड़े मम्मी-पापा", name: "SMT. MAYA & SHRI SATISH VERMA" },
    { relation_en: "CHACHA-CHACHI JI", relation_hi: "चाचा-चाची जी", name: "SMT. RASHMI & SHRI DEEPAK VERMA" },
    { relation_en: "MAMA-MAMI JI", relation_hi: "मामा-मामी जी", name: "SMT. MANJU & SHRI ALOK SAXENA" },
    { relation_en: "BROTHERS & SISTERS", relation_hi: "भाई-बहन", name: "KARAN, MAYANK, SANYA & NEHA" }
  ]
};

export const faqList = [
  {
    q_en: "What about hotel accommodation and check-in?",
    q_hi: "होटल और रहने की क्या व्यवस्था होगी?",
    a_en: "All our dear outstation guests have accommodations reserved at Ivara Resorts and associated partner luxury suites. Our hospitality team will contact you directly 2–3 weeks prior with your personalized room voucher.",
    a_hi: "हमारे सभी आदरणीय अतिथियों के लिए इवारा रिज़ॉर्ट्स में उत्तम व्यवस्था की गई है। विवाह से 2-3 हफ्ते पूर्व हमारी टीम सीधे आपसे कमरों का विवरण साझा करेगी।"
  },
  {
    q_en: "How will the weather be in Khajuraho in late November?",
    q_hi: "नवंबर के अंत में खजुराहो का मौसम कैसा रहेगा?",
    a_en: "November offers glorious golden sunshine with pleasant afternoon temperatures around 26°C. Evenings and nights turn pleasantly crisp and cool (~14°C), so carrying a stylish shawl or light jacket is recommended.",
    a_hi: "दिन के समय मौसम सुहावना (लगभग 26°C) रहेगा। शाम व रात के खुले कार्यक्रमों के लिए हल्की ठंड हो सकती है, इसलिए एक शॉल या जैकेट अवश्य रखें।"
  },
  {
    q_en: "Will airport and railway station pickups be provided?",
    q_hi: "क्या स्टेशन और एयरपोर्ट से पिकअप की सुविधा होगी?",
    a_en: "Yes, absolutely! Dedicated wedding helpdesks will greet guests at Khajuraho Airport (HJR) and Khajuraho Railway Station (KURJ) with chauffeured shuttles running continuously.",
    a_hi: "हाँ, खजुराहो एयरपोर्ट व रेलवे स्टेशन पर हमारी सहायता डेस्क और गाड़ियाँ निरंतर उपलब्ध रहेंगी।"
  },
  {
    q_en: "Are special dietary preferences catered for?",
    q_hi: "क्या खान-पान में विशेष आहार का ध्यान रखा गया है?",
    a_en: "Yes! All feasts feature gourmet vegetarian menus including pure Jain food, satvik specialties, vegan choices, and kids' favorites prepared with the highest standards.",
    a_hi: "जी बिल्कुल! सभी प्रीतिभोजों में शुद्ध शाकाहारी, शुद्ध जैन भोजन व बच्चों के मनपसंद व्यंजनों की विशेष व्यवस्था रहेगी।"
  }
];
