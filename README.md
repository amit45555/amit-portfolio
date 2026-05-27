# Amit Nagpure - Premium Developer Portfolio (v3.0)

A world-class, premium, and futuristic developer portfolio designed and engineered for **Amit Nagpure**. Built utilizing **React.js**, **Tailwind CSS**, and **Framer Motion**, this portfolio is fully recruiter-focused, showcasing 3+ years of experience in MERN stack development, real-time industrial telemetry dashboards, high-frequency integrations (OPCUA), and Windows IIS / PM2 enterprise deployments.

---

## 🚀 Key Visual & Functional Features

1. **Cyberpunk-Obsidian Dark Mode & Apple-Clean Light Mode**: Silky-smooth theme transitions with persistent state tracking stored in `localStorage`.
2. **HTML5 Canvas Particle Background**: High-performance connected node networks responding dynamically to theme states and cursor movements, operating at 60fps with minimal CPU overhead.
3. **Cursor spotlight Glowing Cards**: Adaptive radial glowing spotlight overlays tracking mouse movements over card elements.
4. **Live GitHub Integrations**: Dynamic profile telemetry (followers, repo metrics) and stars-sorted project fetching directly from the GitHub REST API.
5. **Interactive GitHub Heatmap Activity**: A custom analytics-style Git contribution calendar highlighting active development cycles.
6. **Animated Numeric Counters**: Tabular statistics (uptime, experience years, system loads) counting upwards upon scrolling into the viewport.
7. **Typewriter Terminal Tags**: Seamless typing carousels highlighting engineering specialties.
8. **Systems Modal Deep-Dives**: Detailed layout modals with responsive metadata grids, telemetry specs, and feature bullet layouts for major projects.
9. **Scroll Progress & Scroll-to-Top**: Spring-animated progress trackers and float snapping navigation triggers.
10. **Validation-Ready Contact Form**: EmailJS-integrated messaging system with instant visual alerts and form resets.

---

## 🛠 Tech Stack

- **Core Framework**: React (Vite template base)
- **Styling**: Tailwind CSS (with glassmorphism and custom animation utilities)
- **Animations**: Framer Motion
- **Icons**: Lucide Icons & Custom inline SVG wrappers
- **Form Emitter**: `@emailjs/browser`
- **Dynamic Data**: GitHub REST API

---

## 📂 Modular Folder Structure

The directory is clean, scalable, and adheres to standard enterprise practices:

```text
amit-portfolio/
├── dist/                          # Production compiled distribution assets
├── public/
│   └── resume.pdf                 # Resume download asset
├── src/
│   ├── components/                # Reusable UI systems
│   │   ├── Card.jsx               # Glassmorphic spotlight wrapper
│   │   ├── Counter.jsx            # Dynamic statistic counter
│   │   ├── MouseSpotlight.jsx     # Mouse cursor hover coordinate tracer
│   │   ├── Navbar.jsx             # Scroll-direction auto-hide navigation
│   │   ├── ParticleBackground.jsx # HTML5 Canvas-based background engine
│   │   ├── ScrollProgress.jsx     # Spring-based top scroll loader
│   │   └── ScrollToTop.jsx        # Float-action top snap button
│   ├── context/
│   │   └── ThemeContext.jsx       # Theme state manager & listener hooks
│   ├── data/
│   │   └── portfolioData.js       # Structured JSON dataset for skills and history
│   ├── sections/                  # Main landing page modules
│   │   ├── About.jsx              # Highlights, summary, and industrial focus
│   │   ├── Certifications.jsx     # Credentials grids
│   │   ├── Contact.jsx            # Form panels & EmailJS emitters
│   │   ├── Experience.jsx         # Glowing step career timeline
│   │   ├── Footer.jsx             # Social links & copyright
│   │   ├── GitHubStats.jsx        # GitHub API metrics & contribution grids
│   │   ├── Hero.jsx               # Typing taglines, counters, and welcome tags
│   │   └── Projects.jsx           # Tab-filtered systems & deep-dive modals
│   ├── App.jsx                    # Root assembler & terminal pre-loaders
│   ├── index.css                  # Google Fonts, glass utilities, & scrollbars
│   └── main.jsx                   # React mounting script
├── index.html                     # SEO optimized main template (Meta Tags)
├── postcss.config.js              # PostCSS module configurations
├── tailwind.config.js             # Theme tokens and custom animations
├── vite.config.js                 # Vite bundler configurations
└── package.json                   # Dependencies lists
```

---

## ⚙️ Installation & Local Dev Setup

Follow these simple steps to run the portfolio locally:

### 1. Pre-requisites
Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

### 2. Clone/Move into Folder
Open your terminal and navigate to the project directory:
```bash
cd amit-portfolio
```

### 3. Install Dependencies
Restore all dependencies (Vite, React, Framer Motion, Tailwind, Lucide, EmailJS):
```bash
npm install
```

### 4. Run Development Server
Boot up the local dev server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Compile Production Bundle
Build highly-optimized assets into the `dist` folder:
```bash
npm run build
```

---

## 📬 Activating EmailJS

To receive contact form submissions directly in your email inbox:
1. Register on [EmailJS](https://www.emailjs.com/).
2. Link an email service (e.g., Gmail) to obtain a **Service ID**.
3. Create an email template (capturing `name`, `email`, `subject`, and `message` tags) to obtain a **Template ID**.
4. Open the [Contact.jsx](file:///C:/Users/Amit/.gemini/antigravity/scratch/amit-portfolio/src/sections/Contact.jsx) file.
5. Search for `YOUR_EMAILJS_` variables (Lines 43-45) and replace them with your actual values:
```javascript
const serviceId = "YOUR_EMAILJS_SERVICE_ID"; 
const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
const publicKey = "YOUR_EMAILJS_PUBLIC_KEY";
```

---

## 🚀 Production Deployment Guide

### Option 1: Vercel (Recommended)
Vercel is the easiest and most performant serverless cloud platform for Vite React builds:
1. Register/Login on [Vercel](https://vercel.com).
2. Install Vercel CLI locally (optional) or link your GitHub Repository.
3. If using GitHub integration, click **Add New Project**, select `amit-portfolio`.
4. Configure these build metrics:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will provision an SSL certificate and deliver your portfolio globally via CDN.

### Option 2: Netlify
Netlify is an excellent alternative:
1. Log in to [Netlify](https://www.netlify.com).
2. Select **Import an existing project** from Git or choose **Deploy manually** by dragging the `dist` folder.
3. If syncing via Git, use:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Site**.

### Option 3: PM2 (Process Manager for Host Server Node environments)
If running a self-hosted custom server:
1. Install PM2 globally: `npm install pm2 -g`.
2. Install a simple static server (like `serve`): `npm install serve -g`.
3. Start the static server cluster:
```bash
pm2 start "serve -s dist -p 3000" --name "portfolio"
```
4. Save PM2 startup states: `pm2 save`.

### Option 4: IIS (Internet Information Services - Windows Server)
For enterprise-level deployment under Windows Server:
1. Build the production assets locally: `npm run build`.
2. Copy the contents of the `dist` folder into `C:\inetpub\wwwroot\portfolio`.
3. Open **IIS Manager**, right-click **Sites**, and select **Add Website**.
4. Set the **Site name** as `Portfolio`, and set the **Physical path** to `C:\inetpub\wwwroot\portfolio`.
5. Specify the port (e.g., `80` or `8080`) and click **OK**.
6. Ensure that **URL Rewrite** is installed in IIS to support dynamic client routers (add a standard `web.config` file inside `dist` mapping fallback rewrites to `index.html` if needed).
