import React, { Component } from "react";
import axios from "axios";

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        title: "",
        desc: "",
        price: 0
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    var { name, value } = e.target;
    var { product } = this.state;
    product[name] = value;
    this.setState({ product });
  }

  handleSubmit(e) {
    e.preventDefault();
    var { product } = this.state;
    axios
      .post("http://localhost:3001/api/v1/items", { item: { ...product } })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    var { title, desc, price } = this.state.product;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="title"
            value={title}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <label>
          Description:
          <textarea
            name="desc"
            value={desc}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <label>
          Price:
          <input
            name="price"
            value={price}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default NewItem;
