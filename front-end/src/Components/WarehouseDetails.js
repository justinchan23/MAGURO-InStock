import React, { Component } from 'react'
import '../Styles/WarehouseDetails/WarehouseDetails.css'
import '../Styles/Inventory/styles.css'
import BackButton from '../Assets/Icons/SVG/Icon-back-arrow.svg'
import { Link } from 'react-router-dom'
import InventoryTable from './InventoryTable'
import axios from 'axios'

class WarehouseDetails extends Component {
  state = {
    currentdata: [],
    dataLoaded: false
  }
  componentDidMount() {
    this.getWarehouseName()
  }

  getWarehouseName = () => {
    axios.get(`http://localhost:8080/warehouses/${this.props.match.params.id}`).then(response => {
      this.setState({ currentdata: response.data, dataLoaded: true })
    })
  }

  render() {
    if (this.state.dataLoaded === true) {
      return (
        <div>
          <div className="cd__top__general">
            <div className="cd">
              <div className="cd__one">
                <Link to="/warehouses">
                  <img className="cd__backbutton" src={BackButton} alt="backbutton" />
                </Link>
                <h1 className="cd__one__title">Warehouse Name</h1>
              </div>
              <hr className="cd__hr" />
              <div className="cd__desk">
                <div className="cd__info__chunk">
                  <div className="cd__block">
                    <h4 className="cd__header">ADDRESS</h4>
                    <div className="cd__info__block">
                      <p className="cd__info">123 Main Street W.</p>
                      <p className="cd__info">Suite 201</p>
                    </div>
                    <div className="cd__info__block">
                      <p className="cd__info">Toronto,</p>
                      <p className="cd__info">ON M65GB7 CA</p>
                    </div>
                  </div>
                  <div className="cd__block">
                    <h4 className="cd__header">CONTACT</h4>
                    <div className="cd__info__block">
                      <p className="cd__info">Mara Weinberg</p>
                      <p className="cd__info">Warehouse Manager</p>
                    </div>
                    <div className="cd__info__block">
                      <p className="cd__info">+1 416 678 2345</p>
                      <p className="cd__info">weinberg@instock.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inventory__container warehouse">
            <InventoryTable inventory={this.state.currentdata.inventory} />
          </div>
        </div>
      )
    } else {
      return <div>Loading</div>
    }
  }
}
export default WarehouseDetails