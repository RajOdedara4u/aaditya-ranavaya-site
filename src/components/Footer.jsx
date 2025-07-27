import { Mic2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F8F3EC] text-[#5C3A2E] border-t border-[#E0D6C2]">
      <div className="mx-auto w-full max-w-screen-xl p-6 lg:pt-10 ">
        <div className="md:flex md:justify-between">
          {/* Logo */}
          <div className="mb-6 flex items-center gap-4 md:mb-0">
            <Mic2 className="size-13 md:size-16 ml-4 text-[#9C4231]" />
            <h2 className="text-1xl md:text-2xl font-bold text-[#9C4231]">
              Aaditya Ranavaya
            </h2>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {/* Explore */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-[#5C3A2E]">
                Explore
              </h2>
              <ul className="text-[#9C4231] font-medium">
                <li className="mb-3">
                  <Link to="/art" className="hover:text-[#C9A03C]">
                    Art
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-[#C9A03C]">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-[#5C3A2E]">
                Follow
              </h2>
              <ul className="text-[#9C4231] font-medium">
                <li className="mb-3">
                  <a
                    href="https://www.youtube.com/@aadityaranavaya"
                    className="hover:text-[#C9A03C]"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/adityamerofficial"
                    className="hover:text-[#C9A03C]"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-[#5C3A2E]">
                Contact
              </h2>
              <ul className="text-[#9C4231] font-medium">
                <li className="mb-3">
                  <a href="tel:+919033751591" className="hover:text-[#C9A03C]">
                    +91 90337 51591
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:ranavayaaaditya@gmail.com"
                    className="hover:text-[#C9A03C]"
                  >
                    ranavayaaaditya@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-[#E0D6C2]" />

        {/* Bottom Bar */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-[#7A6E5B]">
            © 2025 Aaditya Ranavaya. All Rights Reserved.
          </span>

           <span className="text-sm text-[#7A6E5B]">
           DEVELOPED AND MANAGE BY : <a className="text-blue-400 hover:text-blue-600" href="http://sk-itpro.com">SK-ITPro</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
