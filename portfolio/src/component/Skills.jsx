import React from 'react';
import white from '../assets/white.png'
const Skills = () => {
  const icons = [
    "https://cdn3d.iconscout.com/3d/free/preview/free-react-3d-icon-7578010.png?f=webp&h=1400",
    "https://cdn3d.iconscout.com/3d/free/preview/free-nodejs-3d-icon-7578002.png?f=webp&h=1400",
    "https://cdn3d.iconscout.com/3d/free/preview/free-html-3d-icon-7578018.png?f=webp&h=1400",
    "https://cdn3d.iconscout.com/3d/free/preview/free-javascript-3d-icon-7577991.png?f=webp&h=1400",
    "https://cdn3d.iconscout.com/3d/free/preview/free-mongo-db-3d-icon-7577996.png?f=webp&h=1400",
    "https://cdn3d.iconscout.com/3d/free/preview/free-css-3d-icon-7578024.png?f=webp&h=1400",
    "https://cdn3d.iconscout.com/3d/free/preview/free-tailwind-css-3d-icon-9325303@1.png?f=webp&h=1400",
    "https://cdn3d.iconscout.com/3d/free/preview/free-npm-3d-icon-7578025.png?f=webp&h=1400",
    "https://cdn3d.iconscout.com/3d/free/preview/free-git-3d-icon-7578021.png?f=webp&h=1400",
    // "https://cdn3d.iconscout.com/3d/free/preview/free-github-3d-logo-2447911.png?f=webp&h=1400",
    // "https://cdn3d.iconscout.com/3d/free/preview/free-linkedin-3d-logo-2447889.png?f=webp&h=1400",
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
