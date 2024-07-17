import React from 'react'
import Home from '../pages/Home/home'
import About from '../pages/About/about'
import Contact from '../pages/Contact/contact'
import { Routes,Route } from 'react-router-dom';

function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    );
}

export default AppRoutes