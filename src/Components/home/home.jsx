import React, { Component } from "react";
import Slides from "./slides";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container flex-block">
        <Slides />
      </div>
    );
  }
}

export default Home;
