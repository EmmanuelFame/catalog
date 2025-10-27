
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import { StoreCatalog } from './components/StoreCatalog'
import Home from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Product } from './pages/Product'
import Navigation from './components/Navigation'

function App() {
  

  return (
    <>
    
    <BrowserRouter>
     <Navigation/>
    <Routes>

      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="*" element={<Home/>} />
    </Routes>
    
    
    </BrowserRouter>

      
     
      
    </>
  )
}

export default App
