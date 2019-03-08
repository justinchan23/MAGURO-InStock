import React from 'react'
import '../Styles/Inventory/styles.css'

const inventory = [
  {
    itemName: 'Product Name',
    itemDes: 'Brief description about the item',
    lastOrd: '05/24/2018',
    location: 'Toronto, Canada',
    quantity: '12,000',
    inStock: 'In Stock'
  }
]

class InventoryTable extends React.Component {

  render() {
    const inventoryList = inventory.map((item, id) => {
      return (
        <tr className='inventory__row' key={id}>
          <th className='inventory__header mobile'>ITEM</th>
          <td className='inventory__item'>
            <b>{item.itemName}</b>
            <br />
            {item.itemDes}
          </td>
          <th className='inventory__header mobile'>LAST ORDERED</th>
          <td>{item.lastOrd}</td>
          <th className='inventory__header mobile'>LOCATION</th>
          <td>{item.location}</td>
          <th className='inventory__header mobile'>QUANTITY</th>
          <td className='inventory__quantity'>{item.quantity}</td>
          <th className='inventory__header mobile'>STATUS</th>
          <td>{item.inStock}</td>
          <td className='kebab'>
            <img src='../Icons/SVG/Icon-kebab-default.svg' alt='' />
          </td>
        </tr>
      )
    })
    return (
      <div className='inventory__table'>
        <table>
          <tbody>
            <tr className='inventory__header--desktop'>
              <th className='inventory__header inventory__item desktop'>ITEM</th>
              <th className='inventory__header desktop'>LAST ORDERED</th>
              <th className='inventory__header desktop'>LOCATION</th>
              <th className='inventory__header desktop'>QUANTITY</th>
              <th className='inventory__header desktop'>STATUS</th>
            </tr>
            {inventoryList}
            {inventoryList}
          </tbody>
        </table>
      </div>
    )
  }
}
export default InventoryTable