import React, { useState, useEffect, useRef } from 'react'
import '../Styles/WarehouseNew/WarehouseNew.css'
// import axios from 'axios'

const WarehouseNewLocation = () => {
  const [addWarehouseStatus, setAddWarehouseStatus] = useState(false)
  const newWarehouseForm = useRef()
  // const apiURL = 'http://localhost:8080/warehouses'

  const cancelAdd = () => {
    newWarehouseForm.current.reset()
    setAddWarehouseStatus(false)
  }

  const addWarehouseToggle = () => {
    setAddWarehouseStatus(true)
  }

  const addWarehouse = () => {
    if (
      !newWarehouseForm.current.productName.value ||
      !newWarehouseForm.current.lastOrdered.value ||
      !newWarehouseForm.current.city.value ||
      !newWarehouseForm.current.country.value ||
      !newWarehouseForm.current.quantity.value
    ) {
      alert('All fields are required unless marked.')
    }
    // const newWarehouse = {
    //   'warehouse-name': newWarehouseForm.current.warehouseName.value,
    //   address:
    //     newWarehouseForm.current.address.value + ', ' + newWarehouseForm.current.location.value,
    //   'contact-name': newWarehouseForm.current.contactName.value,
    //   'contact-title': newWarehouseForm.current.position.value,
    //   'contact-phone': newWarehouseForm.current.phoneNumber.value,
    //   'contact-email': newWarehouseForm.current.email.value,
    //   categories: newWarehouseForm.current.categories.value
    // }

    // axios.post(apiURL, newWarehouse).then(response => {
    //   console.log(response)
    //   if (response.status === 200) {
    //     alert('Item successfully added')
    //     newWarehouseForm.current.reset()
    //     setAddWarehouseStatus(false)
    //   } else {
    //     alert('Error adding item. Please try again.')
    //   }
    // })
  }

  useEffect(() => {}, [addWarehouseStatus])

  if (addWarehouseStatus) {
    return (
      <content className="warehouseNew">
        <div className="warehouseNew__main">
          <div className="warehouseNew__section">
            <h1>Add New</h1>
            <form className="warehouseNew__form" ref={newWarehouseForm}>
              <label className="warehouseNew__top">
                WAREHOUSE
                <input
                  className="warehouseNew__name"
                  type="text"
                  placeholder="Name &amp; ID"
                  required
                  name="warehouseName"
                />
              </label>
              <label>
                ADDRESS
                <input
                  className="warehouseNew__name"
                  type="text"
                  placeholder="Enter Address"
                  required
                  name="address"
                />
              </label>
              <label>
                LOCATION
                <select name="location" className="warehouseNew__select" required>
                  <option value="" />
                  <option value="Toronto, ON">Toronto, CAN</option>
                  <option value="America, US">America, US</option>
                  <option value="Mexico, MX">Mexico, MX</option>
                </select>
              </label>
              <label>
                CONTACT NAME
                <input
                  className="warehouseNew__name"
                  type="text"
                  placeholder="Enter name"
                  required
                  name="contactName"
                />
              </label>
              <label>
                POSITION
                <input
                  className="warehouseNew__name"
                  type="text"
                  placeholder="Enter position"
                  required
                  name="position"
                />
              </label>
              <label>
                PHONE NUMBER
                <input
                  className="warehouseNew__name"
                  type="text"
                  placeholder="000-000-0000"
                  required
                  name="phoneNumber"
                />
              </label>
              <label>
                EMAIL
                <input
                  className="warehouseNew__name"
                  type="text"
                  placeholder="email@instock.com"
                  required
                  name="email"
                />
              </label>
              <label>
                CATEGORIES
                <textarea
                  className="warehouseNew__comment"
                  type="text"
                  placeholder="Use commas to separate each category"
                  required
                  name="categories"
                />
              </label>
            </form>
            <div className="warehouseNew__buttons">
              <button className="warehouseNew__cancel" onClick={cancelAdd}>
                CANCEL
              </button>
              <button
                className="warehouseNew__button"
                id="warehouseNew__addButton"
                type="submit"
                onClick={addWarehouse}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </content>
    )
  } else {
    return (
      <div>
        <button className="warehouseNew__addButton" onClick={addWarehouseToggle}>
          <img src="./Icons/SVG/Icon-add.svg" alt="add" />
        </button>
      </div>
    )
  }
}

export default WarehouseNewLocation
