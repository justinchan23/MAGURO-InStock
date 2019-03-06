import React from 'react'
import '../Styles/InventoryNewItem/InventoryNew.css'
import Switch from 'react-switch'

const InventoryNewItem = () => {
  return (
    <content className="inventoryNew">
      <div className="inventoryNew__main">
        <div className="inventoryNew__section">
          <h1>Create New</h1>
          <form className="inventoryNew__form">
            <label>
              PRODUCT
              <input className="inventoryNew__name" type="text" placeholder="Item Name" required />
            </label>
            <label>
              LAST ORDERED
              <input className="inventoryNew__name" type="text" placeholder="yyyy-mm-dd" required />
            </label>
            <label>
              CITY <input className="inventoryNew__name" type="text" placeholder="City" required />
            </label>
            <label>
              COUNTRY
              <select name="country" className="inventoryNew__select" required>
                <option value="" />
                <option value="Canada">Canada</option>
                <option value="US">US</option>
                <option value="Mexico">Mexico</option>
              </select>
            </label>
            <label>
              QUANTITY <input className="inventoryNew__name" type="text" placeholder="0" required />
            </label>
            <label className="inventoryNew__switchContainer">
              STATUS
              <div className="inventoryNew__stock">
                <span>IN STOCK</span>
                <Switch
                  checked={true}
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
