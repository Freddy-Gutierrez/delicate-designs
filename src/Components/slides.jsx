import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
class Slides extends Component {
  state = {};
  render() {
    return (
      <div>
        <Carousel className="carousel-container">
          <Carousel.Item>
            <img className="carousel-img" src="/watermelon_cup.jpg" alt="Watermelon Cup" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src="/fall_pillow.jpg" alt="Fall Pillow" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src="/stitch_cup.jpg" alt="Stitch Cup" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src="/ghost_pillow.jpg" alt="Ghost Pillow" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src="/star_wars_cup.jpg" alt="Star Wars Cup" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src="/witch_pillow.jpg" alt="Witch Pillow" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src="/summer_cups.jpg" alt="Summer Cups" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src="/halloween_pillow.jpg" alt="Halloween Pillow" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slides;
