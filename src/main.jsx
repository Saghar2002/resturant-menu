import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes , Route } from 'react-router'
import { CartProvider } from './context/CartContext.jsx'
import Cart from './components/Cart.jsx'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
