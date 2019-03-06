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
      <tr className="locations__table">
        <th>WAREHOUSE</th>
        <th>Warehouse Number 1</th>
        <td>469 King St W, Toronto, ON</td>
        <th>CONTACT</th>
        <th>Mara Weinberg</th>
        <td>Warehouse Manager</td>
        <th>CONTACT INFORMATION</th>
        <th>+1 416 678 2345</th>
        <td>weinberg@instack.com</td>
        <th>CATEGORIES</th>
        <td>Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation</td>
      </tr>

      <tr className="locations__table">
        <th>WAREHOUSE</th>
        <th>Warehouse Number 1</th>
        <td>469 King St W, Toronto, ON</td>
        <th>CONTACT</th>
        <th>Mara Weinberg</th>
        <td>Warehouse Manager</td>
        <th>CONTACT INFORMATION</th>
        <th>+1 416 678 2345</th>
        <td>weinberg@instack.com</td>
        <th>CATEGORIES</th>
        <td>Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation</td>
      </tr>

      <tr className="locations__table">
        <th>WAREHOUSE</th>
        <th>Warehouse Number 1</th>
        <td>469 King St W, Toronto, ON</td>
        <th>CONTACT</th>
        <th>Mara Weinberg</th>
        <td>Warehouse Manager</td>
        <th>CONTACT INFORMATION</th>
        <th>+1 416 678 2345</th>
        <td>weinberg@instack.com</td>
        <th>CATEGORIES</th>
        <td>Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation</td>
      </tr>
      </tbody>
    </table>
 
    
  </div>
  )
}

export default WarehouseLocations
