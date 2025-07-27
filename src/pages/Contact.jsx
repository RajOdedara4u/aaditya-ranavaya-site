// PAGE: Contact.jsx
// src/pages/Contact.jsx

import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="px-6 w-screen py-20 lg:py-25 bg-[#F8F3EC] mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-primary">Get in Touch</h2>
      <p className="mb-8 text-gray-700">
        DM on Instagram or send your inquiry on WhatsApp.
      </p>

      <div className="flex justify-center gap-8">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919909215664"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-2xl" />
          WhatsApp
        </a>

        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/adityamerofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-600 transition"
        >
          <FaInstagram className="text-2xl" />
          Instagram
        </a>
      </div>
    </section>
  );
}
