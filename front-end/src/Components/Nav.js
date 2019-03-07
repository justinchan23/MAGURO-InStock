import React, { Component } from 'react'
import '../Styles/Nav/Nav.css'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Logo/Logo-instock.svg'

class Nav extends Component {
  render() {
    return (
      <nav className='navbar'>
        <ul>
          <div className='nav-components'>
            <Link to='/'>
              <li className='nav-logo'>
                <img src={Logo} alt='some value' />
              </li>
            </Link>
            <div className='nav-routes'>
              <div>
                <Link to='/'>
                  <li className='nav-inventory'>Inventory</li>
                </Link>
              </div>
              <div>
                <Link to='/warehouseinventory'>
                  <li className='nav-location'>Locations</li>
                </Link>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    )
  }
}

export default Nav
