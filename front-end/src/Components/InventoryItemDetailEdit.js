import React, { useState, useRef } from 'react'
import BackButton from '../Assets/Icons/SVG/Icon-back-arrow.svg'
import '../Styles/InventoryItemDetailEdit/InventoryItemDetailEdit.css'
import Switch from 'react-switch'
import axios from 'axios'
import { Link } from 'react-router-dom'

const InventoryItemDetailEdit = props => {
  const [stockStatus, setStockStatus] = useState(true)
  const editInventoryForm = useRef()

  const stockStatusChange = () => {
    stockStatus ? setStockStatus(false) : setStockStatus(true)
  }

  const editItem = props => {
    const itemBody = {
      long_description: editInventoryForm.current.long_description.value,
      ordered_by: editInventoryForm.current.ordered_by.value,
      reference_number: editInventoryForm.current.reference_number.value,
      last_ordered: editInventoryForm.current.last_ordered.value,
      location: editInventoryForm.current.location.value,
      quantity: editInventoryForm.current.quantity.value,
      in_stock: stockStatus,
      categories: editInventoryForm.current.categories.value
    }
    // console.log(itemBody)
    axios.put(`http://localhost:8080/inventory/${props.itemDetails.id}`, itemBody).then(() => {
      return props.getInventoryDetail()
    })
    props.editToggle()
  }

  return (
    <div className="iide">
      <div className="iide__bigblock">
        <div className="iide__one">
          <Link to="/inventory">
            <img className="iide__backbutton" src={BackButton} alt="backbutton" />
          </Link>
          <h2 className="iide__one__title">{props.itemDetails.name}</h2>
        </div>
        <hr className="iide__hr" />
        <div className="iide__desk">
          <form className="iide__form" ref={editInventoryForm}>
            <div className="iide__description__container">
              <label className="iide__header">ITEM DESCRIPTION</label>
              <input
                className="iide__description color"
                defaultValue={props.itemDetails.long_description}
                name="long_description"
              />
            </div>
            <div className="iide__desk__two">
              <div className="iide__info__chunk">
                <div className="iide__block">
                  <div className="iide__sub">
                    <label className="iide__header">ORDERED BY</label>
                    <input
                      className="iide__input color"
                      defaultValue={props.itemDetails.ordered_by}
                      name="ordered_by"
                    />
                  </div>
                  <div>
                    <label className="iide__header">LAST ORDERED</label>
                    <input
                      className="iide__input color"
                      defaultValue={props.itemDetails.last_ordered}
                      name="last_ordered"
                    />
                  </div>
                </div>
                <div className="iide__block">
                  <div className="iide__sub">
                    <label className="iide__header">REFERENCE NUMBER</label>
                    <input
                      className="iide__input reference color"
                      defaultValue={props.itemDetails.reference_number}
                      name="reference_number"
                    />
                  </div>
                  <div className="iide__locations">
                    <label className="iide__header">LOCATION</label>
                    <select
                      name="location"
                      className="iide__select color"
                      required
                      defaultValue="Canada"
                    >
                      <option value="" />
                      <option value="Canada">Canada</option>
                      <option value="US">US</option>
                      <option value="Mexico">Mexico</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="iide__block__bottom">
                <div className="iide__sub">
                  <div className="iide__block__status">
                    <div className="iide__sub">
                      <label className="iide__header">QUANTITY</label>
                      <input
                        className="iide__input quantity color"
                        defaultValue={props.itemDetails.quantity}
                        name="quantity"
                      />
                    </div>
                    <label className="iide__toggle__container">
                      STATUS
                      <div className="iide__stock">
                        <span className="iide__toggle">IN STOCK</span>
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
                  </div>
                  <div className="iide__categories__container">
                    <label className="iide__header">CATEGORIES</label>
                    <input
                      className="iide__input__categories color"
                      defaultValue={props.itemDetails.categories}
                      name="categories"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="iide__block__foot">
          <div>
            <button className="iide__button__save" onClick={() => editItem(props)}>
              SAVE
            </button>
          </div>
          <button className="iide__button__cancel" onClick={() => props.editToggle()}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  )
}
export default InventoryItemDetailEdit
