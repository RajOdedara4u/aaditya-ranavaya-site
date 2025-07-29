import { Music } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSeaction";
import A1 from "../assets/A1.jpg"
import A2 from "../assets/A2.jpg"
import A3 from "../assets/A3.jpg"

const IntroSection = () => {
  return (
    
   
   <div className="w-full px-4 bg-[#F8F3EC] text-[#3C2C21] py-16 md:px-12 lg:px-16 xl:px-24">
    <FadeInSection>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex bg-white items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <Music className="text-teal-900 w-7 h-7" viewBox="0 0 24 24" />
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
               Preserving the
              <br className="hidden md:block" />
              <span className="inline-block text-deep-purple-accent-400">
                Folk Heritage of Gujarat
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
             Aaditya Ranavaya, a young Charani Sahityakar from Gujarat,
              brings ancient stories, poetic traditions, and soulful folk
              melodies to life. His performances celebrate bravery.
            </p>
          </div>
          <div>
            <Link
                     to="/contact"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Let's Connect...
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
    <FadeInSection>
            <img
              className="object-cover object-top  mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={A1}
              alt=""
            />
    </FadeInSection>
    <FadeInSection>
            <img
              className="object-cover object-top  w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
             src={A2}
              alt=""
            />
    </FadeInSection>
          </div>
          <div className="px-3">
    <FadeInSection>
            <img
              className="object-cover object-top  w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={A3}
              alt=""
            />
    </FadeInSection>
          </div>
        </div>
      </div>
    </FadeInSection>
    </div>

  );
};

export default IntroSection