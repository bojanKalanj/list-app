import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class ProductsListItem extends Component {
  render() {
    var { product, deleteProdHandler } = this.props;
    return (
      <Fragment>
        <ul>
          <li>
            <Link to={`/items/${product.id}`}>Name - {product.title}</Link>
          </li>
          <li>Description - {product.desc}</li>
          <li>Price - {product.price}</li>
        </ul>
        <button onClick={deleteProdHandler.bind(this, product.id)}>
          Delete product
        </button>
        <Link to={`/items/edit/${product.id}`}>Edit product</Link>
        <hr />
      </Fragment>
    );
  }
}

export default ProductsListItem;
