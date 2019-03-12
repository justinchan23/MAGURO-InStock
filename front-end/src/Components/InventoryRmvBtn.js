import React from 'react'
import '../Styles/InventoryRmvBtn/styles.css'

class InventoryRmvBtn extends React.Component {
  state = {
    showBtn: false
  }

  toggleBtn = () => {
    if (!this.state.showBtn) {
      document.addEventListener('click', this.handleOutsideClick, false)
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }
    this.setState(prevState => ({
      showBtn: !prevState.showBtn
    }))
  }

  handleOutsideClick = event => {
    this.toggleBtn()
  }

  render() {
    return (
      <div
        className='toggleContainer'
        ref={node => {
          this.node = node
        }}
      >
        <button onClick={this.toggleBtn} className='toggleBtn'>
          <img src='../Icons/SVG/Icon-kebab-default.svg' alt='remove' />
        </button>
        {this.state.showBtn && (
          <div>
            <button onClick={() => this.props.removeItem(this.props.id)} className='removeBtn'>
              Remove
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default InventoryRmvBtn
