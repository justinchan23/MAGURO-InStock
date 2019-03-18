import React, { Component } from 'react'
import '../Styles/WarehouseDetails/WarehouseDetails.css'
import '../Styles/Inventory/styles.css'
import BackButton from '../Assets/Icons/SVG/Icon-back-arrow.svg'
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
    const { currentdata, dataLoaded } = this.state
    if (dataLoaded === true) {
      return (
        <div>
          <div className="cd__top__general slide-in-left">
            <div className="cd">
              <div className="cd__one">
                <img
                  className="cd__backbutton"
                  src={BackButton}
                  alt="backbutton"
                  onClick={() => this.props.history.goBack()}
                />

                <h1 className="cd__one__title">{currentdata.warehouse_name}</h1>
              </div>
              <hr className="cd__hr" />
              <div className="cd__desk">
                <div className="cd__info__chunk">
                  <div className="cd__block">
                    <h4 className="cd__header">ADDRESS</h4>
                    <div className="cd__info__block">
                      <p className="cd__info">{currentdata.address}</p>
                      <p className="cd__info">Suite 201</p>
                    </div>
                    <div className="cd__info__block">
                      <p className="cd__info">{}</p>
                      <p className="cd__info">
                        {currentdata.postal_code + ', ' + currentdata.country_code}
                      </p>
                    </div>
                  </div>
                  <div className="cd__block">
                    <h4 className="cd__header">CONTACT</h4>
                    <div className="cd__info__block">
                      <p className="cd__info">{currentdata.contact_name}</p>
                      <p className="cd__info">{currentdata.contact_title}</p>
                    </div>
                    <div className="cd__info__block">
                      <p className="cd__info">{currentdata.contact_phone}</p>
                      <p className="cd__info">{currentdata.contact_email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inventory__container warehouse ">
            <InventoryTable inventory={currentdata.inventory} />
          </div>
        </div>
      )
    } else {
      return <div>Loading</div>
    }
  }
}
export default WarehouseDetails
