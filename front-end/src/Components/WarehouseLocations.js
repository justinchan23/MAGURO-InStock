import React from 'react'
import '../Styles/WarehouseLocations-CSS/styles.css'

const WarehouseLocations = () => {
  return (
  <div className="locations__container">
    <div className="locations__container-header">
      <h1>Locations</h1>
      <input 
        type="text" 
        placeholder="Search" 
        className="locations__search" 
        alt="search"
      />
    </div>
    

    <table>
      <tbody>

      <tr className="locations__row">
        <th className="locations__title-desktop">WAREHOUSE</th>
        <td className="warehouse__title">Warehouse Number 1</td>
        <td>469 King St W, Toronto, ON</td>
        <th className="locations__title-desktop">CONTACT</th>
        <td className="padding__info">Mara Weinberg</td>
        <td className="warehouse__position">Warehouse Manager</td>
        <th className="locations__title-desktop">CONTACT INFORMATION</th>
        <td className="padding__info">+1 416 678 2345</td>
        <td>weinberg@instack.com</td>
        <th className="locations__title-desktop">CATEGORIES</th>
        <td className="warehouse__category padding__info">Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation</td>
      </tr>

      <tr className="locations__row">
        <th className="locations__title-desktop">WAREHOUSE</th>
        <td className="warehouse__title">Warehouse Number 1</td>
        <td>469 King St W, Toronto, ON</td>
        <th className="locations__title-desktop">CONTACT</th>
        <td className="padding__info">Mara Weinberg</td>
        <td className="warehouse__position">Warehouse Manager</td>
        <th className="locations__title-desktop">CONTACT INFORMATION</th>
        <td className="padding__info">+1 416 678 2345</td>
        <td>weinberg@instack.com</td>
        <th className="locations__title-desktop">CATEGORIES</th>
        <td className="warehouse__category padding__info">Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation</td>
      </tr>


      </tbody>
    </table>
 
    
  </div>
  )
}

export default WarehouseLocations
