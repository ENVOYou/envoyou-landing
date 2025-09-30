# 🚀 Envoyou SEC API Landing Page

A modern, responsive, single-page marketing website for the Envoyou SEC Climate Disclosure compliance platform. Built with React, Vite, and Tailwind CSS.

---

![License](https://img.shields.io/badge/license-BSL--1.1-blue.svg)
![React](https://img.shields.io/badge/React-19-blue.svg)
![Vite](https://img.shields.io/badge/Vite-Latest-green.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-blue.svg)

## ✨ [Live Demo](https://envoyou.com/)

## Core Features

- **Single-Page Design:** A focused, long-scrolling homepage that guides the user through the product.
- **Responsive Layout:** Fully responsive design that works on all screen sizes, from mobile to desktop.
- **Interactive Calculator:** An interactive demo of the SEC Emissions Calculator to engage users.
- **Dynamic Content Sections:** Includes sections for Features, How It Works, Pricing, Testimonials, and a FAQ.
- **Optimized for Performance:** Built with Vite for a fast development experience and optimized production builds.

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Routing:** [React Router](https://reactrouter.com/)

## Project Structure

The project follows a standard Vite + React structure, with key directories organized as follows:

```text
src/
├── components/       # Reusable UI components (Button, Header, Footer, etc.)
├── pages/            # Page components (HomePage, legal pages)
│   └── legal/        # Privacy Policy and Terms of Service
├── services/         # API service logic
├── styles/           # Global styles and color guidelines
├── App.jsx           # Main app component with routing
└── main.jsx          # Application entry point
public/               # Static assets (images, sitemap.xml, etc.)
```

## 🚀 Getting Started

### Prerequisites

- Node.js version 18.x or higher
- npm (or a compatible package manager like yarn or pnpm)

### Installation & Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ENVOYou/envoyou-landing.git
    cd envoyou-landing
    ```

1. **Install dependencies:**

    ```bash
    npm install
    ```

1. **Run the development server:**

    ```bash
    npm run dev
    ```

This will start the development server, typically at `http://localhost:5173`.

## 🛠️ Available Scripts

- `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles and bundles the application for production into the `dist/` directory.
- `npm run preview`: Serves the production build locally to preview it before deployment.
- `npm run lint`: Lints the codebase using ESLint to check for errors and style issues.

## 🚀 Deployment

This project is configured for seamless deployment to [Netlify](https://www.netlify.com/).

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

The deployment configuration is managed in the `netlify.toml` file. Pushing to the `main` branch will automatically trigger a new deployment.

## 📄 License

This project is licensed under the Business Source License 1.1 (BSL-1.1).

- **Non-commercial use:** Allowed for research, testing, and evaluation.
- **Commercial use:** Requires a separate commercial agreement.

See the [LICENSE](LICENSE) file for complete terms.
