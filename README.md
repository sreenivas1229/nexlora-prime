# Nexlora Prime Technologies — React Website

## 📁 Project Structure

```
nexlora-prime/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       ← Top navigation with theme toggle
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx       ← Footer with links + WhatsApp float
│   │   │   └── Footer.css
│   │   └── sections/
│   │       ├── Hero.jsx         ← Home page hero section
│   │       └── Hero.css
│   ├── pages/
│   │   ├── Home.jsx             ← Homepage
│   │   ├── Home.css
│   │   ├── Services.jsx         ← Services page
│   │   ├── Services.css
│   │   ├── Portfolio.jsx        ← Portfolio with filter
│   │   ├── Portfolio.css
│   │   ├── About.jsx            ← About page
│   │   ├── About.css
│   │   ├── Contact.jsx          ← Contact form with Formspree
│   │   └── Contact.css
│   ├── hooks/
│   │   ├── useTheme.js          ← Light/dark mode hook
│   │   └── useScrollTop.js      ← Scroll detection hook
│   ├── styles/
│   │   └── globals.css          ← CSS variables, reset, utilities
│   ├── App.jsx                  ← Router + layout
│   └── index.js                 ← Entry point
└── package.json
```

## ▶️ How to Run

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Go to vercel.com → Import project
3. Select your repo → Deploy
4. Add custom domain: nexloraprime.com

## 📧 Contact Form

Already connected to Formspree: `https://formspree.io/f/mbdabyrw`
Submissions go to: hello.nexloraprime@gmail.com
## 🎨 Customization

- Colors: Edit `src/styles/globals.css` CSS variables
- Content: Edit individual page files in `src/pages/`
- Contact: Update phone/email in `Footer.jsx` and `Contact.jsx`

## 🔧 Tech Stack

- React 18
- React Router v6
- CSS Modules (component-scoped)
- Google Fonts: Syne + DM Sans
- Formspree (contact form)
