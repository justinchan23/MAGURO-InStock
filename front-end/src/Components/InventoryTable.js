import React from 'react'
import '../Styles/Inventory/styles.css'
import InventoryRow from './InventoryRow'

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
    const inventoryList = inventory.map((item, i) => {
      return (
        <InventoryRow
          key={i}
          itemName={item.itemName}
          itemDes={item.itemDes}
          lastOrd={item.lastOrd}
          location={item.location}
          quantity={item.quantity}
          inStock={item.inStock}
        />
      )
    })
    return (
      <div className="inventory__table">
        <table>
          <tbody>
            <tr className="inventory__header--desktop">
              <th className="inventory__header inventory__item desktop">ITEM</th>
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
export default InventoryTable
