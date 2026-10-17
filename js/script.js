/**
 * Agrima Makeup Store — Official Client Script
 * Focus: High Performance, Zero External Bloat, Robust Security, 
 * Advanced Interactive Animations & Hindi/English Bilingual Translation
 */

'use strict';

// ==========================================================================
// 1. STORE CONFIGURATION
// ==========================================================================
const AGRIMA_CONFIG = Object.freeze({
  storeName: 'Agrima Makeup Store',
  phone: '916394959688', // Store WhatsApp Contact (Country code + 10-digit mobile)
  displayPhone: '+91 639495 9688',
  city: 'Lucknow, Uttar Pradesh',
  studioAddress: 'Shop #4, Buddheswar, Lucknow, UP',
  timing: '10:00 AM – 8:00 PM (Monday – Sunday)',
  serviceMode: '100% In-Studio Only (Strictly No Home Services)',
});

// ==========================================================================
// 2. BILINGUAL TRANSLATION DICTIONARY (English ↔ Hindi)
// ==========================================================================
const TRANSLATIONS = {
  en: {
    // Top Bar & Brand
    topNotice: "📍 Lucknow Studio Experience • Strictly In-Studio Only (No Home Visits)",
    topBadge: "Vanity Lighting & AC Comfort",
    brandSubtitle: "Makeup Store • Lucknow",
    
    // Nav
    navPackages: "3 Main Packages",
    navMenu: "A La Carte Menu",
    navTransformation: "Transformation",
    navQuiz: "Glam Finder",
    navPolicy: "Studio Policy",
    navHygiene: "Hygiene Pledge",
    navReviews: "Reviews",
    navFaq: "FAQ",
    navContact: "Location & Hours",
    bookSlotBtn: "Book Slot",

    // Hero
    heroBadge: "Lucknow's Established Beauty Studio • In-Studio Exclusive",
    heroTitle: "Exquisite Beauty & Bridal Artistry Crafted In Lucknow",
    heroDesc: "Welcome to Agrima Makeup Store. Experience professional salon hygiene, shadowless vanity lighting, and transparent rates tailored to Lucknow. Explore our 3 signature categories — Budget, Premium, and Bridal — or curate your individual beauty ritual with instant WhatsApp booking.",
    heroBtnExplore: "Explore Packages & Pricing",
    heroBtnBuild: "Build Custom Booking",
    trust1Title: "100% In-Studio",
    trust1Sub: "No Home Visits",
    trust2Title: "Vanity Studio",
    trust2Sub: "Air-Conditioned Comfort",
    trust3Title: "100% Sanitized",
    trust3Sub: "Sterilized Tools",
    trust4Title: "Instant WhatsApp",
    trust4Sub: "Fast Confirmation",

    // Stats
    stat1Label: "Happy Lucknow Brides",
    stat2Label: "Studio Sanitized Safety",
    stat3Label: "Years Beauty Experience",
    stat4Label: "Client Satisfaction Rating",

    // Transformation
    transEyebrow: "Interactive Transformation",
    transTitle: "Real In-Studio Artistry Comparison",
    transLead: "Drag the slider to see how professional Lucknow vanity lighting & HD bridal makeup transforms your look.",
    transBefore: "Before (Bare Prep)",
    transAfter: "After (Studio HD Glam)",
    transHint: "Slide or drag the handle to compare Before & After",

    // Quiz
    quizEyebrow: "Interactive Matcher",
    quizTitle: "Find Your Perfect Dream Look",
    quizLead: "Answer 2 quick questions to get an instant tailored package recommendation with Lucknow rates.",
    quizQ1Title: "Step 1: What is the Occasion?",
    quizQ1Sub: "Choose the event you're preparing for",
    quizQ2Title: "Step 2: What is your Desired Finish?",
    quizQ2Sub: "Select your dream look and makeup intensity",
    quizRetry: "↺ Find Another Look",
    quizBookWa: "Book This Look via WhatsApp",
    quizAddCart: "+ Add to My Booking",

    // Categories
    catEyebrow: "Signature Offerings",
    catTitle: "The 3 Signature Service Categories",
    catLead: "Curated beauty packages with exact Lucknow pricing. You can book an entire category or add specific services to your personal cart.",
    tabAll: "All Categories",
    tabBudget: "🟢 Budget Services",
    tabPremium: "⭐ Premium Services",
    tabBridal: "👑 Bridal Services",
    tabAlacarte: "💅 A La Carte Menu",

    // Policy Banner
    policyTitle: "Why Agrima Makeup Store is Strictly 100% In-Studio",
    policyDesc: "To guarantee flawless makeup longevity and hospital-grade hygiene, all services are delivered exclusively at our Lucknow studio. We do not provide home visits.",
    feat1: "Shadowless 5500K Studio Vanity Lighting",
    feat2: "Climate-Controlled AC (Sweat-Proof Finish)",
    feat3: "UV-Sterilized Brushes & Tools",
    feat4: "Quiet, Luxurious & Private Salon Sanctuary",

    // A La Carte
    alacarteEyebrow: "A La Carte Menu",
    alacarteTitle: "Individual Salon Departments",
    alacarteLead: "Select standalone services to combine or book on their own. Click the + button on any service to add it to your custom WhatsApp booking cart.",

    // Hygiene
    hygieneEyebrow: "Studio Integrity",
    hygieneTitle: "The Agrima 5-Point Hygiene Pledge",
    hygieneLead: "Your skin and health are sacred. We follow strict sterilization standards for all in-studio sessions.",

    // Reviews
    reviewsEyebrow: "Real Experiences",
    reviewsTitle: "Loved by Lucknow Brides & Families",
    reviewsLead: "Read what our clients say about our private studio atmosphere and makeup longevity.",

    // Contact
    contactEyebrow: "Visit Our Studio",
    contactTitle: "Studio Location & Contact",
    contactLead: "We are located in Lucknow. Drop by during our operating hours or message us directly.",
    inqTitle: "Quick Appointment Inquiry",
    inqLead: "Submit your inquiry and we will immediately connect on WhatsApp to confirm your slot.",
    inqSubmit: "Send Booking Inquiry on WhatsApp",

    // Drawer
    drawerTitle: "Your Studio Booking",
    cartEmptyTitle: "Your booking list is empty",
    cartEmptySub: "Click the + button on any service to add it here.",
    drawerTotal: "Estimated Total",
    drawerConfirm: "Confirm & Send on WhatsApp",

    // Floating Tooltip
    waTooltip: "👋 In-Studio bookings open! Tap to chat."
  },

  hi: {
    // Top Bar & Brand
    topNotice: "📍 लखनऊ स्टूडियो अनुभव • केवल स्टूडियो में सेवाएं (घर पर कोई सेवा नहीं)",
    topBadge: "वैनिटी लाइटिंग और एसी सुविधा",
    brandSubtitle: "मेकअप स्टोर • लखनऊ",

    // Nav
    navPackages: "3 प्रमुख पैकेज",
    navMenu: "आ ला कार्टे मेनू",
    navTransformation: "मेकओवर तुलना",
    navQuiz: "ग्लैम फाइंडर",
    navPolicy: "स्टूडियो नीति",
    navHygiene: "स्वच्छता प्रतिज्ञा",
    navReviews: "समीक्षाएं",
    navFaq: "सवाल-जवाब",
    navContact: "स्थान और समय",
    bookSlotBtn: "अपॉइंटमेंट बुक करें",

    // Hero
    heroBadge: "लखनऊ का भरोसेमंद ब्यूटी स्टूडियो • केवल इन-स्टूडियो",
    heroTitle: "लखनऊ में कुशल सौंदर्य और ब्राइडल आर्टिस्ट्री का अनुभव",
    heroDesc: "अग्रिमा मेकअप स्टोर में आपका स्वागत है। लखनऊ की दरों पर पेशेवर सैलून स्वच्छता, शैडोलेस वैनिटी लाइटिंग और पारदर्शी मूल्य का लाभ उठाएं। हमारी 3 श्रेणियां — बजट, प्रीमियम और ब्राइडल — एक्सप्लोर करें या व्हाट्सएप पर तुरंत बुक करें।",
    heroBtnExplore: "पैकेज और कीमतें देखें",
    heroBtnBuild: "कस्टम बुकिंग बनाएं",
    trust1Title: "100% इन-स्टूडियो",
    trust1Sub: "घर पर कोई सेवा नहीं",
    trust2Title: "वैनिटी स्टूडियो",
    trust2Sub: "पूर्ण वातानुकूलित आराम",
    trust3Title: "100% सैनिटाइज्ड",
    trust3Sub: "स्टरलाइज्ड उपकरण",
    trust4Title: "तुरंत व्हाट्सएप",
    trust4Sub: "त्वरित स्लॉट पुष्टि",

    // Stats
    stat1Label: "खुशहाल लखनऊ दुल्हनें",
    stat2Label: "स्टूडियो स्वच्छता सुरक्षा",
    stat3Label: "वर्षों का मेकअप अनुभव",
    stat4Label: "ग्राहक संतुष्टि रेटिंग",

    // Transformation
    transEyebrow: "इंटरैक्टिव बदलाव",
    transTitle: "स्टूडियो ब्राइडल मेकओवर तुलना",
    transLead: "स्लाइडर को खींचकर देखें कि कैसे हमारी वैनिटी लाइटिंग और एचडी ब्राइडल मेकअप आपके लुक को निखारता है।",
    transBefore: "पहले (साधारण स्किन)",
    transAfter: "बाद में (स्टूडियो एचडी ग्लैम)",
    transHint: "तुलना करने के लिए स्लाइडर को बाएं-दाएं खींचें",

    // Quiz
    quizEyebrow: "इंटरैक्टिव ग्लैम क्विज",
    quizTitle: "अपने लिए सही लुक चुनें",
    quizLead: "2 आसान सवालों के जवाब देकर लखनऊ दरों पर अपने लिए सबसे उपयुक्त पैकेज तुरंत जानें।",
    quizQ1Title: "चरण 1: अवसर क्या है?",
    quizQ1Sub: "उस समारोह को चुनें जिसकी आप तैयारी कर रहे हैं",
    quizQ2Title: "चरण 2: आपको किस प्रकार का मेकअप फिनिश चाहिए?",
    quizQ2Sub: "अपनी पसंदीदा स्टाइल और मेकअप इंटेंसिटी चुनें",
    quizRetry: "↺ दूसरा लुक खोजें",
    quizBookWa: "यह लुक व्हाट्सएप पर बुक करें",
    quizAddCart: "+ मेरी बुकिंग में जोड़ें",

    // Categories
    catEyebrow: "हमारी खास सेवाएं",
    catTitle: "3 प्रमुख ब्यूटी पैकेज",
    catLead: "लखनऊ की सटीक दरों के साथ तैयार किए गए पैकेज। आप पूरा पैकेज ले सकते हैं या अपनी पसंद की सेवाएं चुन सकते हैं।",
    tabAll: "सभी श्रेणियां",
    tabBudget: "🟢 बजट सेवाएं",
    tabPremium: "⭐ प्रीमियम सेवाएं",
    tabBridal: "👑 ब्राइडल सेवाएं",
    tabAlacarte: "💅 आ ला कार्टे मेनू",

    // Policy Banner
    policyTitle: "अग्रिमा मेकअप स्टोर केवल 100% इन-स्टूडियो क्यों है?",
    policyDesc: "मेकअप के टिकाऊपन और हॉस्पिटल-ग्रेड स्वच्छता की गारंटी के लिए, सभी सेवाएं केवल हमारे लखनऊ स्टूडियो में दी जाती हैं। हम होम सर्विस प्रदान नहीं करते।",
    feat1: "शैडोलेस 5500K वैनिटी स्टूडियो लाइटिंग",
    feat2: "वातानुकूलित एसी माहौल (पसीना-मुक्त मेकअप)",
    feat3: "यूवी-स्टरलाइज्ड ब्रश और उपकरण",
    feat4: "शांत, स्वच्छ और सुरक्षित निजी स्टूडियो",

    // A La Carte
    alacarteEyebrow: "आ ला कार्टे मेनू",
    alacarteTitle: "व्यक्तिगत ब्यूटी विभाग",
    alacarteLead: "थ्रेडिंग, वैक्सिंग, फेशियल या हेयर स्टाइलिंग जैसी अलग सेवाएं चुनें और व्हाट्सएप कार्ट में जोड़ें।",

    // Hygiene
    hygieneEyebrow: "स्टूडियो ईमानदारी",
    hygieneTitle: "अग्रिमा की 5-सूत्रीय स्वच्छता प्रतिज्ञा",
    hygieneLead: "आपकी त्वचा और सेहत अनमोल है। हम हर सत्र के लिए कड़े मेडिकल स्टरलाइजेशन मानकों का पालन करते हैं।",

    // Reviews
    reviewsEyebrow: "सच्चे अनुभव",
    reviewsTitle: "लखनऊ के परिवारों और दुल्हनों का भरोसा",
    reviewsLead: "जानें कि हमारे शांत वातावरण और टिकाऊ मेकअप के बारे में लखनऊ के ग्राहकों का क्या कहना है।",

    // Contact
    contactEyebrow: "हमारे स्टूडियो आएं",
    contactTitle: "स्टूडियो का पता और संपर्क",
    contactLead: "हम लखनऊ में स्थित हैं। हमारे समय में कभी भी आएं या सीधे व्हाट्सएप पर संपर्क करें।",
    inqTitle: "त्वरित अपॉइंटमेंट पूछताछ",
    inqLead: "अपनी जानकारी भेजें, हम अपॉइंटमेंट की पुष्टि के लिए तुरंत व्हाट्सएप पर जुड़ेंगे।",
    inqSubmit: "व्हाट्सएप पर पूछताछ भेजें",

    // Drawer
    drawerTitle: "आपकी स्टूडियो बुकिंग",
    cartEmptyTitle: "आपकी बुकिंग लिस्ट खाली है",
    cartEmptySub: "किसी भी सेवा पर + दबाकर उसे यहां जोड़ें।",
    drawerTotal: "अनुमानित कुल राशि",
    drawerConfirm: "पुष्टि करें और व्हाट्सएप पर भेजें",

    // Floating Tooltip
    waTooltip: "👋 स्टूडियो बुकिंग खुली है! चैट करें।"
  }
};

