import React, { Component } from "react";

import ProductsList from "../components/ProductsList";

class ProductsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentWillMount() {
    let products = [
      {
        name: "prod one",
        desc: "egestas sed sed risus pretium",
        price: 53423
      },
      {
        name: "prod two",
        desc: "egestas sed sed risus pretium",
        price: 33
      },
      {
        name: "prod three",
        desc:
          "egestas sed segestas sed sed risus pretiumegestas sed sed risus pretiumegestas sed sed risus pretiumed risus pretium",
        price: 5
      },
      {
        name: "prod four",
        desc: "egestas sedegestas sed sed risus pretium sed risus pretium",
        price: 4
      },
      {
        name: "prod five",
        desc:
          "egestas sed sed risus pretiumegestas sed sed risus pretiumegestas sed sed risus pretium",
        price: 54
      },
      {
        name: "prod six",
        desc: "egestas egestas sed sed risus pretiumsed sed risus pretium",
        price: 55
      },
      {
        name: "prod seven",
        desc:
          "egestas segestas sed sed risus pretiumegestas sed sed risus pretiumed sed risus pretium",
        price: 5
      },
      {
        name: "prod eight",
        desc: "egeegestas sed sed risus pretiumvstas sed sed risus pretium",
        price: 333
      },
      {
        name: "prod nine",
        desc: "egestas sed sed risuegestas sed sed risus pretiums pretium",
        price: 11
      },
      {
        name: "prod ten",
        desc: "egestas sed sed risus pretium",
        price: 88
      }
    ];

    this.setState({
      products: products
    });
  }

  render() {
    return (
      <div>
        <ProductsList products={this.state.products} />
      </div>
    );
  }
}

export default ProductsContainer;
