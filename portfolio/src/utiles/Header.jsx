import React from "react";
import resume from '../assets/resume.pdf'
const Header = () => {
  return (
    <div
      style={{ fontFamily: "main_font" }}
      className="flex justify-between items-center px-6 py-4 fixed top-0 left-0 w-full  z-50 bg-white/30 backdrop-blur-md shadow-md"
    >
      {/* Logo */}
      <h1 style={{ fontFamily: "logo_font" }} className="text-black  text-lg">
        @Premananda*
      </h1>

      
      <div id="nav" className="text-black font-extrabold text-xl flex gap-6">
        <a id="line" href="#about">
          About
        </a>
        <a id="line" href="#skill">
          Skills
        </a>
        <a id="line" href="#project">
          Project
        </a>
      </div>

      {/* Buttons */}
      <div className=" button flex gap-4">
        <a
          id="contact"
          href="#contact"
          className="bg-neutral-900 cursor-pointer rounded-lg text-white px-4 py-2"
        >
          Contact
        </a>

        <a
         class="resume"
         href={resume}>
          <span
          id="resume"
        
          className="bg-black cursor-pointer rounded-lg text-white px-4 py-2"
        >
          Resume
        </span>
          
          </a>
      </div>
    </div>
    // </div>
  );
};

export default Header;   