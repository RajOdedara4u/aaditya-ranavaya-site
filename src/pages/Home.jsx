import React from 'react';
import IntroSection from '../components/IntroSection';
import YoutubeVideos from '../components/YoutubeVideos';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import A4 from "../assets/A4.jpg"
export default function Home() {
  return (
    <>
      <section className="relative pt-10 min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden bg-[#F8F3EC] text-[#3C2C21]">
        {/* Spotlight effect */}
        <div className="absolute inset-0 bg-radial-light pointer-events-none z-0" />

        {/* Floating particles in golden color */}
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#C9A03C]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [Math.random() * 800, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Profile image with glow */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 w-48 h-48 rounded-full blur-2xl bg-[#C9A03C] opacity-20 animate-ping" />
          <img
            src={A4}
            alt="Aaditya Ranavaya"
            className="w-48 h-48 object-cover object-top rounded-full border-4 border-[#E37028] relative z-10"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl font-display font-bold mt-6 mb-2 z-10 text-[#5C3A2E]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Voice of Folk – Aaditya Ranavaya
        </motion.h1>

        {/* Description */}
        <motion.p
          className="max-w-xl mt-4 text-lg font-light z-10 text-[#6E5C3B]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Charani Sahityakar and folk storyteller from Gujarat, echoing the soul of tradition.
        </motion.p>

        {/* Explore button */}
        <Link to="/art" className="z-10">
          <motion.button
            className="mt-8 bg-[#E37028] text-white px-6 py-2 rounded-full shadow hover:bg-[#D95C1A]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Explore My Work
          </motion.button>
        </Link>
      </section>
      <IntroSection />
      <YoutubeVideos />
    </>
  );
}
