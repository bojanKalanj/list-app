import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class ProductsListItem extends Component {
  render() {
    var { product } = this.props;
    return (
      <Fragment>
        <ul>
          <li>
            <Link to={`/item/${product.id}`}>Name - {product.title}</Link>
          </li>
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
