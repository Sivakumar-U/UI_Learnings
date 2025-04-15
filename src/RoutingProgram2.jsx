import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'

import Home from './Home';
import About from './About';
import Contact from './Contact';

function RoutingProgram2() {
  return (
    <BrowserRouter>
        <div>
            <nav className='navbar'>
                <h2 className='logo'>MySite</h2>
                <div className='nav-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </nav>
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
    
  )
}

export default RoutingProgram2
