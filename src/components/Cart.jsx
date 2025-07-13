import React , {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { li } from 'framer-motion/client';
const Cart = () => {
    const {cartItems , removeFromCart} = useContext(CartContext);
    const totalPrice = cartItems.reduce((sum , item) => {
        const priceNumber = parseInt(item.price.replace(/[^0-9]/g , ''));
        return sum + priceNumber;
    } , 0);
  return (
    <div className='p-4 bg-gray-100 rounded shadow mt-4 max-w-md mx-auto'>
        <h2 className='text-lg font-bold mb-2'>Your Cart</h2>
        {cartItems.length === 0 ? 
        (
           <p>Your cart is empty!</p>
        ) : 
        (
            <>
              <ul>
                {cartItems.map((item) => (
                    <li key={item.id} className='flex justify-between items-center mb-2'>
                        <span>{item.name}</span>
                        <button onClick={() => removeFromCart(item.id)}>✖</button>
                    </li>
                ))}
              </ul>
              <p className="font-bold mt-2">Total: {totalPrice.toLocaleString()}$</p>
              <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded">Checkout</button>
            </>
        )}
    </div>
  )
}

export default Cart