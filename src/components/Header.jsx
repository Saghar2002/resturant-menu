import React from 'react'
import logo from "../assets/pictures/Logo Design.jfif"
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt="logo" className='w-10 h-10 rounded-full'/>
        <h1 className='text-xl font-bold text-red-950'>Darchin Café</h1>
      </div>
        <nav className='flex items-center space-x-4'>
        <Link to='/' className='text-red-950 hover:text-gray-300 font-bold'>Home</Link>
        <Link to='/about' className='text-red-950 hover:text-gray-300 font-bold'>About Us</Link>
        <Link to='/contact' className='text-red-950 hover:text-gray-300 font-bold'>Contact Us</Link>
        <a href='https://www.instagram.com/darchincafe/?hl=en#' className='text-red-950 hover:text-gray-300 text-xl'><FaInstagram /></a>
        </nav>
    </header>
  )
}

export default Header