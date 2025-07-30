// src/pages/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const mentors = [
  {
    name: "Dula Bhaya Kag",
    quote:
      "Charani Sahitya is our spiritual root — Aaditya nurtures it with devotion."
  },
  {
    name: "Merubhai Gadhvi",
    quote: "His voice revives tradition with purity and pride. A true torchbearer."
  },
  {
    name: "Folk Community Leader",
    quote:
      "We see our culture’s future glowing through Aaditya’s expression."
  }
];

export default function Testimonials() {
  return (
   <section className="bg-[#F8F3EC] min-h-screen pt-16 md:pt-6 flex justify-center items-center flex-col">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-[#3C2C21] mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mentors & Testimonials
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {mentors.map((mentor, i) => (
            <motion.div
              key={i}
              className="relative bg-white p-6 rounded-xl shadow-lg border border-[#C9A03C] hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Accent Bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#E37028] rounded-l-lg"></div>

              {/* Quote */}
              <p className="text-lg italic text-[#5C3A2E] mb-4 leading-relaxed">
                “{mentor.quote}”
              </p>

              {/* Name */}
              <p className="text-right font-semibold text-[#9C4231]">
                – {mentor.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
