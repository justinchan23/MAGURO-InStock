import React from 'react'
import '../Styles/WarehouseNew/WarehouseNew.css'
// import Switch from 'react-switch'

const WarehouseNewLocation = () => {
  return (
    <content className="warehouseNew">
      <div className="warehouseNew__main">
        <div className="warehouseNew__section">
          <h1>Add New</h1>
          <form className="warehouseNew__form">
            <label className="warehouseNew__top">
              WAREHOUSE
              <input
                className="warehouseNew__name"
                type="text"
                placeholder="Name &amp; ID"
                required
              />
            </label>
            <label>
              ADDRESS
              <input
                className="warehouseNew__name"
                type="text"
                placeholder="Enter Address"
                required
              />
            </label>
            <label>
              LOCATION
              <select name="country" className="warehouseNew__select" required>
                <option value="" />
                <option value="Toronto, ON">Toronto, CAN</option>
                <option value="America, US">America, US</option>
                <option value="Mexico, MX">Mexico, MX</option>
              </select>
            </label>
            <label>
              CONTACT NAME
              <input className="warehouseNew__name" type="text" placeholder="Enter name" required />
            </label>
            <label>
              POSITION{' '}
              <input
                className="warehouseNew__name"
                type="text"
                placeholder="Enter position"
                required
              />
            </label>
            <label>
              PHONE NUMBER{' '}
              <input
                className="warehouseNew__name"
                type="text"
                placeholder="000-000-0000"
                required
              />
            </label>
            <label>
              EMAIL{' '}
              <input
                className="warehouseNew__name"
                type="text"
                placeholder="email@instock.com"
                required
              />
            </label>
            <label>
              CATEGORIES
              <textarea
                className="warehouseNew__comment"
                type="text"
                placeholder="Use commas to separate each category"
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
