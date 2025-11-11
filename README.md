# OmaBox Landing Page

A modern, high-converting landing page for OmaBox - a professional boxing coach booking platform founded by Coach Omar Mohamed.

## Features

- 🥊 **Professional Boxing Coaches** - Book certified coaches to train at your location
- 📱 **Mobile App Integration** - iOS and Android apps for easy booking
- 🌍 **Bilingual Support** - Full Arabic and English language support
- 🎨 **Modern Design** - Energetic, professional aesthetic with smooth animations
- 💳 **Multiple Payment Methods** - Paymob, Vodafone Cash, Orange Cash, InstaPay
- ⭐ **Coach Profiles** - Detailed profiles with ratings, experience, and specialties
- 💰 **Flexible Pricing** - Multiple packages from single sessions to monthly subscriptions

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Router** for navigation

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/        # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Coaches.tsx
│   ├── Benefits.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── About.tsx
│   ├── AppDownload.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── context/          # React context providers
│   └── LanguageContext.tsx
├── data/             # Static data
│   └── index.ts
├── types/            # TypeScript types
│   └── index.ts
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Sections

1. **Navigation** - Sticky navbar with language toggle and CTA
2. **Hero** - Powerful headline with background and animated stats
3. **How It Works** - 3-step process explanation
4. **Coaches** - Grid of featured boxing coaches
5. **Benefits** - Why choose OmaBox
6. **Pricing** - Four pricing tiers with features
7. **Testimonials** - Customer reviews slider
8. **About** - Founder's story and credentials
9. **App Download** - Mobile app CTAs
10. **FAQ** - Accordion of common questions
11. **Footer** - Links, contact info, and social media

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: { ... },  // Main brand color (red)
  dark: { ... },     // Dark tones
}
```

### Content

All content is in `src/data/index.ts` and includes both English and Arabic translations.

### Images

Replace placeholder images with your own:
- Coach photos
- Testimonial photos
- Hero background
- Founder photo

## SEO & Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Meta tags for social sharing
- ✅ Structured data for search engines
- ✅ Responsive design (mobile-first)

## Payment Integration

The landing page includes placeholders for:
- Paymob
- Vodafone Cash
- Orange Cash
- InstaPay

## Deployment

Build the project:

```bash
npm run build
```

The `dist` folder contains the production-ready files. Deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 OmaBox. All rights reserved.

## Contact

For questions about this landing page, contact Coach Omar Mohamed at info@omabox.com
