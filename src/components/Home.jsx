import React from 'react'
import ProfilePic from '../assets/icons/PP_Logo.jpg'

const Home = () => {
  return (
    <div className='border-b border-neutral-500 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='text-4xl lg:text-6xl pb-10 lg:mt-14 font-light tracking-tight'>Raman Shakya</h1>
            <div>
              <p className='mb-3 text-2xl lg:text-4xl underline decoration-gray-900 decoration-2 underline-offset-3 bg-linear-to-r from-pink-200 via-slate-600 to-purple-700 font bg-clip-text text-transparent'>
                Self Taught Full Stack Developer
              </p>
              <p className='lg:text-2xl max-w-xl py-4 tracking-tight'>
                Fullstack developer with a focus on solving real problems using clean code. After self-learning JavaScript and having built many projects, the current main focus is on stacks around React + Node.js, Tailwind, MongoDb and Express.js. Writing tests is important, as is performance; I always make sure to leave the codebase in better condition than I found it. Currently looking for the first role where growth is ensured while shipping value every day.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <img src={ProfilePic} alt="Photo" className='max-w-auto xl:max-w-xl rounded-2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home