import React, { Component } from "react";

class ProductsListItem extends Component {
  product = this.props.product;
  render() {
    return <div>{this.product.name}</div>;
  }
}

export default ProductsListItem;
