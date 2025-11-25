import React from 'react'
import RLogo from '../assets/icons/logo.png'
import { FiMail, FiGithub, FiLinkedin, FiSlack } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-4 border-b border-gray-500'>
      <div className='flex shrink-0 items-center pr-2'>
        <img src={RLogo} alt="logo" className='w-[40px] cursor-pointer ' />
      </div>
      <h1 className='text-2xl'>
        Wellcome To My Portfolio
      </h1>
      <div className='flex gap-3'>
        <a href="mailto:ramanshakya992@gmail.com">
          <FiMail className="nav_icon" />
        </a>

        <a
          href="https://github.com/Raman992"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="nav_icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/raman-shakya-a2bb65284"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin className="nav_icon" />
        </a>

        <a
          href="https://webdevelopmen-0ki8802.slack.com/archives/D0A00UEKYD7"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FiSlack className='nav_icon' />
        </a>

      </div>
    </nav>
  )
}

export default Navbar
