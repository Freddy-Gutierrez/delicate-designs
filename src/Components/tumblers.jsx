import React, { Component } from "react";
import Products from "./products";
class Tumblers extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Tumblers</h1>
        <Products products={this.props.products} {...this.props} />
      </div>
    );
  }
}

export default Tumblers;
