import React from 'react'

const CategoryCard = ({category , image , onClick}) => {
  return (
    <div 
    className='cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 overflow-hidden'
    onClick={() => onClick(category)}>
        <img src={image} alt={category} className='w-40 rounded-full h-40 object-cover'/>
        <div className='p-4 text-center font-semibold text-red-950 capitalize'>
            {category}
        </div>
    </div>
  )
}

export default CategoryCard