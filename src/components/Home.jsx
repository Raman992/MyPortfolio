import React from 'react'
import ProfilePic from '../assets/icons/PP_Logo.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';



const Home = () => {
  
  useGSAP(() => {

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 }
    });

    tl.from('#name', {
      opacity: 0,
      x: -150,
    })

    tl.from('#intro', {
      opacity: 0,
      x: -130,
    }, "-=0.5")

    tl.from('#intro_para', {
      opacity: 0,
      x: -130,
    }, "-=0.4")

    tl.from('#profile_pic', {
      opacity: 0,
      scale: 0.5,
      duration: 1.5
    }, "");

    gsap.to('#profile_pic', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, []);

  return (
    <div className='border-b border-neutral-500 pb-4 lg:mb-20 h-screen'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 id='name' className='text-4xl lg:text-6xl pb-10 lg:mt-14 font-light tracking-tight' >Raman Shakya</h1>
            <div>
              <p id='intro' className='mb-3 text-2xl lg:text-4xl underline decoration-gray-900 decoration-2 underline-offset-3 bg-linear-to-r from-pink-200 via-slate-600 to-purple-700 font bg-clip-text text-transparent'>
                Self Taught Full Stack Developer
              </p>
              <p id='intro_para' className='lg:text-2xl max-w-xl py-4 tracking-tight'>
                Fullstack developer with a focus on solving real problems using clean code. After self-learning JavaScript and having built many projects, the current main focus is on stacks around React + Node.js, Tailwind, MongoDb and Express.js. Always making sure to leave the codebase in better condition than I found it. Currently looking for the first role where growth is ensured while shipping value every day. Still learning every day ✌️🕊️.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8 mt-10 lg:mt-0'>
          <div className='flex justify-center'>
            <img id='profile_pic' src={ProfilePic} alt="Photo" className='max-w-full w-full md:max-w-lg xl:max-w-xl rounded-2xl shadow-2xl border border-border' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home