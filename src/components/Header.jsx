import React , {useContext} from 'react'
import { CartContext} from '../context/CartContext'
import logo from "../assets/pictures/Logo Design.jfif"
import { FaInstagram } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({top:0 , behavior: 'smooth'});
  }
  return (
    <header className='bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50'>
      <div className='flex items-center gap-2'>
        <Link to='/' onClick={handleHomeClick}>
        <img src={logo} alt="logo" className='w-10 h-10 rounded-full'/>
        </Link>
        <h1 className='text-xl font-bold text-red-950'>Darchin Café</h1>
      </div>
        <nav className='flex items-center space-x-4'>
        <Link to='/' onClick={handleHomeClick} className='text-red-950 hover:text-gray-300 font-bold'>Home</Link>
        {/* <Link to='/about' className='text-red-950 hover:text-gray-300 font-bold'>About Us</Link> */}
        <Link to='/contact' className='text-red-950 hover:text-gray-300 font-bold'>Contact Us</Link>
        <Link to='/cart' className='relative text-red-950 hover:text-gray-300 text-xl'>
        <FaShoppingCart />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-1">
          {cartItems.length}
        </span>
        )}
        </Link>
        <a href='https://www.instagram.com/darchincafe/?hl=en#' className='text-red-950 hover:text-gray-300 text-xl'><FaInstagram /></a>
        </nav>
    </header>
  )
}

export default Header