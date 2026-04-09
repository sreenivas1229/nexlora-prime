// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar  from './components/layout/Navbar';
import Footer  from './components/layout/Footer';
import Home      from './pages/Home';
import Services  from './pages/Services';
import Portfolio from './pages/Portfolio';
import About     from './pages/About';
import Contact   from './pages/Contact';
import { useTheme } from './hooks/useTheme';
import './styles/globals.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTop />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/services"  element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about"     element={<About />} />
        <Route path="/contact"   element={<Contact />} />
        <Route path="*"          element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
