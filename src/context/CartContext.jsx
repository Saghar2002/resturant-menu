import React , {createContext, useState} from "react";

export const CartContext = createContext();
export const CartProvider = ({children}) => {
  const [cartItems , setCartItems] = useState ([]) ;

    const addToCart = (item) => {
        setCartItems((prev) => [...prev ,item]);
    };
    const removeFromCart = (id) => {
        setCartItems((prev) =>prev.filter((item) => item.id !== id));
    };

    return(
        <CartContext.Provider value={{cartItems , addToCart , removeFromCart}}> 
            {children}
        </CartContext.Provider>
    )
}