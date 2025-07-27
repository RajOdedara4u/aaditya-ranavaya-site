// Aaditya Ranavaya Portfolio - Full Setup
// Entry Point: App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Art from './pages/Art';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait until all assets are loaded
    window.addEventListener('load', () => {
      setLoading(false);
    });

    // Safety fallback (in case load event doesn't trigger properly)
    const timeout = setTimeout(() => setLoading(false), 3000);

    return () => {
      window.removeEventListener('load', () => setLoading(false));
      clearTimeout(timeout);
    };
  }, []);

  if (loading) {
    return <Loader />; // Full-screen loader until site loads
  }

  return (
    <Router>
      <div className="font-serif bg-white text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
