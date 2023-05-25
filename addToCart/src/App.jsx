import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShopContextProvider from './context/shopContext';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {

  return (
    <ShopContextProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<div>404, Page not found!</div>}/>
      </Routes> 
    </BrowserRouter>
    </ShopContextProvider>
  )
}

export default App
