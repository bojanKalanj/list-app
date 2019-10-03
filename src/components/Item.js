import React, { Component } from "react";
import axios from "axios";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null
    };
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    axios
      .get(`http://localhost:3001/api/v1/items/${id}`)
      .then(response => {
        this.setState({
          item: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.item) {
      return <div>{this.state.item.title}</div>;
    } else {
      return <p>Loading</p>;
    }
  }
}

export default Item;
