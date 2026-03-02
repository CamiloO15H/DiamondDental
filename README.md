# 💎 Diamond Dental Clinic — High-Precision Dental Engineering

[![Production CI](https://github.com/CamiloO15H/DiamondDental/actions/workflows/production.yml/badge.svg)](https://github.com/CamiloO15H/DiamondDental/actions/workflows/production.yml)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?logo=framer)](https://www.framer.com/motion/)

Welcome to the digital sanctuary of **Diamond Dental Clinic**, where clinical precision meets aesthetic excellence. This is a high-end web application developed with a "Diamond" aesthetic: Matte Black, Gold accents, and Glassmorphism.

---

## 🎨 Design Philosophy: The Diamond Aesthetic

The project adheres to a strict visual language designed to evoke luxury, trust, and precision:
- **Palette**: `#0d0d0d` (Matte Black), `#ffffff` (Pure White), and Metallic Gold gradients.
- **Glassmorphism**: Extensive use of `backdrop-blur` and semi-transparent layers for a modern, premium feel.
- **Animations**: Powered by **Framer Motion** (`LazyMotion` for performance), featuring smooth scroll reveals, parallax effects, and liquid transitions.

---

## 🏗️ Architecture: Screaming & Sustainable

We follow **Screaming Architecture** principles to ensure the codebase is self-descriptive and highly maintainable:

- **Core**: Internationalization (i18n), theme configuration, and global types.
- **Features**: Domain-driven directories (Landing, Services, Gallery, Legal) containing their own components and hooks.
- **Shared**: Reusable UI components (Navbar, Footer, Buttons) and utility functions.
- **Services**: External integrations (WhatsApp, Booking) using the **Adapter Pattern**.

### Server/Client Boundary
All pages are optimized using Next.js 14 App Router standards:
- **Server Components**: Handle SEO, dynamic metadata generation, and initial data fetching.
- **Client Components**: Handle interactive logic, Framer Motion animations, and complex state.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Vanilla CSS Modules
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **i18n**: [next-intl](https://next-intl-docs.vercel.app/) (Full English/Spanish support)
- **Icons**: [Lucide React](https://lucide.dev/)
- **CI/CD**: GitHub Actions + Vercel

---

## 🌍 Internationalization (i18n)

The application supports **English (EN)** and **Spanish (ES)** out of the box. 
- Zero hardcoded strings in the UI.
- Translations managed via `/messages/*.json`.
- Dynamic routing with language detection.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm / yarn

### Installation
```bash
git clone https://github.com/CamiloO15H/DiamondDental.git
cd diamond-dental
npm install
```

### Environment Setup
Create a `.env.local` file based on `.env.example`:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-google-app-password
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

---

## 🧪 Quality Standards

We maintain a **100/100** score in **React Doctor** benchmarks:
- Proper `LazyMotion` implementation.
- Optimized Image rendering (`next/image`).
- Passive event listeners for scroll performance.
- Clean separation of concerns.

---

## 📄 License & Legal

This project is the intellectual property of **Diamond Dental Clinic**.
- [Terms & Conditions](https://diamonddental.com/terminos)
- [Privacy Policy](https://diamonddental.com/privacidad)

---

Developed with ❤️ and precision for **Diamond Dental**.
