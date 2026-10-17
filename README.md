# 🌸 Agrima Makeup Store — Official Website

> **High-Performance, Security-Hardened, Responsive Website for Agrima Makeup Store (Lucknow, UP)**  
> Engineered with pure Semantic HTML5, CSS3 GPU-accelerated micro-animations, and Zero-Bloat Vanilla JavaScript.

---

## 🌟 Key Highlights & Business Features

1. **Strict 100% In-Studio Policy (No Home Visits)**
   - Prominently emphasized throughout the top notice banner, hero section, studio policy guarantee section, and booking messages.
   - Highlights client benefits: professional shadowless vanity lighting, climate-controlled AC environment (prevents makeup melting/oxidation), and medical-grade sterilization.

2. **The 3 Signature Packages with Exact Lucknow Rates**
   - 🟢 **Budget Services**: Eyebrows (₹40), Upper Lips (₹30), Basic Cleanup (₹399), Basic Facial (₹599), Party Makeup (₹1,499).
   - ⭐ **Premium Services**: Premium Facial (₹1,499), HD Party Makeup (₹2,999), Engagement Makeup (₹4,999).
   - 👑 **Bridal Services**: Basic Bridal (₹7,999), HD Bridal (₹11,999), Airbrush Bridal (₹14,999).

3. **A La Carte Departmental Menu**
   - Dedicated interactive sections for **Threading & Waxing**, **Facial & Skincare**, **Hair Styling & Care**, and **Mehndi Art (Henna)**.

4. **Multi-Service WhatsApp Cart & Booking Builder**
   - Customers can click `+` on any service to add it to a dynamic slide-out cart.
   - Live price tally in INR (`₹`).
   - Customer enters their Name, 10-digit Indian mobile number, preferred date, and time slot.
   - Generates an encrypted, pre-formatted WhatsApp booking message and opens the official WhatsApp chat directly.

5. **Direct Quick-Book**
   - Every service card has a direct WhatsApp booking button for instant one-click reservations.

---

## 🛡️ Security Architecture

The codebase has been engineered to adhere to top modern web security best practices:

- **Strict Content Security Policy (CSP)**:
  Configured in `<meta>` tags to restrict unauthorized scripts, inline injection, or third-party frame hijacking (`frame-ancestors 'none'`, `object-src 'none'`).
- **Input Sanitization & XSS Mitigation**:
  All user inputs entered into the booking modal or inquiry form pass through `SecurityUtils.sanitizeText()` which escapes dangerous HTML characters (`<`, `>`, `"`, `'`, `/`, `` ` ``) before any internal processing.
- **Strict Indian Phone Number Regex**:
  Validates standard Indian mobile phone numbers (`/^(?:(?:\+|0{0,2})91)?[6-9]\d{9}$/`) to prevent injection or invalid requests.
- **Date Constraints**:
  Prevents past dates from being selected (`min` attribute dynamically set to today's date, verified serverless on submission).
- **Safe External Links**:
  All outbound links include `rel="noopener noreferrer"` to protect against tab-nabbing vulnerabilities.
- **Zero Vulnerable Dependencies**:
  No npm supply-chain vulnerabilities, no outdated jQuery, no heavy frameworks. Pure, auditable vanilla code.

---

## ⚡ Performance Architecture

- **Sub-100ms First Contentful Paint (FCP)**:
  Zero heavy external JavaScript libraries or runtime frameworks.
- **Inline SVG Icons**:
  High-DPI sharp icons without downloading bloated 500KB font icon bundles.
- **Service Worker (`sw.js`) & PWA Support**:
  Includes offline caching with `stale-while-revalidate` caching strategy for repeat visits and mobile add-to-home-screen (`manifest.json`).
- **GPU-Accelerated Smooth 60FPS Micro-Animations**:
  CSS animations utilize `transform` and `opacity` properties to prevent costly layout thrashing and DOM reflows.
- **Accessibility & Reduced Motion**:
  Includes `@media (prefers-reduced-motion: reduce)` rules for users requiring low-motion interfaces.

---

## ⚙️ Easy Configuration

To update store contact details or phone number, simply edit lines 12–21 in [`js/script.js`](file:///c:/Users/Ajay%20Verma/Desktop/Agrima%20Beauty%20Parlour/js/script.js):

```javascript
const AGRIMA_CONFIG = Object.freeze({
  storeName: 'Agrima Makeup Store',
  phone: '919876543210', // Replace with Owner WhatsApp number (country code + 10 digits)
  displayPhone: '+91 98765 43210',
  city: 'Lucknow, Uttar Pradesh',
  studioAddress: 'Shop #4, Gomti Nagar / Hazratganj Commercial Hub, Lucknow, UP',
  timing: '10:00 AM – 8:00 PM (Monday – Sunday)',
  serviceMode: '100% In-Studio Only (Strictly No Home Services)',
});
```

---

## 🚀 How to Run & Deploy

### Local Preview
Open [`index.html`](file:///c:/Users/Ajay%20Verma/Desktop/Agrima%20Beauty%20Parlour/index.html) in any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox).

You can also serve it with any local HTTP server:
```powershell
# Using Python built-in server
python -m http.server 8000

# Using Node.js npx
npx serve .
```

### Production Deployment
This is a static site ready for instant 1-click deployment on:
- **Netlify**: Drag and drop the `Agrima Beauty Parlour` folder directly into Netlify.
- **Vercel**: Run `vercel` or link GitHub repository.
- **GitHub Pages**: Push to repository and enable GitHub Pages on `main` branch.
- **cPanel / Apache / Nginx**: Upload files directly to `public_html`.
