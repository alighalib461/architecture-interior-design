# Architecture Interior Design — Official Website

> **"Where Vision Meets Reality"**  
> Premium, responsive, production-ready website for **Architecture Interior Design**, an architectural & luxury interior design studio based in Karachi, Pakistan.

---

## 🏛️ Brand Overview

- **Studio**: Architecture Interior Design
- **Location**: Block-7 & 8, Shahrah-e-Faisal Rd, Block 2 P.E.C.H.S., Karachi, 74000, Pakistan
- **Contact / WhatsApp**: `+92 333 3001231`
- **Email**: `architectureinteriordesign@gmail.com`
- **Hours**: 10:00 AM – 6:00 PM (Daily)
- **Rating**: 4.5 Stars from 19 Verified Google Reviews

---

## 🎨 Design System & Visual Identity

- **Primary Brand Red**: `#E10600` (CTAs, active highlights, badges, numbers)
- **Deep Architectural Black**: `#111111`
- **Charcoal**: `#1C1C1C`
- **Soft Off-White**: `#F7F7F5`
- **Pure White**: `#FFFFFF`
- **Light Gray**: `#E9E9E7`
- **Visual Ratio**: 70% white/off-white, 20% black/charcoal, 10% red accent.
- **Typography**: `Plus Jakarta Sans` / `Manrope` for bold editorial headlines; `Inter` for clean body copy.

---

## ✨ Features

1. **Sticky Header & Mobile Drawer**: Transparent hero navbar transitioning into frosted solid white on scroll, with active scroll-spy section tracker and animated mobile hamburger drawer.
2. **Cinematic Hero**: Fullscreen modern architectural residence with twilight lighting, badge, animated headline, and scroll indicator.
3. **About Studio**: Editorial asymmetric layout featuring the architect's philosophy, listening-first approach, and Google 4.5★ reviews banner.
4. **Services (01–04)**:
   - 01 Residential Design
   - 02 Commercial Design
   - 03 Civil Contractor Services
   - 04 Joint Venture (JV) Services
5. **Interactive Portfolio & Lightbox**: Category filtering (`ALL`, `RESIDENTIAL`, `COMMERCIAL`, `CIVIL CONSTRUCTION`, `3D VISUALIZATION`), masonry grid, and rich project detail lightbox modal with direct WhatsApp inquiry integration.
6. **Process Roadmap**: 4-step connected architectural timeline with progress markers.
7. **Client Testimonials**: Verified demo feedback from homeowners and commercial clients.
8. **Contact Hub & Map**: Form validation, direct WhatsApp message prefill, and Karachi studio Google Maps locator.
9. **Dynamic Attention WhatsApp Widget**:
   - Continuous radar ripple & notification badge (`1`).
   - Periodic 7-second attention wiggle/bounce.
   - Auto-popup lead card with one-tap inquiry prompt chips.
10. **"Start Your Project" Consultation Modal**: Quick estimate popup accessible from all major CTAs.

---

## 🚀 Getting Started

### Run Locally:
```bash
# Start with Node.js built-in static server
node server.js

# Or open index.html directly in any modern browser
```

The website will be live at `http://localhost:3000`.

---

## 📁 File Structure

```
├── index.html                  # Semantic, SEO-rich single-page HTML5 application
├── server.js                   # Lightweight Node.js local development server
├── css/
│   ├── design-system.css       # Color tokens, typography, grid utilities, buttons
│   ├── animations.css          # Keyframes, scroll-reveals, WhatsApp attention pulses
│   └── main.css                # Layouts, modals, lightbox, map, responsive breakpoints
├── js/
│   ├── app.js                  # Main controller, navigation, dynamic WhatsApp manager
│   ├── portfolio.js            # Portfolio dataset, category filters, lightbox modal
│   ├── animations.js           # IntersectionObserver reveals, stat counters, parallax
│   └── form.js                 # Contact validation & WhatsApp message builder
└── assets/
    └── icons/
        ├── brand-logo.svg       # Transparent architectural vector logo (light theme)
        └── brand-logo-white.svg # Transparent architectural vector logo (dark theme)
```

---

## 📄 License & Copyright

© 2026 Architecture Interior Design. All Rights Reserved.
