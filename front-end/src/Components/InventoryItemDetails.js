import React from 'react'
import '../Styles/InventoryItemDetail/InventoryItemDetail.css'
import BackButton from '../Assets/Icons/SVG/Icon-back-arrow.svg'
import { Link } from 'react-router-dom'

const InventoryItemDetails = props => {
  let stock = 'In Stock'
  if (!props.itemDetails.in_stock) {
    stock = 'Out of Stock'
  }
  return (
    // <div>
    <div className="iid">
      <div className="iid__one">
        <Link to="/inventory">
          <img className="iid__backbutton" src={BackButton} alt="backbutton" />
        </Link>
        <h2 className="iid__one__title">{props.itemDetails.name}</h2>
        <button className="iid__one__button">{stock}</button>
      </div>
      <hr className="iid__hr" />
      <div className="iid__desk">
        <div className="iid__two">
          <h4 className="iid__header">ITEM DESCRIPTION</h4>
          <p className="iid__info__two">{props.itemDetails.long_description}</p>
        </div>
        <div>
          <div className="iid__info__chunk">
            <div className="iid__block">
              <div className="iid__sub">
                <h4 className="iid__header">ORDERED BY</h4>
                <p className="iid__info">{props.itemDetails.ordered_by}</p>
              </div>
              <div>
                <h4 className="iid__header">LAST ORDERED</h4>
                <p className="iid__info">{props.itemDetails.last_ordered}</p>
              </div>
            </div>
            <div className="iid__block">
              <div className="iid__sub">
                <h4 className="iid__header">REFERENCE NUMBER</h4>
                <p className="iid__info">{props.itemDetails.reference_number}</p>
              </div>
              <div>
                <h4 className="iid__header">LOCATION</h4>
                <p className="iid__info">{props.itemDetails.location}</p>
              </div>
            </div>
          </div>
          <div className="iid__block__bottom">
            <div className="iid__sub">
              <div className="iid__block">
                <div className="iid__sub">
                  <h4 className="iid__header">QUANTITY</h4>
                  <p className="iid__info">{props.itemDetails.quantity}</p>
                </div>
              </div>
              <h4 className="iid__header">CATEGORIES</h4>
              <p className="iid__info">{props.itemDetails.categories}</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="iid__hr" />
      <div className="iid__block__button">
        <button className="iid__button" onClick={() => props.editToggle()}>
          EDIT
        </button>
      </div>
    </div>
    // </div>
  )
}

export default InventoryItemDetails
