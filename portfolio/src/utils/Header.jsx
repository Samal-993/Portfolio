import React, { useState } from "react";
import resume from '../assets/resume.pdf';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div
      style={{ fontFamily: "main_font" }}
      className="flex flex-col md:flex-row justify-between items-center px-4 py-3 md:px-6 md:py-4 fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md"
    >
      {/* Logo */}
      <h1
        style={{ fontFamily: "logo_font" }}
        className="text-black text-lg md:text-lg mb-3 md:mb-0"
      >
        @Premananda*
      </h1>
       
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
          </button>


      {/* Navigation */}
      <div
        id="nav"
        className="text-black font-extrabold text-base md:text-xl flex flex-col md:flex-row gap-3 md:gap-6"
      >
        <a id="line" href="#about" >
          About
        </a>
        <a id="line" href="#skill" >
          Skills
        </a>
        <a id="line" href="#project" >
          Project
        </a>
      </div>

      {/* Buttons */}
      <div className="button flex flex-col md:flex-row gap-3 md:gap-4 mt-3 md:mt-0">
        <a
          id="contact_a"
          href="#contact"
          className="bg-neutral-900 cursor-pointer rounded-lg text-white px-3 py-1.5 md:px-4 md:py-2 text-center"
        >
          Contact
        </a>

        <a
          className="resume"
          href={resume}
        >
          <span
            id="resume"
            className="bg-black cursor-pointer rounded-lg text-white px-3 py-1.5 md:px-4 md:py-2 block text-center"
          >
            Resume
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;