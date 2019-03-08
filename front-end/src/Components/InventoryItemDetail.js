import React, { Component } from 'react'
import '../Styles/InventoryItemDetail/InventoryItemDetail.css'
import BackButton from '../Assets/Icons/SVG/Icon-back-arrow.svg'
import { Link } from 'react-router-dom'

class InventoryItemDetail extends Component {
  render() {
    return (
      <div className="iid">
        <div className="iid__one">
          <Link to="/inventory">
            <img className="iid__backbutton" src={BackButton} alt="backbutton" />
          </Link>
          <h2 className="iid__one__title">Product Name</h2>
          <button className="iid__one__button">In Stock</button>
        </div>
        <hr className="iid__hr" />
        <div className="iid__desk">
          <div className="iid__two">
            <h4 className="iid__header">ITEM DESCRIPTION</h4>
            <p className="iid__info__two">
              Here is a more detailed summary of the product name, it’s uses, industries and
              possible attributes that could be used to describe the product.
            </p>
          </div>
          <div>
            <div className="iid__info__chunk">
              <div className="iid__block">
                <div className="iid__sub">
                  <h4 className="iid__header">ORDERED BY</h4>
                  <p className="iid__info">5/24/2018</p>
                </div>
                <div>
                  <h4 className="iid__header">LAST ORDERED</h4>
                  <p className="iid__info">12000</p>
                </div>
              </div>
              <div className="iid__block">
                <div className="iid__sub">
                  <h4 className="iid__header">REFERENCE NUMBER</h4>
                  <p className="iid__info">JK2020FD7811201</p>
                </div>
                <div>
                  <h4 className="iid__header">LOCATION</h4>
                  <p className="iid__info">Toronto, CAN</p>
                </div>
              </div>
            </div>
            <div className="iid__block__bottom">
              <div className="iid__sub">
                <div className="iid__block">
                  <div className="iid__sub">
                    <h4 className="iid__header">QUANTITY</h4>
                    <p className="iid__info">12000</p>
                  </div>
                </div>
                <h4 className="iid__header">CATEGORIES</h4>
                <p className="iid__info">
                  Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation, Sales
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="iid__hr" />
        <div className="iid__block__button">
          <button className="iid__button">EDIT</button>
        </div>
      </div>
    )
  }
}
export default InventoryItemDetail
