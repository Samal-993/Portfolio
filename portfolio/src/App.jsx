import React from 'react'
import Hero from './component/hero'
import { Toaster } from 'react-hot-toast';
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Contact from './component/Contact'
import Cursor from './utils/Cursor'
import Footer from './component/Footer'


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
