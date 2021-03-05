import React, { Component } from "react";
import Slides from "./slides";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container flex-block grid grid-cols" data-aos="fade-left">
        <div data-aos="zoom-in-right">
          <h1 className="mission-title">Our Mission</h1>
          <p className="mission-line">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, ipsam dignissimos? Consequuntur officiis blanditiis, quod voluptate alias minus ut aperiam praesentium eveniet dolorem, corporis numquam!</p>
        </div>
        <Slides />
      </div>
    );
  }
}

export default Home;
