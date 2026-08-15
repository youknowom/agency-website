<p align="center">
  <img src="./agency-website/public/favicon.png" alt="WebCraft Logo" width="80" height="80" />
</p>

<h1 align="center">WebCraft Studio</h1>

<p align="center">
  <strong>Turn your ideas into digital reality.</strong><br />
  A modern, high-performance digital agency website engineered with React, Vite, and Tailwind CSS.
</p>

<p align="center">
  <a href="https://web-craft-omkar.vercel.app/" target="_blank"><strong>🌐 Live Demo</strong></a> •
  <a href="#-preview--snapshots">Preview</a> •
  <a href="#-key-features">Key Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-getting-started">Getting Started</a>
</p>

---

## 📸 Preview & Snapshots

<p align="center">
  <img src="./agency-website/public/websitesnapshot-one.png" alt="WebCraft Hero & Digital Canvas" width="100%" />
</p>

<p align="center">
  <img src="./agency-website/public/websitesnapshot-two.png" alt="WebCraft Services & Process Timeline" width="100%" />
</p>

<p align="center">
  <img src="./agency-website/public/websitesnapshot-three.png" alt="WebCraft Selected Work & Case Studies" width="100%" />
</p>

---

## ✨ Key Features

- **Interactive Digital Canvas (Hero)**: Ambient canvas grid with real-time cursor glow, pulsing nodes, and traveling light signals.
- **Infinite Keyword Marquee**: Smooth animated typographical ticker highlighting core disciplines.
- **Editorial Capability List**: Clean numbered service rows (`01 — 06`) with hover interactions.
- **Connected Process Timeline**: `01 → 02 → 03 → 04` roadmap with integrated numbering and active accents.
- **Asymmetric Case Studies**: Alternating layout showcase highlighting live projects with direct preview links.
- **Split "Why WebCraft" Section**: Sticky left heading with vertical differentiator list.
- **Theme Support**: Seamless Dark and Light mode switching with persistent user preference.
- **Sharp Modern Aesthetics**: Restrained 8px–12px border radii, precision 1px borders, and orange accent palette.
- **Fully Responsive**: Mobile-first design with fluid typography and adaptive layouts.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Variables |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (Simple Icons, Font Awesome 6) |
| **Interactive Canvas** | Native HTML5 Canvas API + `requestAnimationFrame` |

---

## 📁 Project Structure

```text
agency-website/
├── public/
│   ├── favicon.png                  # Brand icon / logo
│   ├── websitesnapshot-one.png      # Hero & Canvas snapshot
│   ├── websitesnapshot-two.png      # Process & Services snapshot
│   └── websitesnapshot-three.png    # Case Studies snapshot
├── src/
│   ├── assets/                      # Project thumbnails and local media
│   ├── components/
│   │   ├── Button.jsx               # Universal button component
│   │   ├── FAQ.jsx                  # Interactive accordion
│   │   ├── Footer.jsx               # Site footer
│   │   ├── Hero.jsx                 # Hero section with typography & marquee
│   │   ├── InteractiveGrid.jsx      # Ambient Canvas grid background
│   │   ├── Navbar.jsx               # Floating glassmorphism navigation
│   │   ├── ProjectShowcase.jsx      # Asymmetric case study showcase
│   │   ├── ServiceList.jsx          # Editorial numbered capabilities list
│   │   └── WLogo.jsx                # Vector brand logo component
│   ├── context/
│   │   └── ThemeContext.jsx         # Dark / Light theme provider
│   ├── data/
│   │   ├── faqs.js                  # FAQ items
│   │   ├── projects.js              # Live project data
│   │   └── services.js              # Service definitions
│   ├── pages/
│   │   ├── About.jsx                # Studio pillars & story
│   │   ├── Contact.jsx              # Inquiry form & direct details
│   │   ├── Home.jsx                 # Primary landing page
│   │   ├── Projects.jsx             # Dedicated case studies page
│   │   └── Services.jsx             # Dedicated services page
│   ├── App.jsx                      # App root with router
│   └── index.css                    # Design tokens & base styles
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/youknowom/agency-website.git
   cd agency-website/agency-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📄 License

This project is licensed under the MIT License.
