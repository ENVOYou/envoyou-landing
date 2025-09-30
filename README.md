# 🚀 Envoyou SEC API Landing Page

A modern, high-performance React landing page for the Envoyou SEC Climate Disclosure compliance API, built with Vite and optimized for production with **full FastAPI backend integration**.

![License](https://img.shields.io/badge/license-BSL--1.1-blue.svg)
![React](https://img.shields.io/badge/React-19-blue.svg)
![Vite](https://img.shields.io/badge/Vite-Latest-green.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-blue.svg)

## Features

### **Core Features**
- **Modern React 19** with Vite for lightning-fast development
- **Tailwind CSS v4** for beautiful, responsive design
- **AOS (Animate On Scroll)** for smooth scroll animations
- **Chart.js Integration** for data visualizations
- **React Router** for seamless navigation
- **🔄 Full Backend Integration** - Connected to FastAPI backend with real data
- **🔑 Demo API Key System** - Instant access to real environmental data
- **📊 Real-time API Testing** - Built-in API tester with connection monitoring

### ⚡ **Performance Optimizations**
- **Lazy Loading** - Components load only when needed
- **Code Splitting** - Optimized bundle chunks for better caching
- **Error Boundaries** - Graceful error handling with user-friendly UI
- **Optimized Build** - Production-ready with source maps

### 🔍 **SEO & Accessibility**
- **Structured Data (JSON-LD)** for rich search results
- **Open Graph & Twitter Cards** for social sharing
- **ARIA Labels & Keyboard Navigation** for accessibility
- **Canonical URLs** and meta tags for SEO
- **DNS Prefetching** for faster resource loading

### 📊 **Analytics Ready**
- **Google Analytics 4** integration
- **Custom Event Tracking** setup
- **Performance Monitoring** configuration

### 🌐 **Backend Integration Features**
- **🔍 SEC Emissions Calculator** - Scope 1 & 2 GHG emissions calculation
- **📈 EPA Cross-Validation** - Automatic comparison against EPA data with confidence scoring
- **🌍 SEC Export Package** - Generate complete SEC filing packages (Excel-ready)
- **🎯 Demo API Keys** - Instant access without registration
- **📡 Connection Status** - Real-time backend monitoring
- **🔧 API Testing Tools** - Built-in endpoint testing interface

## 🎯 **From Zero to Filing-Ready in 5 Steps**

**Traditional Process:** 2-3 weeks of manual work  
**With Envoyou:** 2-3 hours automated workflow

1. **Input:** Company data (fuel, electricity)
2. **Validate:** Automatic EPA cross-validation with confidence scores (0-100)
3. **Review:** Clear deviation flags and actionable recommendations
4. **Audit:** Immutable trail with source documentation
5. **Export:** SEC-ready package (JSON/CSV/Excel)

**Result:** Audit-ready filing package with quantified confidence assessment

## 🎯 **Confidence Scoring System**

**Built for CSOs who need quantified risk assessment:**

- **High Confidence (80-100):** "Data appears reliable for SEC filing"
- **Medium Confidence (60-79):** "Review recommended before SEC filing"  
- **Low Confidence (0-59):** "Manual verification required before SEC filing"

**Every calculation includes:**
- Numerical confidence score (0-100)
- Risk level assessment (High/Medium/Low)
- Specific recommendations for next steps
- EPA deviation analysis with thresholds

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ENVOYou/envoyou-landing.git
   cd envoyou-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Start FastAPI Backend** (Required for full functionality)
   ```bash
   # Make sure FastAPI backend is running on http://localhost:8000
   # Backend should have the demo API key endpoint: /admin/request-demo-key
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:5173
   ```

7. **Get Demo API Key**
   - Click the floating API status button (bottom-right)
   - Use "Get Demo API Key" to access real data
   - Test all endpoints with real environmental data

## 📁 Project Structure

```
src/
├── components/
│   ├── ErrorBoundary.jsx         # Error handling component
│   ├── Header.jsx               # Navigation header
│   ├── Footer.jsx               # Site footer
│   ├── FeaturesSection.jsx      # Features showcase
│   ├── PricingSection.jsx       # Pricing plans
│   ├── CodeExampleSection.jsx   # API examples
│   ├── VisualizationsSection.jsx # Data charts
│   ├── CevsLookupSection.jsx    # CEVS lookup tool (connected to backend)
│   ├── APITester.jsx            # Real-time API testing interface
│   ├── DemoKeyManager.jsx       # Demo API key management
│   ├── ScrollToTop.jsx          # Auto scroll-to-top on navigation
│   └── BackToTop.jsx            # Back to top button
├── pages/
│   ├── HomePage.jsx             # Main landing page
│   ├── AboutPage.jsx            # About us page
│   ├── ContactPage.jsx          # Contact page
│   └── FreeAPIKeyPage.jsx       # API key registration
├── services/
│   └── apiService.js            # Backend API integration service
├── App.jsx                      # Main app component
└── main.jsx                     # App entry point
```

## � Backend Integration

### Features
- **🔄 Real-time Data**: Connected to FastAPI backend with live environmental data
- **🎯 Demo API Keys**: Get instant access without registration
- **📊 Connection Monitor**: Real-time backend status indicator
- **🧪 API Testing**: Built-in testing interface for all endpoints

### API Endpoints Available
- **Health Check**: `/health` - No authentication required
- **Emissions Calculate**: `/v1/emissions/calculate` - Scope 1 & 2 emissions calculation
- **EPA Validation**: `/v1/validation/epa` - Cross-validate against EPA data
- **SEC Export**: `/v1/export/sec/package` - Generate SEC filing package
- **Demo Keys**: `/admin/request-demo-key` - Get temporary API access

### Getting Started with API
1. **Start the application** - Frontend connects automatically
2. **Click API status button** - Green circle in bottom-right corner
3. **Get Demo API Key** - Click "Get Demo API Key" button
4. **Test endpoints** - Use built-in testing interface
5. **Try SEC calculator** - Calculate emissions with audit trail

### API Response Examples

#### SEC Emissions Calculation Response
```json
{
  "status": "success",
  "company": "Demo Corp",
  "totals": {
    "emissions_kg": 303520.0,
    "emissions_tonnes": 303.52
  },
  "components": {
    "scope1_co2e_kg": 53020.0,
    "scope2_co2e_kg": 250500.0
  },
  "confidence_analysis": {
    "score": 95,
    "level": "high",
    "recommendation": "Complete Scope 1 & 2 data - ready for SEC filing"
  },
  "audit_trail_id": "audit_123456789"
}
```

#### EPA Validation with Confidence Scoring
```json
{
  "status": "success",
  "validation": {
    "confidence_score": 75,
    "confidence_level": "medium",
    "recommendation": "Review recommended before SEC filing",
    "matches_found": 2,
    "flags_count": 1
  },
  "epa": {
    "matches_count": 2,
    "sample": ["facility_data"]
  },
  "flags": [
    {
      "code": "low_match_density",
      "severity": "medium",
      "message": "Low EPA match density - review recommended"
    }
  ]
}
```

#### Demo API Key Response
```json
{
  "status": "success",
  "data": {
    "api_key": "ae21b9776a23b7e7fa28856dd9810544",
    "client_name": "Demo User",
    "tier": "basic",
    "requests_per_minute": 30
  }
}
```

## �🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

Create a `.env` file with:

```env
# Backend API Configuration
VITE_API_URL=https://api.envoyou.com
VITE_API_KEY=your_production_api_key

# Analytics
VITE_GA_TRACKING_ID=G-YOUR-GA4-ID

# App Settings
VITE_APP_NAME=Envoyou
VITE_APP_DESCRIPTION=SEC Climate Disclosure Compliance API
```

### Backend Integration

This frontend is designed to work with the FastAPI backend. Make sure:

1. **Backend Running**: FastAPI server at `https://api.envoyou.com`
2. **Demo Endpoint**: `/admin/request-demo-key` available
3. **CORS Enabled**: Frontend origin allowed
4. **All Endpoints**: Health, CEVS, Emissions, ISO data available

#### Quick Backend Test
```bash
# Test if backend is running
curl https://api.envoyou.com/health

# Test demo API key endpoint
curl -X POST https://api.envoyou.com/admin/request-demo-key \
  -H "Content-Type: application/json" \
  -d '{"client_name":"Test User"}'
```

### Google Analytics Setup

1. Replace `G-XXXXXXXXXX` in `index.html` with your GA4 ID
2. Update the tracking configuration as needed

## 🎨 Customization

### Colors & Branding
- Primary: Emerald (`emerald-500`)
- Background: Dark slate (`slate-900`)
- Accent: Sky blue (`sky-300`)

### Animations
- AOS library configured with:
  - Duration: 1200ms
  - Offset: 100px
  - Once: true (animations trigger once)

## 📈 Performance Features

### Lazy Loading
Components are lazy-loaded for better initial page load:
```jsx
const HeroSection = lazy(() => import('../components/HeroSection'));
```

### Error Boundaries
Graceful error handling prevents app crashes:
```jsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

### Bundle Optimization
Automatic code splitting and chunk optimization for production builds.

## 🔍 SEO Features

### Structured Data
JSON-LD schema for better search engine understanding:
- SoftwareApplication schema
- Organization information
- Feature lists

### Meta Tags
Comprehensive meta tags for:
- Search engines
- Social media sharing
- Browser optimization

## ♿ Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management
- Screen reader friendly

## 📊 Analytics & Monitoring

### Google Analytics 4
- Page view tracking
- Custom event tracking setup
- Performance monitoring

### Error Tracking
- Console error logging
- Development error details
- Production error boundaries

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Hosting
The `dist/` folder contains all files needed for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🚀 Deployment to Netlify

### Automatic Deployment

1. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18.17.0 (matches `.nvmrc`)

3. **Environment Variables** (Optional)
   - Add any variables from `.env.example` in Netlify dashboard

4. **Deploy**
   - Netlify will automatically build and deploy on git push
   - Your site will be live at `https://your-site-name.netlify.app`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   ```bash
   npx netlify-cli deploy --prod --dir=dist
   ```

### SEO & Performance Features

- ✅ **robots.txt** - Search engine crawling rules
- ✅ **sitemap.xml** - Site structure for search engines
- ✅ **_redirects** - SPA routing support
- ✅ **_headers** - Security headers and caching
- ✅ **netlify.toml** - Build configuration
- ✅ **Optimized chunks** - Better caching strategy
- ✅ **Gzip compression** - Faster loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the Business Source License 1.1 (BSL-1.1).

- **Non-commercial use**: Allowed for research, testing, and evaluation
- **Commercial use**: Requires separate commercial agreement
- **Change Date**: 2048-01-01 (converts to Apache 2.0)
- **Commercial licensing**: Contact [husnikusuma00@envoyou.com](mailto:husnikusuma00@envoyou.com)

See the [LICENSE](LICENSE) file for complete terms.

## � Additional Documentation

- **[Backend Integration Guide](./BACKEND_INTEGRATION.md)** - Detailed integration setup
- **[PWA Features](./PWA_README.md)** - Progressive Web App functionality
- **API Documentation** - Available in the app at `/documentation`

## �📞 Support

- **General Support**: hello@envoyou.com
- **Business Inquiries**: husnikusuma@envoyou.com
- **Website**: https://envoyou.com
- **GitHub Issues**: For bug reports and feature requests
- **API Documentation**: Available at `/documentation` or `https://api.envoyou.com/docs`
- **Backend Status**: Real-time monitoring via floating status indicator

## 🎯 Quick Demo

1. **Start backend**: `FastAPI server at https://api.envoyou.com`
2. **Start frontend**: `npm run dev`
3. **Get demo key**: Click green button → "Get Demo API Key"
4. **Test SEC calculator**: Calculate Scope 1 & 2 emissions
5. **Explore real data**: EPA validation and SEC export packages

---

## Contact
Maintained by [Husni Kusuma](https://github.com/hk-dev13)  
🌐 Website: [envoyou.com](https://envoyou.com)  
📧 Business: [husnikusuma@envoyou.com](mailto:husnikusuma@envoyou.com)  
📧 Support: [hello@envoyou.com](mailto:hello@envoyou.com)  

---
> <p style="text-align: center;">© 2025 <a href="https://envoyou.com">Envoyou</a> | All Rights Reserved</p>
> <p style="text-align: center;">Empowering SEC Climate Disclosure Compliance</p>
