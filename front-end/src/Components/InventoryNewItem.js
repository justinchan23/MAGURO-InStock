import React from 'react'
import '../Styles/InventoryNewItem/InventoryNew.css'

const InventoryNewItem = () => {
  return (
    <content class="warehouseNew">
      <div class="warehouseNew__main">
        <div class="warehouseNew__section">
          <h1>Create New</h1>
          <form class="warehouseNew__form">
            <label for="product">
              PRODUCT <input class="warehouseNew__name" type="text" placeholder="Item Name" />
            </label>
            <label for="lastOrdered">
              LAST ORDERED <input class="warehouseNew__name" type="text" placeholder="yyyy-mm-dd" />
            </label>
            <label for="city">
              CITY <input class="warehouseNew__name" type="text" placeholder="City" />
            </label>
            <label for="country">
              COUNTRY
              <select name="country" class="warehouseNew__select">
                <option value="Canada">Canada</option>
                <option value="US">US</option>
                <option value="Mexico">Mexico</option>
              </select>
            </label>
            <label for="quantity">
              QUANTITY <input class="warehouseNew__name" type="text" placeholder="0" />
            </label>
            <label for="status">
              STATUS <input class="warehouseNew__name" type="text" placeholder="instock value" />
            </label>
            <label for="itemDescription">
              ITEM DESCRIPTION
              <textarea class="warehouseNew__comment" type="text" placeholder="(Optional)" />
            </label>
          </form>
          <div class="warehouseNew__buttons">
            <button class="warehouseNew__cancel">CANCEL</button>
            <button class="warehouseNew__button" id="warehouseNew__addButton" type="submit">
              SAVE
            </button>
          </div>
        </div>
      </div>
    </content>
  )
}

export default InventoryNewItem
