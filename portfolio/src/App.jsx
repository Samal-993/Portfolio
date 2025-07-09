import React from 'react'
import Hero from './component/hero'

import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Contact from './component/Contact'
import Cursor from './utiles/cursor'
import Footer from './component/footer'


const App = () => {
  return (
    <div className=' w-full h-[2000px]'> 
  <Cursor/>
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
