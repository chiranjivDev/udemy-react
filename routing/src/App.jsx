import {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Products, Home, Error, About, SingleProduct, Login, Dashboard, Protected} from './Pages/pages.js';
import SharedLayout from './Pages/SharedLayout';

function App() {

  const [user, setUser]=useState(null);

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
            <Route element={<Home/>} index/>
            <Route path='about' element={<About/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='products/:id' element={<SingleProduct/>}/>
            <Route path='login' element={<Login setUser={setUser}/>}/>
            <Route path='dashboard' element={
              <Protected user={user}>
                <Dashboard user={user}/>
              </Protected>
            }/>
            <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
