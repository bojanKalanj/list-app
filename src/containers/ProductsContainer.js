import React, { Component } from "react";
import axios from "axios";

import ProductsList from "../components/ProductsList";

class ProductsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/v1/items.json")
      .then(response => {
        console.log(response);
        this.setState({
          products: response.data
        });
      })
      .catch(error => console.log(error));
  }

  deleteProdHandler = id => {
    axios
      .delete(`http://localhost:3001/api/v1/items/${id}`)
      .then(response => {
        let products = this.state.products.filter(p => p.id !== id);
        this.setState({ products });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <ProductsList
          products={this.state.products}
          deleteProdHandler={this.deleteProdHandler}
        />
      </div>
    );
  }
}

export default ProductsContainer;
