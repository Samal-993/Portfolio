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
    <div id="skill" className="w-full h-[500px] scroll-mt-24 bg-white flex flex-col items-center py-10">
   <h1 className="about text-4xl font-bold mb-4">tech stack</h1>

      <div className="logos">
        <div className="logo_items">
          {icons.concat(icons).map((icon, index) => (
            
            <img key={index} src={icon} alt="tech" />
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Skills;
