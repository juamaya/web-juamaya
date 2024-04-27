import React, {useState} from 'react'
import './Navbar.css'
import {  Link } from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="navbar">

            <div className="nav_logo"><a href="https://github.com/juamaya" target='_blank'>JUAMAYA</a></div>
      
            <div className={`nav_items ${isOpen && "open"}`}>
                <Link to="/inicio" className="a">INICIO</Link>
                <Link to="/about" className="a">ABOUT</Link>
                <Link to="/blog" className="a">BLOG</Link>
                <Link to="/portafolio" className="a">PORTAFOLIO</Link>
                <Link to="/contacto" className="a">CONTACTO</Link>
            </div>
        
            <div className={`nav_toggle ${isOpen && "open"}` } onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar