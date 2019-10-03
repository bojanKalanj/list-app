import React, { Component } from "react";
import ProductsListItem from "./ProductsListItem";

class ProductsList extends Component {
  render() {
    var { products, deleteProdHandler } = this.props;
    return (
      <div>
        {products.map(p => {
          return (
            <ProductsListItem
              product={p}
              deleteProdHandler={deleteProdHandler}
              key={p.id}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductsList;
