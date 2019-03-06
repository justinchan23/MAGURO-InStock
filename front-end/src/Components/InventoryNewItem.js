import React from 'react'
import '../Styles/InventoryNewItem/InventoryNew.css'
import Switch from 'react-switch'

const InventoryNewItem = () => {
  return (
    <content className="warehouseNew">
      <div className="warehouseNew__main">
        <div className="warehouseNew__section">
          <h1>Create New</h1>
          <form className="warehouseNew__form">
            <label>
              PRODUCT <input className="warehouseNew__name" type="text" placeholder="Item Name" />
            </label>
            <label>
              LAST ORDERED
              <input className="warehouseNew__name" type="text" placeholder="yyyy-mm-dd" />
            </label>
            <label>
              CITY <input className="warehouseNew__name" type="text" placeholder="City" />
            </label>
            <label>
              COUNTRY
              <select name="country" className="warehouseNew__select">
                <option value="Canada">Canada</option>
                <option value="US">US</option>
                <option value="Mexico">Mexico</option>
              </select>
            </label>
            <label>
              QUANTITY <input className="warehouseNew__name" type="text" placeholder="0" />
            </label>
            <label className="warehouseNew__switchContainer">
              STATUS
              <div className="warehouseNew__stock">
                <span>IN STOCK</span>
                <Switch
                  checked={false}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  className="warehouseNew__switch"
                />
              </div>
            </label>
            <label>
              ITEM DESCRIPTION
              <textarea className="warehouseNew__comment" type="text" placeholder="(Optional)" />
            </label>
          </form>
          <div className="warehouseNew__buttons">
            <button className="warehouseNew__cancel">CANCEL</button>
            <button className="warehouseNew__button" id="warehouseNew__addButton" type="submit">
              SAVE
            </button>
          </div>
        </div>
      </div>
    </content>
  )
}

export default InventoryNewItem
