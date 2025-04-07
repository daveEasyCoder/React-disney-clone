import React, { useRef, useState } from 'react'
import logo from '../assets/logo.webp'
const Navbar = () => {

  const menuRef = useRef();
  
  const openCloseMenuBar = () => {
    menuRef.current.classList.toggle('active-menu')
  }
  return (
    <>
    <div>
      <div className='header'>
            <div className='header-left'>
              <div className='logo'>
                <img className='' src={logo} alt="logo" />
              </div>
              <nav>
                  <ul ref={menuRef}>
                    <div className='mobile-close-icons' onClick={openCloseMenuBar}><i className="fa-solid fa-xmark"></i></div>
                    <li>TV</li>
                    <li>Movies</li>
                    <li>Sports</li>
                    <li>News</li>
                    <li>Premium</li>
                    <li>Disney+</li> 
                  </ul>
                  <div className='kids'><img src="src/assets/kids.svg.png" alt="logo" /></div>
              </nav>
            </div>
            <div className='header-right'>
                <div className='input-box'><input type="text" placeholder='Search' /></div>
                <button className='subscribe-button'>SUBSCRIBE</button>
                <button className='login-button'>LOGIN</button>
                <div className='humberger-menu' onClick={openCloseMenuBar}>
                   <i className="fa-solid fa-bars"></i>
                </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default Navbar