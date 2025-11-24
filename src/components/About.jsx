import React from 'react'
import { about_items, about_para } from './Constant'

const About = () => {
  return (
    <div className='border-b text-center border-neutral-500 pb-4 lg:mb-35 mb-10 items-center flex flex-col '>
      <h1 className='my-18 text-6xl lg:text-4xl'>About Me</h1>
      <h2 className='text-2xl text-purple-400 pb-5'>
        Hey, I’m Raman Shakya
      </h2>
      {about_para.map((item, index) => (
        <p className='max-w-2/3' key={index}>
          {item.Description}
        </p>
      ))}
      <div className='flex flex-col lg:flex-row gap-9 mb-3 lg:mb-20 px-4 mt-20 '>
        {about_items.map((abt) => (
          <div
            key={abt.title}
            className="about_card">
            <span className="text-purple-400 text-4xl mb-4">{abt.icon}</span>
            <h2 className="text-xl font-semibold mb-2">{abt.title}</h2>
            <p className="text-gray-400">{abt.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
