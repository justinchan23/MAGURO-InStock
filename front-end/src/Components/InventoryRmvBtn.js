import React from 'react'
import '../Styles/InventoryRmvBtn/styles.css'

class InventoryRmvBtn extends React.Component {
  state = {
    showBtn: false
  }

  toggleBtn() {
    this.setState({
      showBtn: !this.state.showBtn
    })
  }

  render() {
    return (
      <div>
        {
          this.state.showBtn?
          <div>
            Remove
          </div>
        :null  
        }

        <button onClick={()=>this.toggleBtn()}>Click Me</button>
      </div>
    )
  }
}

export default InventoryRmvBtn