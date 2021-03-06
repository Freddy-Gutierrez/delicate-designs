import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../../CSS/carousel.css";

const wmCup = "/tumblers/watermelon/option0.jpg";
const badbunnyCup = "/tumblers/badbunny/option0.jpg";
const dodgersCup = "/tumblers/dodgers/option0.jpg";
const hulkCup = "/tumblers/hulk/option0.jpg";
const fallPillow = "/pillows/fall/option0.jpg";
const ghostPillow = "/pillows/ghost/option0.jpg";
const witchPillow = "/pillows/witch/option0.jpg";
const halloweenPillow = "/pillows/halloween/option0.jpg";


class Slides extends Component {
  state = {};
  render() {
    return (
      <div className="carousel-container" data-aos="zoom-in-left">        
          <Carousel>
            <Carousel.Item>
              <img className="carousel-img" src={wmCup} alt="Watermelon Cup" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-img" src={fallPillow} alt="Fall Pillow" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-img" src={badbunnyCup} alt="Bad Bunny Cup" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-img" src={ghostPillow} alt="Ghost Pillow" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-img" src={dodgersCup} alt="Dodgers Cup" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-img" src={witchPillow} alt="Witch Pillow" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-img" src={hulkCup} alt="Hulk Cup" />
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
