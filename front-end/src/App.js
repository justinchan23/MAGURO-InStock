import React from 'react'
import './App.css'
import Nav from './Components/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './Components/Main'
import WarehouseLocations from './Components/WarehouseLocations'
import Inventory from './Components/Inventory'
import InventoryItemDetail from './Components/InventoryItemDetail'
import WarehouseDetails from './Components/WarehouseDetails'

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/warehouses" component={WarehouseLocations} />
          <Route exact path="/inventory" component={Inventory} />
          <Route path="/warehouses/:id" component={WarehouseDetails} />
          <Route path="/inventory/:id" component={InventoryItemDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
)

export default App
