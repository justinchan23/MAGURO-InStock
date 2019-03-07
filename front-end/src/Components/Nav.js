import React, { Component } from 'react'
import '../Styles/Nav/Nav.css'
import { Link, NavLink } from 'react-router-dom'
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
                <li className='k'>
                  <NavLink to='/inventory' className='nav_link' activeClassName='activeRoute'>
                    Inventory
                  </NavLink>
                </li>
              </div>
              <div>
                <li className='k'>
                  <NavLink
                    to='/warehouseinventory'
                    className='nav_link'
                    activeClassName='activeRoute'
                  >
                    Locations
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    )
  }
}

export default Nav
