import React, { useLayoutEffect, useRef } from 'react';
import girl from "../assets/girl.jpg";

import ProjectHead from "./ProjectHead";

import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const ProjectRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ProjectRef.current, {
        backgroundColor: "rgb(23 23 23)",
        scrollTrigger: {
          trigger: ProjectRef.current,
          start: "top 70%",
          end: "top 50%",
          scrub: 3
        }
      });
    });
    return () => ctx.revert();
  }, []);

  const projectList = [
    { id: 1, value: 'Inflate Agency', link: 'http://youtube.com', imgValue: girl },
    { id: 2, value: "Notes App", link: 'http://youtube.com', imgValue: girl },
    { id: 3, value: "Book My Doctor", link: 'http://youtube.com', imgValue: girl },
    { id: 4, value: 'CredScrap', link: 'http://youtube.com', imgValue: girl },
    { id: 5, value: 'Dp sports world', link: 'http://youtube.com', imgValue: girl },
  ];

  return (
    <div
      ref={ProjectRef}
      id='project'
      style={{ fontFamily: "about_font" }}
      className='flex font-[oswald] flex-col items-center w-full h-auto py-14 gap-10 mt-[10%] bg-neutral-900 sm:bg-white'>
    
      <h1 className="about text-[50px] font-bold mb-4">Projects</h1>
      <div className='w-full h-auto flex flex-col font-semibold cursor-pointer uppercase'>
        {projectList.map((item) => (
          <ProjectHead
           
            key={item.id}
            value={item.value}
            imgValue={item.imgValue}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
