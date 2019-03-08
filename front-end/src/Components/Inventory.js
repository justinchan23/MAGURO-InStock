import React from 'react'
import InventoryTable from './InventoryTable'
import '../Styles/Inventory/styles.css'


class Inventory extends React.Component {
  render() {
    return (
      <div className='inventory__container'>
        <div className='inventory__container-header'>
          <h1>Inventory</h1>
          <input type='text' placeholder='Search' className='inventory__search' alt='search' />
        </div>
        <InventoryTable />
      </div>
    )
  }
}
export default Inventory