import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {

const navigate = useNavigate();
const [show, handleShow] = useState(false);

const transitionNavbar = () => {
  if (window.scrollY > 100){
    handleShow(true)
    } else {
        handleShow(false)
    }
}

useEffect(() => {
  window.addEventListener('scroll', transitionNavbar);
  return () => window.removeEventListener('scroll', transitionNavbar)
}, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
        <img onClick={() => navigate('/')} className='nav__logo' src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="netflix logo" />
        <img onClick={() => navigate('/profile')} className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar logo" />
        </div>
    </div>
  )
}

export default Navbar