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
        id: 1,
        name: "prod one",
        desc: "egestas sed sed risus pretium",
        price: 53423
      },
      {
        id: 2,
        name: "prod two",
        desc: "egestas sed sed risus pretium",
        price: 33
      },
      {
        id: 3,
        name: "prod three",
        desc:
          "egestas sed segestas sed sed risus pretiumegestas sed sed risus pretiumegestas sed sed risus pretiumed risus pretium",
        price: 5
      },
      {
        id: 4,
        name: "prod four",
        desc: "egestas sedegestas sed sed risus pretium sed risus pretium",
        price: 4
      },
      {
        id: 5,
        name: "prod five",
        desc:
          "egestas sed sed risus pretiumegestas sed sed risus pretiumegestas sed sed risus pretium",
        price: 54
      },
      {
        id: 6,
        name: "prod six",
        desc: "egestas egestas sed sed risus pretiumsed sed risus pretium",
        price: 55
      },
      {
        id: 7,
        name: "prod seven",
        desc:
          "egestas segestas sed sed risus pretiumegestas sed sed risus pretiumed sed risus pretium",
        price: 5
      },
      {
        id: 8,
        name: "prod eight",
        desc: "egeegestas sed sed risus pretiumvstas sed sed risus pretium",
        price: 333
      },
      {
        id: 9,
        name: "prod nine",
        desc: "egestas sed sed risuegestas sed sed risus pretiums pretium",
        price: 11
      },
      {
        id: 10,
        name: "prod ten",
        desc: "egestas sed sed risus pretium",
        price: 88
      }
    ];

    this.setState({
      products: products
    });
  }

  deleteProdHandler = prodId => {
    let products = this.state.products.filter(p => p.id !== prodId);

    this.setState({
      products: products
    });

    // this.setState({
    //   products: this.state.products.filter(p => p.id !== prodId)
    // });

    console.log(this.state.products);
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
