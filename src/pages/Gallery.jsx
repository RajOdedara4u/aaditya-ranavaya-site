// src/pages/Gallery.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import A7 from "../assets/A7.jpg"
import A6 from "../assets/A6.jpg"
import A5 from "../assets/A5.jpg"
const images = [
  A6,
  A5,
 A7
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="max-w-full px-4 py-16 bg-[#F8F3EC]">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-10 text-[#9C4231]">
        Gallery
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="group relative rounded-2xl overflow-hidden shadow-lg border border-[#C9A03C] cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Performance ${i + 1}`}
              className="w-full h-64 object-cover object-top rounded-2xl transform group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-h-[90%] max-w-[90%] rounded-3xl border-4 border-[#C9A03C] shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Media */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-[#E37028]">
          Follow on Social Media
        </h3>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/adityamerofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9C4231] hover:text-[#C9A03C] font-medium text-lg"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/1B76ZwAucd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9C4231] hover:text-[#C9A03C] font-medium text-lg"
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
