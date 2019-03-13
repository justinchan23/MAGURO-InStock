import React, { Component } from 'react'
import '../Styles/InventoryItemDetail/InventoryItemDetail.css'
import BackButton from '../Assets/Icons/SVG/Icon-back-arrow.svg'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import InventoryItemDetailEdit from './InventoryItemDetailEdit';

class InventoryItemDetail extends Component {
  state = {
    itemDetails: []
  }
  componentDidMount() {
    this.getInventoryDetail()
  }
  getInventoryDetail = () => {
    axios.get(`http://localhost:8080/inventory/${this.props.match.params.id}`).then(response => {
      this.setState({ itemDetails: response.data })
    })
  }
  render() {
    return (
<<<<<<< HEAD
      <div className='iid'>
        <div className='iid__one'>
          <Link to='/inventory'>
            <img className='iid__backbutton' src={BackButton} alt='backbutton' />
          </Link>
          <h2 className='iid__one__title'>{this.state.itemDetails.name}</h2>
          <button className='iid__one__button'>In Stock</button>
=======
      <div className="iid">
        <div className="iid__one">
          <img
            className="iid__backbutton"
            src={BackButton}
            alt="backbutton"
            onClick={() => this.props.history.goBack()}
          />
          <h2 className="iid__one__title">{this.state.name}</h2>
          <button className="iid__one__button">In Stock</button>
>>>>>>> b953cfba4986bb78e27bfce1ff0c78718262401f
        </div>
        <hr className="iid__hr" />
        <div className="iid__desk">
          <div className="iid__two">
            <h4 className="iid__header">ITEM DESCRIPTION</h4>
            <p className="iid__info__two">{this.state.itemDetails.short_description}</p>
          </div>
          <div>
            <div className="iid__info__chunk">
              <div className="iid__block">
                <div className="iid__sub">
                  <h4 className="iid__header">ORDERED BY</h4>
                  <p className="iid__info">{this.state.itemDetails.ordered_by}</p>
                </div>
                <div>
                  <h4 className="iid__header">LAST ORDERED</h4>
                  <p className="iid__info">{this.state.itemDetails.last_ordered}</p>
                </div>
              </div>
              <div className="iid__block">
                <div className="iid__sub">
                  <h4 className="iid__header">REFERENCE NUMBER</h4>
                  <p className="iid__info">{this.state.itemDetails.reference_number}</p>
                </div>
                <div>
                  <h4 className="iid__header">LOCATION</h4>
                  <p className="iid__info">{this.state.itemDetails.location}</p>
                </div>
              </div>
            </div>
            <div className="iid__block__bottom">
              <div className="iid__sub">
                <div className="iid__block">
                  <div className="iid__sub">
                    <h4 className="iid__header">QUANTITY</h4>
                    <p className="iid__info">{this.state.itemDetails.quantity}</p>
                  </div>
                </div>
                <h4 className="iid__header">CATEGORIES</h4>
                <p className="iid__info">{this.state.itemDetails.categories}</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="iid__hr" />
        <div className="iid__block__button">
          <button className="iid__button">EDIT</button>
        </div>
        <InventoryItemDetailEdit/>
      </div>
    )
  }
}
export default InventoryItemDetail
