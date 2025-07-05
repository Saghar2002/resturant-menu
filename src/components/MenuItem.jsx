import React from 'react'


const MenuItem = ({item}) => {

  return (
    <div className="menu-item">
        <img src={item.image} alt="" />
        <h1>{item.name}</h1>
        <span>{item.price}</span>
    </div>
  )
}

export default MenuItem