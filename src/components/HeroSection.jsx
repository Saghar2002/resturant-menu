import React from 'react'
import { motion } from 'framer-motion'
import cafeImage from "../assets/pictures/download (17).jfif"

const HeroSection = () => {
  return (
    <section className='mt-6 p-4 md:p-8 text-center'>
      <motion.img
        src={cafeImage}
        alt="restaurant"
        className='w-full max-h-[450px] object-cover rounded-xl shadow'
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.h2
        className='text-2xl font-bold mt-6'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Welcome To Darchin Café
      </motion.h2>
      
      <motion.p
        className='text-gray-600 mt-2'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        We make food with love in Darchin. Pizza, Pasta, Drinks and Dessert that you never forget!
      </motion.p>
    </section>
  )
}

export default HeroSection
