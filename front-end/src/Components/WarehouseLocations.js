import React from 'react'
import '../Styles/WarehouseLocations-CSS/styles.css'
import WarehouseNewLocation from './WarehouseNewLocation'
import { Link } from 'react-router-dom'
import axios from 'axios'

const url = 'http://localhost:8080/warehouses'

class WarehouseLocations extends React.Component {
  state = {
    warehouses: [],
    id: ''
  }

  getWarehouses = () => {
    axios.get(url).then(response => {
      this.setState({
        warehouses: response.data
      })
    })
  }

  componentDidMount() {
    this.getWarehouses()
  }

  render() {
    const warehouseList = this.state.warehouses.map((warehouse, i) => {
      return (
        <tr className="locations__row" key={i}>
          <td className="warehouse__title">
            <b>{warehouse.warehouse_name}</b>
            <br />
            {warehouse.address}
          </td>
          <td className="padding__info">
            {warehouse.contact_name}
            <br />
            <i>{warehouse.contact_title}</i>
          </td>
          <td className="padding__info">
            {warehouse.contact_phone}
            <br />
            {warehouse.contact_email}
          </td>
          <td className="warehouse__category padding__info category">{warehouse.categories}</td>
          <td className="img__arrow">
            <Link to={`/warehouses/` + warehouse.id}>
              <img src="../Icons/SVG/Icon-arrow-right.svg" alt="right-arrow" />
            </Link>
          </td>
        </tr>
      )
    })
    return (
      <div className="locations__container">
        <div className="locations__container-header">
          <h1>Locations</h1>
          <input type="text" placeholder="Search" className="locations__search" alt="search" />
        </div>
        <div className="locations__wrapper">
          <table>
            <tbody>
              <tr className="locations__titles">
                <th className="locations__title-desktop warehouse__desktop">WAREHOUSE</th>
                <th className="locations__title-desktop contact">CONTACT</th>
                <th className="locations__title-desktop contact__info">CONTACT INFORMATION</th>
                <th className="locations__title-desktop category__title">CATEGORIES</th>
              </tr>
              {warehouseList}
            </tbody>
          </table>
        </div>
        <WarehouseNewLocation getWarehouses={this.getWarehouses} />
      </div>
    )
  }
}

export default WarehouseLocations
