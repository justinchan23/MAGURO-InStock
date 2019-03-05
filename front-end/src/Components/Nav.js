import React, { Component } from "react";
import "../src/App.scss";
// import { Link } from "react-router-dom"
import Logo from '../src/Logo-instock.svg'

class App extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <div className="nav-components">
            <li className="nav-logo"><img src={Logo} alt="some value"/></li>
            <li className="nav-inventory">Inventory</li>
            <li className="nav-location">Locations</li>
          </div>
        </ul>
      </nav>
    );
  }
}

export default App;