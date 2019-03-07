import React from 'react'
import '../Styles/WarehouseLocations-CSS/styles.css'

const data = {
  warehouseName: "Warehouse Number 1",
  warehouseAddress: "469 King St W, Toronto, ON",
  contactName: "Mara Weinberg",
  contactPosition: "Warehouse Manager",
  contactNumber: "+1 416 678 2345",
  contactEmail: "weinberg@instack.com",
  categories: "Industrial, Automotive, Heavy"
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
          <tr className="locations__titles">
            <th className="locations__title-desktop warehouse">WAREHOUSE</th>
            <th className="locations__title-desktop contact">CONTACT</th>
            <th className="locations__title-desktop contact__info">CONTACT INFORMATION</th>
            <th className="locations__title-desktop">CATEGORIES</th>
          </tr>
          <tr className="locations__row">
            <td className="warehouse__title tablet-view"><b>{data.warehouseName}</b><br />{data.warehouseAddress}</td>
            <td className="padding__info">{data.contactName}<br /><i>{data.contactPosition}</i></td>
            <td className="padding__info">{data.contactNumber}<br />{data.contactEmail}</td>
            <td className="warehouse__category padding__info">{data.categories}</td>
            <td className="img__arrow"><img src="../Icons/SVG/Icon-arrow-right.svg" alt="right-arrow" /></td>
          </tr>
          <tr className="locations__row">
            <td className="warehouse__title tablet-view"><b>{data.warehouseName}</b><br />{data.warehouseAddress}</td>
            <td className="padding__info">{data.contactName}<br /><i>{data.contactPosition}</i></td>
            <td className="padding__info">{data.contactNumber}<br />{data.contactEmail}</td>
            <td className="warehouse__category padding__info ">{data.categories}</td>
            <td className="img__arrow"><img src="../Icons/SVG/Icon-arrow-right.svg" alt="right-arrow" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// const warehouses = {
//   name: "Warehouse Number 1",
//   address: "469 King St W, Toronto, ON",
//   ContactName: "Mara Weinberg",
//   ContactPosition: "Warehouse Manager",
//   ContactNumber: "+1 416 678 2345",
//   ContactEmail: "weinberg@instack.com",
//   categories: "Industrial, Automotive, Heavy"  
// }

// class WarehouseLocations extends React.Component {
//   render() {
//     const warehouseList = warehouses.map((warehouse, id) => {
//       return (
//           <tr className="locations__row">
//             <td className="warehouse__title tablet-view"><b>{warehouse.name}</b><br />{warehouse.address}</td>
//             <td className="padding__info">{warehouse.ContactName}<br /><i>{warehouse.ContactPosition}</i></td>
//             <td className="padding__info">{warehouse.ContactNumber}<br />{warehouse.ContactEmail}</td>
//             <td className="warehouse__category padding__info">{warehouse.categories}</td>
//             <td className="img__arrow"><img src="../Icons/SVG/Icon-arrow-right.svg" alt="right-arrow" /></td>
//           </tr>        
//       )
//     })
  
//   return (
//     <div className="locations__container">
//       <div className="locations__container-header">
//         <h1>Locations</h1>
//         <input
//           type="text"
//           placeholder="Search"
//           className="locations__search"
//           alt="search"
//         />
//       </div>
//       <table>
//         <tbody>
//           <tr className="locations__titles">
//             <th className="locations__title-desktop warehouse">WAREHOUSE</th>
//             <th className="locations__title-desktop contact">CONTACT</th>
//             <th className="locations__title-desktop contact__info">CONTACT INFORMATION</th>
//             <th className="locations__title-desktop">CATEGORIES</th>
//           </tr>
//           {warehouseList}
//           </tr>
//         </tbody>
//         </table>
//     </div>    
//   )}
// }



export default WarehouseLocations
