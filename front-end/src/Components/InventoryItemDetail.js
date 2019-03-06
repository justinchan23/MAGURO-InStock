import React, { Component } from 'react'
import '../Styles/InventoryItemDetail/InventoryItemDetail.css'

class InventoryItemDetail extends Component {
  render() {
    return (
      <div className='iid'>
        <div className='iid__one'>
          <h2 className='iid__one__title'>Product Name</h2>
          <button className='iid__one__button'>In Stock</button>
        </div>
        <div className='iid__two'>
          <h4 className='iid__header'>ITEM DESCRIPTION</h4>
          <p className='iid__info'>
            Here is a more detailed summary of the product name, it’s uses, industries and possible
            attributes that could be used to describe the product.
          </p>
        </div>
        <div className='iid__info__chunk'>
        <div className='iid__block'>
          <div className='iid__sub'>
            <h4 className='iid__header'>ORDERED BY</h4>
            <h4 className='iid__info'>5/24/2018</h4>
          </div>
          <div>
            <h4 className='iid__header'>LAST ORDERED</h4>
            <h4 className='iid__info'>12000</h4>
          </div>
        </div>
        <div className='iid__block'>
          <div className='iid__sub'>
            <h4 className='iid__header'>REFERENCE NUMBER</h4>
            <h4 className='iid__info'>JK2020FD7811201</h4>
          </div>
          <div>
            <h4 className='iid__header'>LOCATION</h4>
            <h4 className='iid__info'>Toronto, CAN</h4>
          </div>
        </div>
        </div>
        <div className='iid__block'>
          <div className='iid__sub'>
            <h4 className='iid__header'>CATEGORIES</h4>
            <h4 className='iid__info'>
              Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation, Sales
            </h4>
          </div>
        </div>
        <div className='iid__block__button'>
          <button className='iid__button'>EDIT</button>
        </div>
      </div>
    )
  }
}
export default InventoryItemDetail
