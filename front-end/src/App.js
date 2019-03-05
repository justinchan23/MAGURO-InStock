import React from 'react'
import './App.css'
import Nav from './Components/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './Components/Main'
import WarehouseLocations from './Components/WarehouseLocations'
import Inventory from './Components/Inventory'
import InventoryNewItem from './Components/InventoryNewItem'

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/warehouses" component={WarehouseLocations} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/inventory/new" component={InventoryNewItem} />
          <Route path="/warehouses/:id" component={Main} />
          <Route path="/inventory/:id" component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
)

export default App
