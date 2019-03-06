import React, { useState, useRef } from 'react'
import '../Styles/InventoryNewItem/InventoryNew.css'
import Switch from 'react-switch'

const InventoryNewItem = () => {
  const productName = useRef()
  const lastOrdered = useRef()
  const city = useRef()
  const country = useRef()
  const quantity = useRef()
  const description = useRef()
  const [stockStatus, setStockStatus] = useState(true)

  const stockChange = () => {
    stockStatus ? setStockStatus(false) : setStockStatus(true)
  }

  return (
    <content className="inventoryNew">
      <div className="inventoryNew__main">
        <div className="inventoryNew__section">
          <h1>Create New</h1>
          <form className="inventoryNew__form">
            <label>
              PRODUCT
              <input
                className="inventoryNew__name"
                type="text"
                placeholder="Item Name"
                required
                ref={productName}
              />
            </label>
            <label>
              LAST ORDERED
              <input
                className="inventoryNew__name"
                type="text"
                placeholder="yyyy-mm-dd"
                required
                ref={lastOrdered}
              />
            </label>
            <label>
              CITY{' '}
              <input
                className="inventoryNew__name"
                type="text"
                placeholder="City"
                required
                ref={city}
              />
            </label>
            <label>
              COUNTRY
              <select name="country" className="inventoryNew__select" required ref={country}>
                <option value="" />
                <option value="Canada">Canada</option>
                <option value="US">US</option>
                <option value="Mexico">Mexico</option>
              </select>
            </label>
            <label>
              QUANTITY{' '}
              <input
                className="inventoryNew__name"
                type="text"
                placeholder="0"
                required
                ref={quantity}
              />
            </label>
            <label className="inventoryNew__switchContainer">
              STATUS
              <div className="inventoryNew__stock">
                <span>IN STOCK</span>
                <Switch
                  checked={stockStatus}
                  onChange={stockChange}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  className="inventoryNew__switch"
                  width={46}
                />
              </div>
            </label>
            <label>
              ITEM DESCRIPTION
              <textarea
                className="inventoryNew__comment"
                type="text"
                placeholder="(Optional)"
                required
                ref={description}
              />
            </label>
          </form>
          <div className="inventoryNew__buttons">
            <button className="inventoryNew__cancel">CANCEL</button>
            <button className="inventoryNew__button" id="inventoryNew__addButton" type="submit">
              SAVE
            </button>
          </div>
        </div>
      </div>
    </content>
  )
}

export default InventoryNewItem
