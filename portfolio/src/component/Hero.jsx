import React from "react";
import photo from "../assets/photo.png";
import { Typewriter } from "react-simple-typewriter";
import Header from "../utils/Header";

const Hero = () => {
  return (
    <div className="w-full h-[700px] sm:min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-36 px-4 md:px-6 pt-26 md:pt-20">
        {/* Image Section */}
        <div className="w-[150px] h-[220px] md:w-[200px] md:h-[290px] overflow-hidden rounded">
          <img
            className="w-full h-full object-cover rounded transition-all md:pt-5 duration-500 hover:blur-sm hover:brightness-110"
            src={photo}
            alt="profile"
          />
        </div>

        {/* Text Section */}
        <div className="text-xl md:text-3xl  font-bold text-black max-w-full text-center md:text-left">
          <div>
            <h1
            style={{ fontFamily: "main_font" }}
             className="inline ">Hy, my name is</h1>
            <h1
              style={{ fontFamily: "name_font" }}
              className="name inline sm:text-3xl text-xl  text-blue-400 "
            > Premananda Samal
            </h1>
          </div>

          <h1 
          style={{ fontFamily: "main_font" }}
          className="text-2xl w-80 ml-5 sm:w-full md:text-2xl font-bold text-black pt-4">
            I'm passionate about a
            <span id="descrption" className="text-blue-400 ">
              <br />
              <Typewriter
                words={["Web Developer", "Designer", "Learner"]}
                loop={true}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
        </div>
      </div>

      <h1
        id="write"
        className="text-base md:text-lg  text-center px-4 mt-8 md:mt-12  sm:w-[600px]  w-[300px] -mr-93   text-[15px] h-44 relative right-103 sm:right-217  top-15  mx-auto"
      >
        This portfolio highlights{" "}
        <span className="text-black font-black">Premananda's</span> journey in{" "}
        <span className="text-black font-black">Web Development</span>, featuring
        projects that combine creativity, precision, and technical expertise to
        demonstrate a growing mastery of the craft.
      </h1>

      <hr className="my-20 md:my-12 border-t-2 border-gray-200 w-3/4 md:w-1/2 mx-auto" />
    </div>
  );
};

export default Hero;