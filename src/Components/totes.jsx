import React, { Component } from "react";
import Products from "./products";
class Totes extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Totes</h1>
        <Products products={this.props.products} {...this.props} />
      </div>
    );
  }
}

export default Totes;
