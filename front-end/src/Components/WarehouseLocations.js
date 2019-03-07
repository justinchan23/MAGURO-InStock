import React from 'react'
import '../Styles/WarehouseLocations-CSS/styles.css'
import WarehouseNewLocation from './WarehouseNewLocation'

const warehouses = [
  {
    name: 'Warehouse Number 1',
    address: '469 King St W, Toronto, ON',
    ContactName: 'Mara Weinberg',
    ContactPosition: 'Warehouse Manager',
    ContactNumber: '+1 416 678 2345',
    ContactEmail: 'weinberg@instack.com',
    categories: 'Industrial, Automotive, Heavy, Mechanical, Engineering'
  }
]

class WarehouseLocations extends React.Component {
  render() {
    const warehouseList = warehouses.map((warehouse, id) => {
      return (
        <tr className="locations__row" key={id}>
          <td className="warehouse__title">
            <b>{warehouse.name}</b>
            <br />
            {warehouse.address}
          </td>
          <td className="padding__info">
            {warehouse.ContactName}
            <br />
            <i>{warehouse.ContactPosition}</i>
          </td>
          <td className="padding__info">
            {warehouse.ContactNumber}
            <br />
            {warehouse.ContactEmail}
          </td>
          <td className="warehouse__category padding__info category">{warehouse.categories}</td>
          <td className="img__arrow">
            <img src="../Icons/SVG/Icon-arrow-right.svg" alt="right-arrow" />
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
        <table>
          <tbody>
            <tr className="locations__titles">
              <th className="locations__title-desktop warehouse">WAREHOUSE</th>
              <th className="locations__title-desktop contact">CONTACT</th>
              <th className="locations__title-desktop contact__info">CONTACT INFORMATION</th>
              <th className="locations__title-desktop">CATEGORIES</th>
            </tr>
            {warehouseList}
            {warehouseList}
          </tbody>
        </table>
        <WarehouseNewLocation />
      </div>
    )
  }
}

export default WarehouseLocations
