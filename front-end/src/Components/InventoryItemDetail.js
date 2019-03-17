import React, { Component } from 'react'
import '../Styles/InventoryItemDetail/InventoryItemDetail.css'
// import BackButton from '../Assets/Icons/SVG/Icon-back-arrow.svg'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import InventoryItemDetailEdit from './InventoryItemDetailEdit'
import InventoryItemDetails from './InventoryItemDetails'

class InventoryItemDetail extends Component {
  state = {
    itemDetails: [],
    editItem: false
  }

  componentDidMount() {
    this.getInventoryDetail()
  }

  editToggle = () => {
    this.state.editItem ? this.setState({ editItem: false }) : this.setState({ editItem: true })
  }

  getInventoryDetail = () => {
    axios.get(`http://localhost:8080/inventory/${this.props.match.params.id}`).then(response => {
      this.setState({ itemDetails: response.data })
    })
  }

  render() {
    let stock = 'In Stock'
    if (!this.state.itemDetails.in_stock) {
      stock = 'Out of Stock'
    }
    if (!this.state.editItem) {
      return (
        <div>
          <InventoryItemDetails
            itemDetails={this.state.itemDetails}
            stock={stock}
            editToggle={this.editToggle}
          />
        </div>
      )
    } else {
      return (
        <div>
          <div className="iid">
            <InventoryItemDetailEdit
              itemDetails={this.state.itemDetails}
              stock={stock}
              editToggle={this.editToggle}
              getInventoryDetail={this.getInventoryDetail}
            />
          </div>
        </div>
      )
    }
  }
}
export default InventoryItemDetail
