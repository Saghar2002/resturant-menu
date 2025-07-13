import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter , Routes , Route } from 'react-router'
import { CartProvider } from './context/CartContext.jsx'
import Cart from './components/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
