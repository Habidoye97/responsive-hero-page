import React from 'react';
import { links } from './Data';
import './navbar.css'

const Navbar = () => {
  return (
    <div className={`'nav-links-container' `}>
      <ul className='nav-links'>
        {links.map((link, index) => {
          return (
            <li className={link.name} key={index}>
              {link.name}
            </li>
          )
        })}

      </ul>
      
    </div>
  )
}

export default Navbar
