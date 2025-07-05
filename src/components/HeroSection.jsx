import React from 'react'
import cafeImage from "../assets/pictures/download (17).jfif"

const HeroSection = () => {
  return (
    <section className='mt-6 p-4 md:p-8 text-center'>
        <img src={cafeImage} alt="resturant" className='w-full max-h-[450px] object-cover rounded-xl shadow' />
        <h2 className='text-2xl font-bold mt-6'>Welcome To Darchin Café</h2>
        <p className='text-gray-600 mt-2'>We make food with love in Darchin.Pizza,Pasta,Drinks and Desert that you never forget!</p>
    </section>
  )
}

export default HeroSection