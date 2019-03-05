import React, { Component } from 'react'
import '../Styles/Nav/Nav.css'
// import { Link } from "react-router-dom"
import Logo from '../Assets/Logo/Logo-instock.svg'

class Nav extends Component {
  render() {
    return (
      <nav className='navbar'>
        <ul>
          <div className='nav-components'>
            <li className='nav-logo'>
              <img src={Logo} alt='some value' />
            </li>
            <li className='nav-inventory'>Inventory</li>
            <li className='nav-location'>Locations</li>
          </div>
        </ul>
      </nav>
    )
  }
}

export default Nav