// ==========================================================================
// 3. I18N CONTROLLER (Language Switcher)
// ==========================================================================
const I18n = {
  currentLang: 'en',

  init() {
    try {
      const saved = localStorage.getItem('agrima_lang');
      if (saved && (saved === 'en' || saved === 'hi')) {
        this.currentLang = saved;
      }
    } catch (e) {}

    this.applyLanguage(this.currentLang);
    this.bindLanguageToggles();
  },

  applyLanguage(lang) {
    this.currentLang = lang;
    try {
      localStorage.setItem('agrima_lang', lang);
    } catch (e) {}

    document.documentElement.lang = lang;
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

    // Update text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update language toggle buttons visual active state
    document.querySelectorAll('.lang-opt').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update floating WhatsApp tooltip
    const waTooltip = document.getElementById('waFloatingTooltipText');
    if (waTooltip) {
      waTooltip.textContent = dict.waTooltip || TRANSLATIONS.en.waTooltip;
    }
  },

  bindLanguageToggles() {
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang && targetLang !== this.currentLang) {
          this.applyLanguage(targetLang);
          AnimationFX.createSparkleBurst(e.clientX, e.clientY);
          UI.showToast(targetLang === 'hi' ? '🌸 भाषा हिंदी में बदली गई' : '✨ Language switched to English');
        }
      });
    });
  }
};

