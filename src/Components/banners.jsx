import React, { Component } from "react";
import Products from "./products";

class Banners extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Banners</h1>
        <Products products={this.props.products} {...this.props} />
      </div>
    );
  }
}

export default Banners;
