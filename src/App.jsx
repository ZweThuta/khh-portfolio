import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from "./components/About"
import Technologies from './components/Technologies'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Package from './components/Package'
import Mascort from './components/Mascort'
import Art from './components/Art'
import Flat from './components/Flat'
import Experimental from './components/Experimental'
import Poster from './components/Poster'
import Thanks from './components/Thanks'

function App() {

  return (
    <section className='bg-slate-950 overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#4a3a75,transparent_50%)]" />
      </div>
      
      {/* Modern dotted pattern with gradients */}
      <div className="absolute inset-0">
        {/* Dotted pattern */}
        <div className="absolute h-full w-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:40px_40px]" />
        
        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1f4c33_1px,transparent_1px)] bg-[size:100px_100%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-slate-950/50" />
        
        {/* Glow effects */}
        <div className="absolute top-0 -left-4 w-3/4 h-1/3 bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-3/4 h-1/3 bg-gradient-to-tl from-purple-500/10 via-pink-500/5 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-8 relative">
        <Navbar/>
        <Hero/>
        <Technologies/>
        {/* <About/> */}
        {/* <Education/> */}
        <Projects/>
        <Package/>
        <Mascort/>
        <Art/>
        <Flat/>
        <Experimental/>
        <Poster/>
        <Thanks/>
        {/* <Contact/> */}
      </div>
    </section>
  )
}

export default App
