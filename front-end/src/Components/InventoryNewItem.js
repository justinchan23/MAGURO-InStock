import React, { useState, useEffect, useRef } from 'react'
import '../Styles/InventoryNewItem/InventoryNew.css'
import Switch from 'react-switch'
import axios from 'axios'

const InventoryNewItem = () => {
  const [stockStatus, setStockStatus] = useState(true)
  const newItemForm = useRef()
  const [addStatus, setAddStatus] = useState(false)
  const apiURL = 'http://localhost:8080/inventory'

  const stockStatusChange = () => {
    stockStatus ? setStockStatus(false) : setStockStatus(true)
  }

  const addItemToggle = () => {
    setAddStatus(true)
  }

  const addNewItem = () => {
    if (
      !newItemForm.current.productName.value ||
      !newItemForm.current.lastOrdered.value ||
      !newItemForm.current.city.value ||
      !newItemForm.current.country.value ||
      !newItemForm.current.quantity.value
    ) {
      alert('All fields are required unless marked.')
    }
    const newInventoryItem = {
      name: newItemForm.current.productName.value,
      'short-description': newItemForm.current.description.value,
      'last-ordered': newItemForm.current.lastOrdered.value,
      city: newItemForm.current.city.value,
      country: newItemForm.current.country.value,
      quantity: newItemForm.current.quantity.value,
      'in-stock': stockStatus
    }

    axios.post(apiURL, newInventoryItem).then(response => {
      console.log(response)
      if (response.status === 200) {
        alert('Item successfully added')
        newItemForm.current.reset()
        setAddStatus(false)
      } else {
        alert('Error adding item. Please try again.')
      }
    })
  }

  const cancelAdd = () => {
    newItemForm.current.reset()
    setAddStatus(false)
  }

  useEffect(() => {}, [addStatus])

  if (addStatus) {
    return (
      <content className="inventoryNew">
        <div className="inventoryNew__main">
          <div className="inventoryNew__section">
            <h1>Create New</h1>
            <form className="inventoryNew__form" ref={newItemForm}>
              <label>
                PRODUCT
                <input
                  className="inventoryNew__name"
                  type="text"
                  placeholder="Item Name"
                  required
                  name="productName"
                />
              </label>
              <label>
                LAST ORDERED
                <input
                  className="inventoryNew__name"
                  type="text"
                  placeholder="mm-dd-yyyy"
                  required
                  name="lastOrdered"
                />
              </label>
              <label>
                CITY{' '}
                <input
                  className="inventoryNew__name"
                  type="text"
                  placeholder="City"
                  required
                  name="city"
                />
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
                QUANTITY{' '}
                <input
                  className="inventoryNew__name"
                  type="text"
                  placeholder="0"
                  required
                  name="quantity"
                />
              </label>
              <label className="inventoryNew__switchContainer">
                STATUS
                <div className="inventoryNew__stock">
                  <span>IN STOCK</span>
                  <Switch
                    checked={stockStatus}
                    onChange={stockStatusChange}
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
                  name="description"
                />
              </label>
            </form>
            <div className="inventoryNew__buttons">
              <button className="inventoryNew__cancel" onClick={cancelAdd}>
                CANCEL
              </button>
              <button
                className="inventoryNew__button"
                id="inventoryNew__addButton"
                type="submit"
                onClick={addNewItem}
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
        <button className="inventoryNew__addButton" onClick={addItemToggle}>
          <img src="./Icons/SVG/Icon-add.svg" alt="add" />
        </button>
      </div>
    )
  }
}

export default InventoryNewItem
