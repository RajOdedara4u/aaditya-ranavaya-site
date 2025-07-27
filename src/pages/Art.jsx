// src/pages/Art.jsx
import React from "react";
import { motion } from "framer-motion";

const works = [
  {
 title: "Live Performance 1",
    description:
      "Aaditya Ranavaya performing traditional Charani and folk literature on stage.",
    videoUrl: "https://www.youtube.com/embed/v-Lvo0hRpvc"
  },
  {
     title: "Live Performance 2",
    description:
      "Another live stage presentation showcasing Aaditya's folk artistry.",
    videoUrl: "https://www.youtube.com/embed/2FNidodwVZI" 
  }
];

export default function Art() {
  return (
    <section className="bg-[#F8F3EC] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-[#3C2C21] mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Art & Literature
        </motion.h2>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {works.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-[#C9A03C] hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-[#9C4231]">
                {item.title}
              </h3>
              <p className="text-[#6E5C3B] mb-4">{item.description}</p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={item.videoUrl}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
