import React from 'react'
import Hero from './component/Hero.jsx'
import { Toaster } from 'react-hot-toast';
import About from './component/About.jsx'
import Skills from './component/Skills.jsx'
import Project from './component/Project.jsx'
import Contact from './component/Contact.jsx'
import Cursor from './utils/Cursor.jsx'
import Footer from './component/Footer.jsx'


const App = () => {
  return (
    <div className=' w-full h-[2000px]'> 
  <Cursor/>
   <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            zIndex: 9999, // Ensure it overlays everything
          },
        }} 
      />
  <Hero/>
  <About/>
  <Skills/>
  <Project/>
  <Contact/>
  <Footer/>
  





    </div>
  )
}

export default App
