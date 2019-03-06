import React, { Component } from 'react'
import '../Styles/Nav/Nav.css'
// import { Link } from "react-router-dom"
import Logo from '../Assets/Logo/Logo-instock.svg'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <div className="nav-components">
            <li className="nav-logo">
              <img src={Logo} alt="some value" />
            </li>
            <div className="nav-routes">
              <div>
                <li className="nav-inventory">Inventory</li>
              </div>
              <div>
                <li className="nav-location">Locations</li>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    )
  }
}

export default Nav
