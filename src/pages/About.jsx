// PAGE: About.jsx
// src/pages/About.jsx

import React from 'react';
import A6 from "../assets/A5.jpg"
import IntroSection from '../components/IntroSection';

export default function About() {
  return (
  <div className="mx-auto bg-[#F8F3EC] max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
    <IntroSection />

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            About Aaditya
          </h2>

          <p className="mt-4 text-gray-700">
          Aaditya Ranavaya, a young Charani Sahityakar from Junagadh, Gujarat, 
            is dedicated to keeping the rich tradition of Charani poetry alive. 
            Through soulful storytelling and folk performances, he shares tales 
            of bravery, devotion, and cultural heritage, inspiring future generations 
            to embrace their roots.
          </p>
           <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-2 text-accent">Milestones:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>2004:</strong> Born in Kumbhariyana, Junagadh</li>
          <li><strong>2021:</strong> First performance in Meravdar village</li>
          <li><strong>2024:</strong> Major stage appearance at Ravaray Mata Temple</li>
        </ul>
      </div>
        </div>
      </div>

      <div>
        <img
          src={A6}
          className="rounded"
          alt=""
        />
      
      </div>
    </div>
  </div>
  );
}
