import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container flex justify-between items-center border-1 border-black rounded-[8px] p-[10px]'>
        <div className='logo-container'>
            <img src='/assets/images/app-logo.webp' alt='logo' className='logo w-[40px] h-[40px]' />
        </div>
        <div className='header-menu'>
            <ul className='flex justiy-center items-center gap-[10px]'>
                <li className='bg-cyan-500 px-2 rounded-[5px] text-white dark:text-black cursor-pointer'>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className='bg-cyan-500 px-2 rounded-[5px] text-white dark:text-black cursor-pointer'>
                  <Link to="/about">
                    About us
                  </Link>
                </li>
                <li className='bg-cyan-500 px-2 rounded-[5px] text-white dark:text-black cursor-pointer'>Contact us</li>
                <li className='bg-cyan-500 px-2 rounded-[5px] text-white dark:text-black cursor-pointer'>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Header