// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', to: '/about' },
    { label: 'Art', to: '/art' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Mentors', to: '/testimonials' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-[#9C4231] text-xl md:text-2xl font-bold tracking-wide font-serif"
        >
          Aaditya Ranavaya
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-[#3C2C21] font-medium">
          {navItems.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="hover:text-[#E37028] transition"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#9C4231]">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-4/5 h-screen bg-[#F8F3EC] text-[#3C2C21] flex flex-col px-6 py-8 z-40 md:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-6 text-lg font-medium">
              {navItems.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#E37028]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
