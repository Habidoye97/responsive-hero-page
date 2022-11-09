import React, { useState } from 'react';
import { links } from './Data';
import './navbar.css';
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {

  const [isShowing, NavIsShowing] = useState(false)

  return (
    <div className='nav-links-container'>
      <div className="logo_container title">
            <div className="logo"></div>
            <h1 className="logo_description">Interior Thinkers</h1>
      </div>
      <ul className={`nav-links ${isShowing? '': 'show'}`}>
        
        
        {links.map((link, index) => {
          return (
            <li className='nav-link-list' key={index}>
              {link.name}
            </li>
          );
        })}
        
      </ul>
      <button onClick={() => NavIsShowing(!isShowing)} className='btn-toggle'>{isShowing? <MdOutlineClose /> : <HiOutlineMenuAlt1 />}</button>
    </div>
  )
}

export default Navbar
