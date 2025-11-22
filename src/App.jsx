import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-200 sm:px-9 px-2'>
      <div className="absolute inset-0 -z-10 h-full w-full bg-black 
[background:radial-gradient(100%_150%_at_50%_-30%,rgba(126,58,242,0.25)_0%,transparent_70%),#000]"></div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
