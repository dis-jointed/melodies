import React from 'react'
import './Header.css'

function Header() {
   
   
    return (
        <div className="header">
            <div className="header__logo">
                <img className='header__image' src='/images/zeroday.png' />
                <h3 className="logo__title">zerodaaaaay</h3>
            </div>

            <div className="menu">
                <a href="">
                 How it works
                </a>
                <a href="">
                  Library
                </a>
                <a href="#home">
                  Pricing
                </a>
            </div>

            <button className="login__header">Login</button>
          
        </div>
    )
}

export default Header
