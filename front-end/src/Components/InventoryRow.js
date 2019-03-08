import React from 'react'
import '../Styles/Inventory/styles.css'

const InventoryRow = ({ itemName, itemDes, lastOrd, location, quantity, inStock }) => (
  <tr className="inventory__row">
    <th className="inventory__header mobile">ITEM</th>
    <td className="inventory__item">
      <b>{itemName}</b>
      <br />
      {itemDes}
    </td>
    <th className="inventory__header mobile">LAST ORDERED</th>
    <td>{lastOrd}</td>
    <th className="inventory__header mobile">LOCATION</th>
    <td>{location}</td>
    <th className="inventory__header mobile">QUANTITY</th>
    <td className="inventory__quantity">{quantity}</td>
    <th className="inventory__header mobile">STATUS</th>
    <td>{inStock}</td>
    <td className="kebab">
      <img src="../Icons/SVG/Icon-kebab-default.svg" alt="" />
    </td>
  </tr>
)

export default InventoryRow
