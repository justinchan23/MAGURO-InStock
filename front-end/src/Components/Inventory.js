import React from 'react'
import '../Styles/Inventory/styles.css'

const inventory = [
  {
    itemName: 'Product Name',
    itemDes: 'Brief description about the item',
    lastOrd: '05/24/2018',
    location: 'Toronto, Canada',
    quantity: '12,000',
    inStock: "In Stock"
  }
]

class Inventory extends React.Component {
  render() {
    const inventoryList = inventory.map((item, id) => {
      return (
        <tr className="inventory__row" key={id}>
        <th className="inventory__header mobile">ITEM</th>
        <td><b>{item.itemName}</b><br />{item.itemDes}</td>
        <th className="inventory__header mobile">LAST ORDERED</th>
        <td>{item.lastOrd}</td>
        <th className="inventory__header mobile">LOCATION</th>
        <td>{item.location}</td>
        <th className="inventory__header mobile">QUANTITY</th>
        <td>{item.quantity}</td>
        <th className="inventory__header mobile">STATUS</th>
        <td>{item.inStock}</td>
        <td className="kebab"><img src="../Icons/SVG/Icon-kebab-default.svg" alt="" /></td>
      </tr>
      )
    })
    return (
      <div className="inventory__container">
        <div className="inventory__container-header">
          <h1>Inventory</h1>
          <input
            type="text"
            placeholder="Search"
            className="inventory__search"
            alt="search"
          />
        </div>
        <table>
          <tbody>
            <tr className="inventory__header--desktop">
              <th className="inventory__header desktop">ITEM</th>
              <th className="inventory__header desktop">LAST ORDERED</th>
              <th className="inventory__header desktop">LOCATION</th>
              <th className="inventory__header desktop">QUANTITY</th>
              <th className="inventory__header desktop">STATUS</th>
            </tr>
            {inventoryList}
            {inventoryList}
          </tbody>
        </table>  
      </div>
    )
  }
}
export default Inventory
