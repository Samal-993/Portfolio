import React from "react";
import photo from "../assets/photo.png";
import { Typewriter } from "react-simple-typewriter";
import Header from "../utils/header";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-white ">
      <Header />

      <div className="w-full h-[400px] flex flex-row-reverse items-center justify-center gap-36 px-6 mt-20">
        {/* Image Section */}

        <div className="w-[200px] h-[290px] overflow-hidden rounded">
          <img
            className="w-full h-full  object-cover rounded transition-all duration-500 hover:blur-sm hover:brightness-110"
            src={photo}
            alt="profile"
          />
        </div>

        {/* Text Section */}
        <div className="text-3xl font-bold text-black max-w-full">
          <div>
            <h1 className="inline">Hy, my name is</h1>
            <h1
              style={{ fontFamily: "name_font" }}
              className="name w-[130px] inline ml-2 text-blue-400"
            >
              Premananda Samal
            </h1>
          </div>

          <h1 className="text-3xl font-bold text-black pt-4">
            I'm passionate about a
            <span id="descrption" className="text-blue-400">
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
      <h1 id="write">
        This portfolio highlights{" "}
        <span className="text-black font-black">Premananda's</span> journey in{" "}
        <span className="text-black font-black">Web Development</span> ,
        featuring projects that combine creativity, precision, and technical
        expertise to demonstrate a growing mastery of the craft.
      </h1>

      <hr className="my-30 border-t-2 border-gray-200 w-3/4 mx-auto" />
    </div>
  );
};

export default Hero;
