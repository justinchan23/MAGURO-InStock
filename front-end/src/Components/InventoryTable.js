import React from 'react'
import '../Styles/Inventory/styles.css'
import InventoryRow from './InventoryRow'
import axios from 'axios'

const url = 'http://localhost:8080/inventory'

class InventoryTable extends React.Component {
  state = {
    inventory: [],
    id: ''
  }

  componentDidMount() {
    axios.get(url).then(response => {
      this.setState({
        inventory: response.data
      })
    })
  }

  render() {
    const inventoryList = this.state.inventory.map((item, i) => {
      var inStock = 'In Stock'

      if (item.in_stock === false) {
        inStock = 'Out of Stock'
      }
      return (
        <InventoryRow
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
