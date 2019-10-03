import React, { Component } from "react";
import axios from "axios";

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    axios
      .get(`http://localhost:3001/api/v1/items/${id}`)
      .then(response => {
        this.setState({
          product: response.data
        });
      })
      .catch(error => console.log(error));
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
      .patch(`http://localhost:3001/api/v1/items/${product.id}`, {
        item: { ...product }
      })
      .then(response => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.product) {
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
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default EditItem;
