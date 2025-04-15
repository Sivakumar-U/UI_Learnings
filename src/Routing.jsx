import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from "./Home"
import About from './About'
import Contact from './Contact'

import './App.css'

function Routing() {
  return (
    <Router>
        {/* <div style={{textAlign:"center"}}>
            <nav style={{ display: "flex", justifyContent: "center" }}>
                <ul style={{display:"flex",listStyle:"none", gap:"20px", padding:'0px'}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav> */}
        <div>
            <nav style={{ marginTop:'180px',marginBottom: '20px' }}>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'center',
                    listStyle: 'none',
                    gap: '30px',
                    padding: 0,
                    fontSize: '18px',
                }}>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </div>
    </Router>
  )
}

export default Routing
