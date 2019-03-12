import React from 'react'
import '../Styles/Inventory/styles.css'
import InventoryRow from './InventoryRow'

class InventoryTable extends React.Component {
  render() {
    const inventoryList = this.props.inventory.map((item, i) => {
      let inStock = 'In Stock'

      if (item.in_stock === false) {
        inStock = 'Out of Stock'
      }
      return (
        <InventoryRow
          removeItem={this.props.removeItem}
          getInventory={this.props.getInventory}
          key={i}
          itemName={item.name}
          itemDes={item.short_description}
          lastOrd={item.last_ordered}
          location={item.location}
          quantity={item.quantity}
          inStock={inStock}
          id={item.id}
        />
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
          </tbody>
        </table>
      </div>
    )
  }
}
export default InventoryTable
