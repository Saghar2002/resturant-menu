import React from 'react'


const MenuItem = ({item}) => {

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="mt-2 font-bold text-red-800">{item.price}</p>
        </div>
    </div>
  )
}

export default MenuItem