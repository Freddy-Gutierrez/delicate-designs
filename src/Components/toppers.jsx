import React, { Component } from "react";
import Products from "./products";
class Toppers extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Toppers</h1>
        <Products products={this.props.products} {...this.props} />
      </div>
    );
  }
}

export default Toppers;
