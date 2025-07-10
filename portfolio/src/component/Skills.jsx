import React from 'react';
import git from '../assets/git.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import node from '../assets/node.png'
import js from '../assets/js.png'
import npm from '../assets/npm.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import mongo from '../assets/mongo.png'

const Skills = () => {
  const icons = [
   
      git,
    html,
    css,
    node,
    js,
    npm,
    tailwind,
    react,
    mongo
   
    
  ];

  return (
    <div id="skill" className="sm:w-full   h-[320px]  scroll-mt-24 bg-white flex flex-col items-center py-10">
   <h1 className="about text-2xl sm:text-4xl font-bold mb-4">tech stack</h1>

      <div className="logos w-[350px] sm:w-full">
        <div className="logo_items ">
          {icons.concat(icons).map((icon, index) => (
            
            <img
            className='w-[60px]  h-[60px] sm:w-[120px] sm:h-[120px]'
             key={index} src={icon} alt="tech" />
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Skills;
