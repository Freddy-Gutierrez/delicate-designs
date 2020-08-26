import React, { Component } from "react";
import Products from "./products";
class Shirts extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Shirts</h1>
        <Products products={this.props.products} {...this.props} />
      </div>
    );
  }
}

export default Shirts;
