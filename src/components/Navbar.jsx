import React from 'react'
import RLogo from '../assets/icons/logo.png'
import { FiMail, FiGithub, FiLinkedin, FiSlack } from 'react-icons/fi';

const Navbar = () => {
  return (
      <nav className='mb-20 flex items-center justify-between py-4 sticky'>
        <div className='flex shrink-0 items-center pr-2'>
            <img src={RLogo} alt="logo" className='w-[40px] cursor-pointer '/>
        </div>
        <h1>
            Wellcome To My Portfolio
        </h1>
        <div className='flex gap-3'>
            <FiMail className='nav_icon'/>
            <FiGithub className='nav_icon'/>
            <FiLinkedin className='nav_icon'/>
            <FiSlack className='nav_icon'/>
        </div>
      </nav>
  )
}

export default Navbar
