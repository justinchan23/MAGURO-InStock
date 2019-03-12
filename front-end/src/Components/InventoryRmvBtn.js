import React from 'react'
import '../Styles/InventoryRmvBtn/styles.css'

class InventoryRmvBtn extends React.Component {
  constructor() {
    super();

    this.toggleBtn = this.toggleBtn.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      showBtn: false
    };
  }

  toggleBtn() {
    if (!this.state.showBtn) {
      // attach/remove event handler
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      showBtn: !prevState.showBtn,
    }));
  }

  handleOutsideClick(event) {
    if (this.node.contains(event.target)) {
      return;
    }

    this.toggleBtn();
  }

  render() {
    return (
      <div className="toggleContainer" ref={node => { this.node = node }}>
        <button onClick={this.toggleBtn} className="toggleBtn">
          <img src="../Icons/SVG/Icon-kebab-default.svg" alt="remove" />
        </button>
        {this.state.showBtn && (<div><button className="removeBtn">Remove
        </button></div>)}
      </div>
    )
  }
}

export default InventoryRmvBtn