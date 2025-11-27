import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-200 sm:px-9 px-2'>
      <div className="fixed inset-0 -z-10 h-full w-full bg-black 
        [background:radial-gradient(100%_150%_at_50%_-30%,rgba(126,58,242,0.25)_0%,transparent_70%),#000]">
      </div>
      <div className='container mx-auto'>
        <Navbar />
        <Home />
        <About />
        <Technologies />
        <Projects />
      </div>
    </div>
  )
}

export default App
