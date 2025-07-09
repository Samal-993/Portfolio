import React from 'react'
import 'remixicon/fonts/remixicon.css';
import SocialLinks from '../utils/Link.jsx';

const About = () => {
  return (
    <div id='about' className='w-full h-screen scroll-mt-24  bg-white'> 
   <div 
    style={{ fontFamily: "main_font" }}
   className="px-6 md:px-20 py-10 max-w-4xl mx-auto text-center   text-black">
  <h1 className="about text-4xl font-bold mb-4">About Me</h1>
  <p className="text-xl leading-relaxed">
    Hello! I'm <span className=" font-bold">Premananda Samal</span>, a passionate and self-driven web developer with a deep interest in creating visually appealing, responsive, and user-friendly websites.
  </p>

  <p className="text-xl mt-4 leading-relaxed">
    I specialize in <span className="font-bold">React.js</span>, <span className="font-bold">Tailwind CSS</span>, and <span className="font-bold">Node.js</span>. I'm constantly learning and building projects to improve my skills and stay up-to-date with the latest web technologies.
  </p>

  <p className="text-xl mt-4 leading-relaxed">
    Beyond coding, I'm also interested in UI/UX design, problem-solving, and helping others grow through collaboration and sharing knowledge.
  </p>
</div>
     
     <h1
      style={{ fontFamily: "main_font" }}
     className='text-center font-bold text-xl mt-10 ml-2 '
     ><i className="ri-mail-fill mr-2"></i>Dipaksamal993@gmail.com</h1>

       <SocialLinks textColor='black'/>
    </div>
  )
}

export default About
