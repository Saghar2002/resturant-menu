import React from 'react'
import MenuItem from './MenuItem'
import menu from '../data/menuData'

const Menu = (items) => {
  return (
    <div className="menu">
      {menu.map((item , index) => (
        <MenuItem item={item} key={index} />
      ))}
    </div>
  )
}

export default Menu