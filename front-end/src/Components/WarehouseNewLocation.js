import React from 'react'
import '../Styles/WarehouseNew/WarehouseNew.css'

const WarehouseNewLocation = () => {
  return (
    <content className="warehouseNew">
      <div className="warehouseNew__main">
        <div className="warehouseNew__section">
          <h1>Create New</h1>
          <form className="warehouseNew__form">
            <label>
              PRODUCT
              <input className="warehouseNew__name" type="text" placeholder="Item Name" required />
            </label>
            <label>
              LAST ORDERED
              <input className="warehouseNew__name" type="text" placeholder="yyyy-mm-dd" required />
            </label>
            <label>
              CITY <input className="warehouseNew__name" type="text" placeholder="City" required />
            </label>
            <label>
              COUNTRY
              <select name="country" className="warehouseNew__select" required>
                <option value="" />
                <option value="Canada">Canada</option>
                <option value="US">US</option>
                <option value="Mexico">Mexico</option>
              </select>
            </label>
            <label>
              QUANTITY <input className="warehouseNew__name" type="text" placeholder="0" required />
            </label>
            <label className="warehouseNew__switchContainer">
              STATUS
              <div className="warehouseNew__stock">
                <span>IN STOCK</span>
                {/* <Switch
                  checked={true}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  className="warehouseNew__switch"
                  width={46}
                /> */}
              </div>
            </label>
            <label>
              ITEM DESCRIPTION
              <textarea
                className="warehouseNew__comment"
                type="text"
                placeholder="(Optional)"
                required
              />
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

export default WarehouseNewLocation
