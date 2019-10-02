import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ListContainer from "./containers/ListContainer";
import Item from "./components/Item";
import NewItem from "./components/NewItem";
import EditItem from "./components/EditItem";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListContainer} />
        <Route exact path="/item/:id" component={Item} />
        <Route exact path="/new-item" component={NewItem} />
        <Route exact path="/edit-item/:id" component={EditItem} />
      </Switch>
    </Router>
  );
}

export default App;
