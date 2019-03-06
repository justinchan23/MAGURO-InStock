import React from 'react'
import '../Styles/WarehouseLocations-CSS/styles.css'

const data = {
  warehouseName: "Warehouse Number 1",
  warehouseAddress: "469 King St W, Toronto, ON",
  contactName: "Mara Weinberg",
  contactPosition: "Warehouse Manager",
  contactNumber: "+1 416 678 2345",
  contactEmail: "weinberg@instack.com",
  categories: "Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
}


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
        <td className="warehouse__title">{data.warehouseName}</td>
        <td>{data.warehouseAddress}</td>
        <th className="locations__title-desktop">CONTACT</th>
        <td className="padding__info">{data.contactName}</td>
        <td className="warehouse__position">{data.contactPosition}</td>
        <th className="locations__title-desktop">CONTACT INFORMATION</th>
        <td className="padding__info">{data.contactNumber}</td>
        <td>{data.contactEmail}</td>
        <th className="locations__title-desktop">CATEGORIES</th>
        <td className="warehouse__category padding__info">{data.categories}</td>
        <td className="img__arrow"><img src="../Icons/SVG/Icon-arrow-right.svg" alt="right-arrow"/></td>
      </tr>

      <tr className="locations__row">
        <th className="locations__title-desktop">WAREHOUSE</th>
        <td className="warehouse__title">{data.warehouseName}</td>
        <td>{data.warehouseAddress}</td>
        <th className="locations__title-desktop">CONTACT</th>
        <td className="padding__info">{data.contactName}</td>
        <td className="warehouse__position">{data.contactPosition}</td>
        <th className="locations__title-desktop">CONTACT INFORMATION</th>
        <td className="padding__info">{data.contactNumber}</td>
        <td>{data.contactEmail}</td>
        <th className="locations__title-desktop">CATEGORIES</th>
        <td className="warehouse__category padding__info ">{data.categories}</td>
        <td className="img__arrow"><img src="../Icons/SVG/Icon-arrow-right.svg" alt="right-arrow"/></td>
      </tr>


      </tbody>
    </table>
 
    
  </div>
  )
}

export default WarehouseLocations
