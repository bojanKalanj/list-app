import React, { Component, Fragment } from "react";

class ProductsListItem extends Component {
  render() {
    var { product } = this.props;
    return (
      <Fragment>
        <ul>
          <li>Name - {product.title}</li>
          <li>Description - {product.desc}</li>
          <li>Price - {product.price}</li>
        </ul>
        <button onClick={() => this.props.deleteProdHandler(product.id)}>
          Delete product
        </button>
        <hr />
      </Fragment>
    );
  }
}

export default ProductsListItem;
