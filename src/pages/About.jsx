// src/pages/About.jsx

import React from 'react';
import A6 from "../assets/A5.jpg";
import IntroSection from '../components/IntroSection';

export default function About() {
  return (
   <div className="w-full bg-[#F8F3EC] lg:h-[90vh] flex justify-center items-center flex-col px-4 py-10 sm:px-6 lg:px-8">
      <IntroSection />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-16">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Charani Literature Expert</h2>
          <h3 className="text-2xl font-semibold text-accent mb-6">Aaditya Ranavaya</h3>

          <p className="text-gray-700 mb-4">
            There are seven types of arts in fine arts: visual arts, decorative arts, sculptural arts, musical arts, dance arts, dramatic arts, and literary arts. Among these, literature is recognized as a superior form of art. Due to its essential elements, literature is closely linked with other art forms. Based on different subjects, literature is divided into various categories—like devotional literature, Charani literature, Dalit literature, feminist literature, tribal literature, rural literature, saint literature, folk literature, etc. Among these, Charani literature preserves our heritage and history.
          </p>

          <p className="text-gray-700 mb-4">
            Charani literature is the literary contribution of the Charan community. The word "Charan" means those who spread praises and stories. Descriptions of this community can be found in ancient texts like the Ramayana and Mahabharata. They claim divine origin and identify themselves as servants of the goddess.
          </p>

          <p className="text-gray-700 mb-4">
            As Ratudan Rohaliya and Padmashree Ghalshi Meghani Gadhvi mention, the Charan clans migrated from Central Asia and settled in the Himalayan ranges. Over time, they spread across Rajasthan, Gujarat, Saurashtra, and Kutch. Due to contact with different regional dialects, Charani literature developed its own unique language, known as “Dingal language.” Because it was self-created, it is also known as a creative language. It reflects poetic composition and emotional expressions with special intensity. The roots of this dialect are in northern Apabhramsha and old western Rajasthani.
          </p>

          <p className="text-gray-700 mb-4">
            Charani literature is found in Dingal, Pad, and Gujarati languages. The Charan poet Narharidas, for example, wrote “Avtar Charitra” in Gujarati. Most Charani literature is found in verse form, and some works are also found in prose. The topics covered in Charani literature are diverse—such as devotional hymns to deities, narratives of saints and warriors, youth valor, elegies, philosophical poems, moral proverbs, satire, natural disasters like droughts and earthquakes, and more. Charani literature exists both in oral and written forms.
          </p>

          <p className="text-gray-700 mb-4">
            Those who present Charani literature through their voice (oral tradition) are known as Charani literature experts. From Gujarat, poets like Dula Bhaya Kag, Isardan Gadhvi, Meranbhai Gadhvi, Rajbha Gadhvi, Ratudan Gadhvi, and Hareshdan Gadhvi have contributed richly to our folk and Charani literature.
          </p>

          <h3 className="text-2xl font-semibold text-accent mt-10 mb-2">About Aaditya</h3>
          <p className="text-gray-700 mb-4">
            A promising young man from Mehergadh, Aaditya Ranavaya, is deeply passionate about Charani literature. Through his sweet voice, he presents this literature to all of us.
          </p>

          <p className="text-gray-700 mb-4">
            Aaditya was born to Virambhai Devabhai Ranavaya and Puriben Virambhai Ranavaya, originally from Kubdiyana village, now residing in Junagadh. He was born on <strong>1st October 2004</strong> and is currently pursuing a <strong>Bachelor of Arts (B.A.)</strong>. Since childhood, Aaditya has had a deep interest in Charani literature and our culture. He is an emerging and rising artist in this field.
          </p>

          <p className="text-gray-700 mb-4">
            Aaditya first publicly performed literature in <strong>2021</strong> in Meravdar village. His biggest stage performance was in <strong>2024</strong> on the occasion of <em>Asa Sud Agiyaras</em> (an auspicious day) at the temple of Ravaray Mata located in Rajpara Gir.
          </p>

          <p className="text-gray-700 mb-6">
            Aaditya wishes to take this literary art forward and, through this medium, promote our culture. He wants to attract today's youth toward cultural heritage and make them aware of what our culture truly represents. His thoughts are noble, and we pray that he reaches the peak of success in literature.
          </p>

          <div>
            <h4 className="text-2xl font-semibold mb-2 text-accent">Milestones:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>2004:</strong> Born in Junagadh, Gujarat
(Land of Girnar)</li>
              <li><strong>2021:</strong> First performance in Meravdar village</li>
              <li><strong>2024:</strong> Major stage appearance at Ravaray Mata Temple</li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center">
          <img
            src={A6}
            className="rounded shadow-lg max-w-full md:max-w-sm"
            alt="Aaditya Ranavaya"
          />
        </div>
      </div>
    </div>
  );
}
