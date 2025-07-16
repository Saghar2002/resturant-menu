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
        <h2 className='text-lg font-bold mb-2 text-center'>Your Cart</h2>
        {cartItems.length === 0 ? 
        (
           <p>Your cart is empty!</p>
        ) : 
        (
            <>
              <ul>
                {cartItems.map((item) => (
                    <li key={item.id} className='flex justify-between items-center my-3 py-3'>
                        <div className='flex justify-center items-center p-3'>
                        <img src={item.image} alt={item.name} className='w-20 h-20 object-cover'/>
                        <span className='mx-5'>{item.name}</span>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}>❌</button>
                    </li>
                ))}
              </ul>
              <div className='text-center'>
                  <p className="font-bold mt-2">Total: {totalPrice.toLocaleString()}$</p>
                  <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded mt-3">Checkout</button>
              </div>
            </>
        )}
    </div>
  )
}

export default Cart