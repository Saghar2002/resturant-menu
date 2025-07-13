import React , {useContext} from 'react'
import { CartContext } from '../context/CartContext'

const MenuItem = ({items}) => {
const {addToCart} = useContext(CartContext);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={items.image} alt={items.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold">{items.name}</h2>
          <p className="text-sm text-gray-600">{items.description}</p>
          <p className="mt-2 font-bold text-red-800">{items.price}</p>
          <button onClick={() => addToCart(items)}
            className='bg-red-950 text-white rounded mt-3 px-4 py-1'
            >Add To Cart</button>
        </div>
    </div>
  )
}

export default MenuItem