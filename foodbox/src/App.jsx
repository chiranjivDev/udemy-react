import './App.css'
import Cart from './components/cart/Cart'
import Header from './components/layout/Header'
import Meals from './components/meals/Meals'
import { useState } from 'react'
import CartProvider from './store/cartProvider'


function App() {
  
  const [showCart, setShowCart]=useState(false);

  const toggleCart=()=>{
    setShowCart(!showCart);
  }

  return (
    <CartProvider>
      {
        showCart && <Cart toggleCart={toggleCart}/>
      }
      <Header toggleCart={toggleCart}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  )
}

export default App
