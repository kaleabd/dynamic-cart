import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Cart from './pages/Cart.tsx';
import { Contactus } from './pages/Contactus.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
