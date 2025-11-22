import React from 'react'
import { FiCamera, FiCode, FiCoffee } from 'react-icons/fi'

const About = () => {
  return (
    <div className='border-b text-center border-neutral-500 pb-4 lg:mb-35'>
      <h1 className='my-18 text-6xl lg:text-4xl'>About Me</h1>
        <h2 className='text-2xl text-purple-400 pb-5'>
            Hey, I’m Raman Shakya
        </h2>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti natus ex soluta reprehenderit consequuntur corrupti amet fuga aspernatur autem blanditiis suscipit iusto illum, tenetur veritatis eligendi in itaque ipsum unde.    
        </p>
        <p className='pb-20'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempore cupiditate eveniet magnam mollitia fugit possimus ab doloremque reprehenderit temporibus aliquid, maxime, dicta itaque expedita. Nihil corporis velit odit accusantium.
        </p>
        <div className='flex flex-col lg:flex-row gap-9 mb-3 lg:mb-20 px-4'>
            <div className="about_card">
            <FiCode className="text-purple-400 text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Main Stack</h2>
            <p className="text-gray-400">React · MongoDb · Express.js · Tailwind · Node.js</p>
          </div>
          <div className="about_card">
            <FiCoffee className="text-purple-400 text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Past Life</h2>
            <p className="text-gray-400">Barista & Coffee Instructor → Tech Sales → Tech Repair → Photo Editor → Full-time coding</p>
          </div>
          <div className="about_card">
            <FiCamera className="text-purple-400 text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Currently</h2>
            <p className="text-gray-400">BCA student · Building real projects · Hunting for my first dev job</p>
          </div>
        </div>
      </div>
  )
}

export default About