// ==========================================================================
// 4. SECURITY & SANITIZATION UTILITIES
// ==========================================================================
const SecurityUtils = {
  sanitizeText(input) {
    if (typeof input !== 'string') return '';
    const entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;',
      '`': '&#x60;'
    };
    return input.replace(/[&<>"'`/]/g, char => entityMap[char]).trim();
  },

  isValidIndianPhone(phone) {
    const cleanPhone = phone.replace(/[\s\-\+]/g, '');
    return /^(?:(?:\+|0{0,2})91)?[6-9]\d{9}$/.test(cleanPhone);
  },

  extractPlainPhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 12 && cleaned.startsWith('91')) {
      return cleaned.slice(2);
    }
    return cleaned.slice(-10);
  },

  isFutureOrToday(dateString) {
    if (!dateString) return false;
    const selected = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  }
};

// ==========================================================================
// 5. APPLICATION STATE & CART MANAGEMENT
// ==========================================================================
const AppState = {
  cart: [],
  
  init() {
    try {
      const saved = localStorage.getItem('agrima_booking_cart');
      if (saved) {
        this.cart = JSON.parse(saved);
        if (!Array.isArray(this.cart)) this.cart = [];
      }
    } catch (e) {
      this.cart = [];
    }
    this.updateCartUI();
  },

  save() {
    try {
      localStorage.setItem('agrima_booking_cart', JSON.stringify(this.cart));
    } catch (e) {}
    this.updateCartUI();
  },

  addItem(service, eventCoords) {
    const exists = this.cart.some(item => item.id === service.id);
    if (exists) {
      UI.showToast(`"${service.name}" is already in your booking list.`);
      return false;
    }
    this.cart.push({
      id: SecurityUtils.sanitizeText(service.id),
      name: SecurityUtils.sanitizeText(service.name),
      price: parseInt(service.price, 10) || 0,
      category: SecurityUtils.sanitizeText(service.category || 'Individual Service')
    });
    this.save();
    
    if (eventCoords) {
      AnimationFX.createSparkleBurst(eventCoords.x, eventCoords.y);
    }
    
    UI.showToast(`✨ Added "${service.name}" to booking list!`);
    return true;
  },

  removeItem(serviceId) {
    this.cart = this.cart.filter(item => item.id !== serviceId);
    this.save();
    UI.showToast('Service removed from list.');
  },

  clearCart() {
    this.cart = [];
    this.save();
  },

  getTotal() {
    return this.cart.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
  },

  updateCartUI() {
    const countBadge = document.getElementById('cartBadgeCount');
    const totalDisplay = document.getElementById('drawerTotalVal');
    const itemsContainer = document.getElementById('cartItemsList');
    const emptyState = document.getElementById('cartEmptyState');
    const bookingForm = document.getElementById('drawerBookingForm');

    const totalCount = this.cart.length;
    if (countBadge) {
      countBadge.textContent = totalCount;
      countBadge.style.display = totalCount > 0 ? 'flex' : 'none';
    }

    if (totalDisplay) {
      totalDisplay.textContent = `₹${this.getTotal().toLocaleString('en-IN')}`;
    }

    if (!itemsContainer) return;

    if (totalCount === 0) {
      itemsContainer.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      if (bookingForm) bookingForm.style.display = 'none';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      if (bookingForm) bookingForm.style.display = 'flex';

      itemsContainer.innerHTML = '';
      this.cart.forEach(item => {
        const row = document.createElement('div');
        row.className = 'cart-item-row';

        const leftDiv = document.createElement('div');
        const nameEl = document.createElement('div');
        nameEl.className = 'cart-item-name';
        nameEl.textContent = item.name;

        const catEl = document.createElement('div');
        catEl.className = 'service-meta';
        catEl.textContent = item.category;

        leftDiv.appendChild(nameEl);
        leftDiv.appendChild(catEl);

        const rightDiv = document.createElement('div');
        rightDiv.style.display = 'flex';
        rightDiv.style.alignItems = 'center';
        rightDiv.style.gap = '10px';

        const priceEl = document.createElement('span');
        priceEl.className = 'cart-item-price';
        priceEl.textContent = `₹${item.price.toLocaleString('en-IN')}`;

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'cart-item-remove';
        removeBtn.title = 'Remove service';
        removeBtn.setAttribute('aria-label', `Remove ${item.name}`);
        removeBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        `;
        removeBtn.addEventListener('click', () => {
          AppState.removeItem(item.id);
        });

        rightDiv.appendChild(priceEl);
        rightDiv.appendChild(removeBtn);

        row.appendChild(leftDiv);
        row.appendChild(rightDiv);
        itemsContainer.appendChild(row);
      });
    }

    // Update Add buttons visual states
    document.querySelectorAll('[data-service-id]').forEach(btn => {
      const id = btn.getAttribute('data-service-id');
      const isAdded = this.cart.some(item => item.id === id);
      if (isAdded) {
        btn.classList.add('added');
        btn.title = 'Added in booking list';
      } else {
        btn.classList.remove('added');
        btn.title = 'Add to booking list';
      }
    });
  }
};

// ==========================================================================
// 6. INTERACTIVE BEFORE & AFTER MAKEOVER SLIDER
// ==========================================================================
const BeforeAfterSlider = {
  isDragging: false,
  container: null,
  layerAfter: null,
  handle: null,

  init() {
    this.container = document.getElementById('baSliderContainer');
    this.layerAfter = document.getElementById('baLayerAfter');
    this.handle = document.getElementById('baHandle');

    if (!this.container || !this.layerAfter || !this.handle) return;

    const startDrag = (e) => {
      this.isDragging = true;
      this.updatePosition(e);
    };

    const stopDrag = () => {
      this.isDragging = false;
    };

    const doDrag = (e) => {
      if (!this.isDragging) return;
      this.updatePosition(e);
    };

    // Mouse events
    this.container.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('mousemove', doDrag);

    // Touch events — prevent vertical scroll only when actively dragging
    this.container.addEventListener('touchstart', (e) => {
      this.isDragging = true;
      const touch = e.touches[0];
      if (touch) this.updatePosition(touch);
    }, { passive: true });

    window.addEventListener('touchend', stopDrag, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!this.isDragging) return;
      // Prevent page scroll while user drags the slider horizontally
      e.preventDefault();
      const touch = e.touches[0];
      if (touch) this.updatePosition(touch);
    }, { passive: false }); // passive:false allows preventDefault
  },

  updatePosition(event) {
    if (!this.container) return;
    const rect = this.container.getBoundingClientRect();
    const clientX = event.clientX || (event.touches && event.touches[0] ? event.touches[0].clientX : 0);
    let percent = ((clientX - rect.left) / rect.width) * 100;
    
    // Clamp between 5% and 95%
    percent = Math.max(5, Math.min(95, percent));

    if (this.layerAfter) {
      this.layerAfter.style.clipPath = `polygon(${percent}% 0, 100% 0, 100% 100%, ${percent}% 100%)`;
      this.layerAfter.style.webkitClipPath = `polygon(${percent}% 0, 100% 0, 100% 100%, ${percent}% 100%)`;
    }
    if (this.handle) {
      this.handle.style.left = `${percent}%`;
    }
  }
};

// ==========================================================================
// 7. INTERACTIVE "FIND YOUR PERFECT LOOK" GLAM QUIZ
// ==========================================================================
const LookQuiz = {
  currentStep: 1,
  selectedOccasion: null,
  selectedFinish: null,

  // Knowledge base recommendation engine
  catalog: {
    airbrush: {
      id: 'br_airbrush',
      name: 'Airbrush Bridal Makeup',
      category: '👑 Bridal Services',
      price: '14,999',
      desc: 'Flawless 24-hr Temptu silicone finish, tear-proof, sweat-proof, and designed for 4K wedding videography.'
    },
    hd_bridal: {
      id: 'br_hd',
      name: 'HD Bridal Makeup',
      category: '👑 Bridal Services',
      price: '11,999',
      desc: 'Waterproof HD base, precision contouring, dupatta draping, jewelry setting and luxury hairstyling.'
    },
    basic_bridal: {
      id: 'br_basic',
      name: 'Basic Bridal Makeup',
      category: '👑 Bridal Services',
      price: '7,999',
      desc: 'Traditional bridal look with elegant saree/lehenga draping, bridal bun, and lashes.'
    },
    engagement: {
      id: 'pm_engage',
      name: 'Engagement Makeup',
      category: '⭐ Premium Services',
      price: '4,999',
      desc: 'Radiant soft glam base, designer hairstyle, lashes, and dupatta draping for engagement & reception.'
    },
    hd_party: {
      id: 'pm_hdparty',
      name: 'HD Party Makeup',
      category: '⭐ Premium Services',
      price: '2,999',
      desc: 'Camera-ready high-definition party glow with lashes and customized party hairstyling.'
    },
    party: {
      id: 'bg_party',
      name: 'Party Makeup',
      category: '🟢 Budget Services',
      price: '1,499',
      desc: 'Fresh radiant base, expressive eye makeup, matching lipstick and quick hairstyling.'
    },
    facial: {
      id: 'pm_facial',
      name: 'Premium Facial',
      category: '⭐ Premium Services',
      price: '1,499',
      desc: 'Deep skin rejuvenation, anti-tan herbal treatment, and crystal glow for everyday freshness.'
    }
  },

  init() {
    this.bindEvents();
  },

  bindEvents() {
    // Step 1 Options
    document.querySelectorAll('[data-quiz-step="1"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.selectedOccasion = btn.getAttribute('data-value');
        AnimationFX.createSparkleBurst(e.clientX, e.clientY);
        this.goToStep(2);
      });
    });

    // Step 2 Options
    document.querySelectorAll('[data-quiz-step="2"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.selectedFinish = btn.getAttribute('data-value');
        AnimationFX.createSparkleBurst(e.clientX, e.clientY);
        this.computeResult();
      });
    });

    // Retry Button
    const retryBtn = document.getElementById('quizRetryBtn');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        this.reset();
      });
    }
  },

  goToStep(step) {
    this.currentStep = step;
    
    const step1El = document.getElementById('quizStep1');
    const step2El = document.getElementById('quizStep2');
    const resultEl = document.getElementById('quizResultView');

    const dot1 = document.getElementById('quizDot1');
    const dot2 = document.getElementById('quizDot2');
    const dot3 = document.getElementById('quizDot3');

    if (step === 1) {
      if (step1El) step1El.style.display = 'block';
      if (step2El) step2El.style.display = 'none';
      if (resultEl) resultEl.style.display = 'none';

      dot1?.classList.add('active');
      dot1?.classList.remove('completed');
      dot2?.classList.remove('active', 'completed');
      dot3?.classList.remove('active', 'completed');
    } else if (step === 2) {
      if (step1El) step1El.style.display = 'none';
      if (step2El) step2El.style.display = 'block';
      if (resultEl) resultEl.style.display = 'none';

      dot1?.classList.remove('active');
      dot1?.classList.add('completed');
      dot2?.classList.add('active');
      dot3?.classList.remove('active', 'completed');
    }
  },

  computeResult() {
    let matchKey = 'hd_party';

    if (this.selectedOccasion === 'wedding') {
      if (this.selectedFinish === 'airbrush') matchKey = 'airbrush';
      else if (this.selectedFinish === 'hd') matchKey = 'hd_bridal';
      else matchKey = 'basic_bridal';
    } else if (this.selectedOccasion === 'engagement') {
      matchKey = 'engagement';
    } else if (this.selectedOccasion === 'party') {
      if (this.selectedFinish === 'hd') matchKey = 'hd_party';
      else matchKey = 'party';
    } else if (this.selectedOccasion === 'routine') {
      matchKey = 'facial';
    }

    const matchedService = this.catalog[matchKey];

    const step1El = document.getElementById('quizStep1');
    const step2El = document.getElementById('quizStep2');
    const resultEl = document.getElementById('quizResultView');

    if (step1El) step1El.style.display = 'none';
    if (step2El) step2El.style.display = 'none';
    if (resultEl) resultEl.style.display = 'block';

    const dot1 = document.getElementById('quizDot1');
    const dot2 = document.getElementById('quizDot2');
    const dot3 = document.getElementById('quizDot3');
    dot1?.classList.add('completed');
    dot2?.classList.add('completed');
    dot3?.classList.add('active');

    // Populate result elements
    const nameEl = document.getElementById('quizResultName');
    const catEl = document.getElementById('quizResultCat');
    const priceEl = document.getElementById('quizResultPrice');
    const descEl = document.getElementById('quizResultDesc');
    const bookWaBtn = document.getElementById('quizResultBookWa');
    const addCartBtn = document.getElementById('quizResultAddCart');

    if (nameEl) nameEl.textContent = matchedService.name;
    if (catEl) catEl.textContent = matchedService.category;
    if (priceEl) priceEl.textContent = `₹${matchedService.price}`;
    if (descEl) descEl.textContent = matchedService.desc;

    if (bookWaBtn) {
      bookWaBtn.onclick = (e) => {
        AnimationFX.createSparkleBurst(e.clientX, e.clientY);
        WhatsAppService.sendSingleServiceBooking({
          name: matchedService.name,
          price: matchedService.price,
          category: matchedService.category
        });
      };
    }

    if (addCartBtn) {
      addCartBtn.onclick = (e) => {
        AppState.addItem({
          id: matchedService.id,
          name: matchedService.name,
          price: matchedService.price.replace(/,/g, ''),
          category: matchedService.category
        }, { x: e.clientX, y: e.clientY });
      };
    }
  },

  reset() {
    this.selectedOccasion = null;
    this.selectedFinish = null;
    this.goToStep(1);
  }
};

// ==========================================================================
// 8. ADVANCED ANIMATIONS & INTERACTIVE PHYSICS
// ==========================================================================
const AnimationFX = {
  init() {
    this.setup3DCardTilt();
    this.setupStatsCounter();
    this.bindFloatingTooltip();
  },

  /**
   * Spawns playful floating sparkle particles
   */
  createSparkleBurst(x, y) {
    if (!x || !y) return;
    const icons = ['✨', '🌸', '★', '💎', '✦'];
    const count = 9;

    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      p.className = 'sparkle-particle';
      p.textContent = icons[Math.floor(Math.random() * icons.length)];
      
      const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.4 - 0.2);
      const distance = 40 + Math.random() * 60;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      p.style.setProperty('--tx', `${tx}px`);
      p.style.setProperty('--ty', `${ty}px`);

      document.body.appendChild(p);
      setTimeout(() => p.remove(), 800);
    }
  },

  /**
   * 3D Card Tilt with Specular Lighting
   */
  setup3DCardTilt() {
    // Only apply on devices with mouse pointer
    if (window.matchMedia('(hover: none)').matches) return;

    const cards = document.querySelectorAll('.tilt-card, .pillar-card, .dept-card, .stat-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  },

  /**
   * Live Animated Counter Numbers on Scroll
   */
  setupStatsCounter() {
    const statsSection = document.querySelector('.stats-counter-section');
    if (!statsSection) return;

    let hasCounted = false;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasCounted) {
          hasCounted = true;
          obs.unobserve(entry.target);
          this.runCounters();
        }
      });
    }, { threshold: 0.25 });

    observer.observe(statsSection);
  },

  runCounters() {
    document.querySelectorAll('.stat-number').forEach(el => {
      const target = parseFloat(el.getAttribute('data-target') || '0');
      const isDecimal = el.getAttribute('data-target')?.includes('.');
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      
      const duration = 1600;
      const startTime = performance.now();

      const update = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const currentVal = target * easeOutQuad;

        if (isDecimal) {
          el.textContent = `${prefix}${currentVal.toFixed(1)}${suffix}`;
        } else {
          el.textContent = `${prefix}${Math.floor(currentVal)}${suffix}`;
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = `${prefix}${target}${suffix}`;
        }
      };

      requestAnimationFrame(update);
    });
  },

  bindFloatingTooltip() {
    const bubble = document.getElementById('waFloatingBubble');
    if (bubble) {
      bubble.addEventListener('click', () => {
        const link = document.querySelector('.floating-whatsapp-btn');
        if (link) link.click();
      });
    }
  }
};

// ==========================================================================
// 9. UI CONTROLLER & EVENT LISTENERS
// ==========================================================================
const UI = {
  toastTimeout: null,

  init() {
    this.setupDateInputConstraints();
    this.setupHeaderScroll();
    this.setupCategoryTabs();
    this.setupFAQAccordion();
    this.setupIntersectionObserver();
    this.bindCartDrawerEvents();
    this.bindQuickBookButtons();
    this.bindDirectFormSubmissions();
  },

  showToast(message) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');

    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  },

  setupDateInputConstraints() {
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
      input.setAttribute('min', today);
    });
  },

  setupHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  },

  setupCategoryTabs() {
    const tabBtns = document.querySelectorAll('.category-tabs .tab-btn');
    const sections = {
      budget: document.getElementById('pillarBudget'),
      premium: document.getElementById('pillarPremium'),
      bridal: document.getElementById('pillarBridal'),
      alacarte: document.getElementById('individualServices')
    };

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const target = btn.getAttribute('data-target');
        if (target === 'all') {
          Object.values(sections).forEach(el => {
            if (el) el.style.display = 'block';
          });
        } else if (target === 'alacarte') {
          const el = document.getElementById('individualServices');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          const targetEl = sections[target];
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      });
    });
  },

  setupFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        });

        if (!isOpen && answer) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  },

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up-element').forEach(el => {
      observer.observe(el);
    });
  },

  bindCartDrawerEvents() {
    const drawer = document.getElementById('bookingDrawer');
    const backdrop = document.getElementById('backdropOverlay');
    const openBtns = document.querySelectorAll('[data-action="open-cart"]');
    const closeBtn = document.getElementById('closeCartDrawer');

    const openDrawer = () => {
      if (drawer && backdrop) {
        drawer.classList.add('open');
        backdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    };

    const closeDrawer = () => {
      if (drawer && backdrop) {
        drawer.classList.remove('open');
        backdrop.classList.remove('show');
        document.body.style.overflow = '';
      }
    };

    openBtns.forEach(btn => btn.addEventListener('click', openDrawer));
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    // Mobile nav drawer
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavDrawer = document.getElementById('mobileNavDrawer');
    const closeMobileNav = document.getElementById('closeMobileNav');

    if (mobileMenuBtn && mobileNavDrawer) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileNavDrawer.classList.add('open');
        backdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
      });
    }

    const closeNav = () => {
      if (mobileNavDrawer && backdrop) {
        mobileNavDrawer.classList.remove('open');
        backdrop.classList.remove('show');
        document.body.style.overflow = '';
      }
    };

    if (closeMobileNav) closeMobileNav.addEventListener('click', closeNav);
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
      link.addEventListener('click', closeNav);
    });
  },

  bindQuickBookButtons() {
    document.querySelectorAll('[data-action="add-service"]').forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = button.getAttribute('data-service-id');
        const name = button.getAttribute('data-service-name');
        const price = button.getAttribute('data-service-price');
        const category = button.getAttribute('data-service-cat') || 'Studio Service';

        AppState.addItem({ id, name, price, category }, { x: e.clientX, y: e.clientY });
      });
    });

    document.querySelectorAll('[data-action="quick-book-wa"]').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        AnimationFX.createSparkleBurst(e.clientX, e.clientY);
        const name = button.getAttribute('data-service-name') || 'Beauty Service';
        const price = button.getAttribute('data-service-price') || '';
        const cat = button.getAttribute('data-service-cat') || 'Agrima In-Studio Service';

        WhatsAppService.sendSingleServiceBooking({
          name: SecurityUtils.sanitizeText(name),
          price: SecurityUtils.sanitizeText(price),
          category: SecurityUtils.sanitizeText(cat)
        });
      });
    });
  },

  bindDirectFormSubmissions() {
    const drawerForm = document.getElementById('drawerBookingForm');
    if (drawerForm) {
      drawerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('drawerCustName');
        const phoneInput = document.getElementById('drawerCustPhone');
        const dateInput = document.getElementById('drawerCustDate');
        const timeInput = document.getElementById('drawerCustTime');
        const notesInput = document.getElementById('drawerCustNotes');

        const rawName = nameInput ? nameInput.value : '';
        const rawPhone = phoneInput ? phoneInput.value : '';
        const rawDate = dateInput ? dateInput.value : '';
        const rawTime = timeInput ? timeInput.value : '';
        const rawNotes = notesInput ? notesInput.value : '';

        if (!rawName.trim()) {
          UI.showToast(I18n.currentLang === 'hi' ? '⚠️ कृपया अपना नाम दर्ज करें' : '⚠️ Please enter your name');
          nameInput?.focus();
          return;
        }

        if (!SecurityUtils.isValidIndianPhone(rawPhone)) {
          UI.showToast(I18n.currentLang === 'hi' ? '⚠️ कृपया 10 अंकों का वैध फोन नंबर दर्ज करें' : '⚠️ Please enter a valid 10-digit Indian phone number');
          phoneInput?.focus();
          return;
        }

        if (rawDate && !SecurityUtils.isFutureOrToday(rawDate)) {
          UI.showToast(I18n.currentLang === 'hi' ? '⚠️ तारीख पुरानी नहीं हो सकती' : '⚠️ Booking date cannot be in the past');
          dateInput?.focus();
          return;
        }

        if (AppState.cart.length === 0) {
          UI.showToast(I18n.currentLang === 'hi' ? '⚠️ कृपया कम से कम एक सेवा जोड़ें' : '⚠️ Please add at least one service to book');
          return;
        }

        WhatsAppService.sendMultiServiceBooking({
          customerName: SecurityUtils.sanitizeText(rawName),
          customerPhone: SecurityUtils.extractPlainPhone(rawPhone),
          date: SecurityUtils.sanitizeText(rawDate),
          time: SecurityUtils.sanitizeText(rawTime),
          notes: SecurityUtils.sanitizeText(rawNotes),
          items: AppState.cart,
          total: AppState.getTotal()
        });
      });
    }

    const inquiryForm = document.getElementById('quickInquiryForm');
    if (inquiryForm) {
      inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('inqName')?.value || '';
        const phone = document.getElementById('inqPhone')?.value || '';
        const service = document.getElementById('inqService')?.value || '';
        const date = document.getElementById('inqDate')?.value || '';
        const message = document.getElementById('inqMessage')?.value || '';

        if (!name.trim()) {
          UI.showToast(I18n.currentLang === 'hi' ? '⚠️ कृपया अपना नाम दर्ज करें' : '⚠️ Please enter your name');
          return;
        }

        if (!SecurityUtils.isValidIndianPhone(phone)) {
          UI.showToast(I18n.currentLang === 'hi' ? '⚠️ कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें' : '⚠️ Please enter a valid 10-digit mobile number');
          return;
        }

        WhatsAppService.sendGeneralInquiry({
          name: SecurityUtils.sanitizeText(name),
          phone: SecurityUtils.extractPlainPhone(phone),
          service: SecurityUtils.sanitizeText(service),
          date: SecurityUtils.sanitizeText(date),
          message: SecurityUtils.sanitizeText(message)
        });
      });
    }
  }
};

// ==========================================================================
// 10. WHATSAPP DISPATCHER (Bilingual Messages)
// ==========================================================================
const WhatsAppService = {
  dispatch(messageText) {
    const encoded = encodeURIComponent(messageText);
    const safeStorePhone = AGRIMA_CONFIG.phone.replace(/\D/g, '');
    const waUrl = `https://wa.me/${safeStorePhone}?text=${encoded}`;
    
    const win = window.open(waUrl, '_blank', 'noopener,noreferrer');
    if (win) {
      win.focus();
    } else {
      window.location.href = waUrl;
    }
  },

  sendSingleServiceBooking({ name, price, category }) {
    const isHi = I18n.currentLang === 'hi';
    const text = isHi ? [
      `🌸 *अपॉइंटमेंट बुकिंग — ${AGRIMA_CONFIG.storeName}* 🌸`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📍 *सेवा का प्रकार:* केवल 100% इन-स्टूडियो (लखनऊ)`,
      `🏢 *स्टूडियो पता:* लखनऊ स्टूडियो`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `💅 *चुनी गई सेवा:* ${name}`,
      `🏷️ *श्रेणी:* ${category}`,
      price ? `💰 *दर:* ₹${price}` : '',
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `नमस्ते! मैं आपके लखनऊ स्टूडियो में इस सेवा के लिए अपॉइंटमेंट बुक करना चाहती हूँ। कृपया उपलब्ध समय बताएं।`
    ].filter(Boolean).join('\n') : [
      `🌸 *Appointment Booking — ${AGRIMA_CONFIG.storeName}* 🌸`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📍 *Service Mode:* ${AGRIMA_CONFIG.serviceMode}`,
      `🏢 *Studio Location:* Lucknow Studio`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `💅 *Selected Service:* ${name}`,
      `🏷️ *Category:* ${category}`,
      price ? `💰 *Price:* ₹${price}` : '',
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Hello! I would like to book this appointment at your studio. Please share available time slots.`
    ].filter(Boolean).join('\n');

    this.dispatch(text);
  },

  sendMultiServiceBooking({ customerName, customerPhone, date, time, notes, items, total }) {
    const isHi = I18n.currentLang === 'hi';
    const servicesList = items.map((it, idx) => `  ${idx + 1}. ${it.name} (₹${it.price.toLocaleString('en-IN')})`).join('\n');
    
    let formattedDate = 'Earliest Available';
    if (date) {
      const parts = date.split('-');
      if (parts.length === 3) {
        formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
      } else {
        formattedDate = date;
      }
    }

    const text = isHi ? [
      `🌸 *स्टूडियो अपॉइंटमेंट बुकिंग — ${AGRIMA_CONFIG.storeName}* 🌸`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📍 *नियम:* केवल 100% इन-स्टूडियो (घर पर कोई सेवा नहीं)`,
      `👤 *ग्राहक का नाम:* ${customerName}`,
      `📱 *फोन नंबर:* ${customerPhone}`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `💅 *चुनी गई कुल सेवाएं (${items.length}):*`,
      servicesList,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `💰 *अनुमानित कुल राशि:* ₹${total.toLocaleString('en-IN')}`,
      `📅 *पसंदीदा तारीख:* ${formattedDate}`,
      `⏰ *पसंदीदा समय:* ${time || 'लचीला (Flexible)'}`,
      notes ? `📝 *विशेष अनुरोध:* ${notes}` : '',
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `कृपया लखनऊ स्टूडियो में मेरी बुकिंग की पुष्टि करें। धन्यवाद!`
    ].filter(Boolean).join('\n') : [
      `🌸 *Studio Appointment Booking — ${AGRIMA_CONFIG.storeName}* 🌸`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📍 *Policy:* ${AGRIMA_CONFIG.serviceMode}`,
      `👤 *Customer Name:* ${customerName}`,
      `📱 *Contact Phone:* ${customerPhone}`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `💅 *Selected Services (${items.length}):*`,
      servicesList,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `💰 *Estimated Total:* ₹${total.toLocaleString('en-IN')}`,
      `📅 *Preferred Date:* ${formattedDate}`,
      `⏰ *Preferred Time:* ${time || 'Flexible'}`,
      notes ? `📝 *Special Request:* ${notes}` : '',
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Please confirm my studio appointment slot at your Lucknow parlour! Thank you.`
    ].filter(Boolean).join('\n');

    this.dispatch(text);
  },

  sendGeneralInquiry({ name, phone, service, date, message }) {
    const isHi = I18n.currentLang === 'hi';
    const text = isHi ? [
      `✨ *सामान्य पूछताछ — ${AGRIMA_CONFIG.storeName}* ✨`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *नाम:* ${name}`,
      `📱 *फोन:* ${phone}`,
      service ? `💅 *रुचि की सेवा:* ${service}` : '',
      date ? `📅 *पसंदीदा तारीख:* ${date}` : '',
      message ? `💬 *संदेश:* ${message}` : '',
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `कृपया स्टूडियो अपॉइंटमेंट के संबंध में मुझसे संपर्क करें।`
    ].filter(Boolean).join('\n') : [
      `✨ *General Inquiry — ${AGRIMA_CONFIG.storeName}* ✨`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${name}`,
      `📱 *Phone:* ${phone}`,
      service ? `💅 *Interested In:* ${service}` : '',
      date ? `📅 *Preferred Date:* ${date}` : '',
      message ? `💬 *Message:* ${message}` : '',
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Please get in touch with me regarding studio appointment details.`
    ].filter(Boolean).join('\n');

    this.dispatch(text);
  }
};

// ==========================================================================
// 11. BOOTSTRAP APPLICATION
// ==========================================================================
if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

document.addEventListener('DOMContentLoaded', () => {
  AppState.init();
  UI.init();
  I18n.init();
  BeforeAfterSlider.init();
  LookQuiz.init();
  AnimationFX.init();
});
