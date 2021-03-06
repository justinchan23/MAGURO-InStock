import React from 'react'
import '../Styles/Inventory/styles.css'
import { Link } from 'react-router-dom'
import InventoryRmvBtn from './InventoryRmvBtn'

const InventoryRow = ({
  itemName,
  itemDes,
  lastOrd,
  location,
  quantity,
  inStock,
  id,
  getInventory,
  removeItem
}) => (
  <tr className="inventory__row">
    <th className="inventory__header mobile">ITEM</th>
    <td className="inventory__item">
      <Link to={`/inventory/` + id}>
        <b>{itemName}</b>
      </Link>
      <br />
      {itemDes}
    </td>
    <th className="inventory__header mobile">LAST ORDERED</th>
    <td>{lastOrd}</td>
    <th className="inventory__header mobile">LOCATION</th>
    <td>{location}</td>
    <th className="inventory__header mobile">QUANTITY</th>
    <td className="inventory__quantity">{quantity.toLocaleString()}</td>
    <th className="inventory__header mobile">STATUS</th>
    <td>{inStock}</td>
    <td className="kebab">
      <InventoryRmvBtn id={id} getInventory={getInventory} removeItem={removeItem} />
    </td>
  </tr>
)

export default InventoryRow
