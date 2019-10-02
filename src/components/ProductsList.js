import React, { Component } from "react";
import ProductsListItem from "./ProductsListItem";

class ProductsList extends Component {
  products = this.props.products;

  render() {
    return (
      <div>
        {this.products.map(p => {
          return <ProductsListItem product={p} />;
        })}
      </div>
    );
  }
}

export default ProductsList;
