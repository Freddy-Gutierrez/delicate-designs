import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

const wmCup = "/tumblers/watermelon/option0.jpg";
const stitchCup = "/tumblers/stitch/option0.jpg";
const starwarsCup = "/tumblers/starwars/option0.jpg";
const summerCup = "/tumblers/summer/option0.jpg";
const fallPillow = "/pillows/fall/option0.jpg";
const ghostPillow = "/pillows/ghost/option0.jpg";
const witchPillow = "/pillows/witch/option0.jpg";
const halloweenPillow = "/pillows/halloween/option0.jpg";


class Slides extends Component {
  state = {};
  render() {
    return (
      <div>
        <Carousel className="carousel-container">
          <Carousel.Item>
            <img className="carousel-img" src={wmCup} alt="Watermelon Cup" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={fallPillow} alt="Fall Pillow" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={stitchCup} alt="Stitch Cup" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={ghostPillow} alt="Ghost Pillow" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={starwarsCup} alt="Star Wars Cup" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={witchPillow} alt="Witch Pillow" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={summerCup} alt="Summer Cups" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={halloweenPillow} alt="Halloween Pillow" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slides;
