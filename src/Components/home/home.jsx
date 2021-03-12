import React, { Component } from "react";
import Slides from "./slides";
let mission = "Here at Delicate Design Co. we strive to bring the best products to our customers, ranging from tumblers to totes. Each item is carefully crafted, and handmade with love, and with one purpose in mind: help bring the customer's vision to life!";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container flex-block grid grid-cols" data-aos="fade-left">
        <div data-aos="zoom-in-right">
          <h1 className="mission-title">Our Mission</h1>
          <p className="mission-line">{mission}</p>
        </div>
        <Slides />
      </div>
    );
  }
}

export default Home;
