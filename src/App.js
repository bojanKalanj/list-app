import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductsContainer from "./containers/ProductsContainer";
import Item from "./components/Item";
import NewItem from "./components/NewItem";
import EditItem from "./components/EditItem";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductsContainer} />
        <Route exact path="/item/:id" component={Item} />
        <Route exact path="/new-item" component={NewItem} />
        <Route exact path="/edit-item/:id" component={EditItem} />
      </Switch>
    </Router>
  );
}

export default App;