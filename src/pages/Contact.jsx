// src/pages/Contact.jsx

import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import WhatsAppButton from "../components/WhatsAppButton";
import InstagramButton from "../components/InstagramButton";

export default function Contact() {
  return (
    <section className="bg-[#F8F3EC] min-h-[90vh] w-full flex items-center justify-center px-4">
      <div className="text-center max-w-xl w-full">
        <h2 className="text-3xl font-bold mb-4 text-primary">Get in Touch</h2>
        <p className="mb-8 text-gray-700">
          DM on Instagram or send your inquiry on WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* WhatsApp Button */}
        <WhatsAppButton />

          {/* Instagram Button */}
         <InstagramButton />
        </div>
      </div>
    </section>
  );
}