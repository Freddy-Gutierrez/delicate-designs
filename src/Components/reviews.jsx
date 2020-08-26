import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import { NavLink } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import Select from "./common/select";
import Feedback from "./feedback";
class Reviews extends Component {
  state = { allReviews: [] };

  componentDidMount() {
    const { reviews } = this.props.location.state.product;
    const fiveStars = {
      reviews: reviews.filter((r) => r.rating === 5),
      rating: 5,
    };
    const fourStars = {
      reviews: reviews.filter((r) => r.rating === 4),
      rating: 4,
    };
    const threeStars = {
      reviews: reviews.filter((r) => r.rating === 3),
      rating: 3,
    };
    const twoStars = {
      reviews: reviews.filter((r) => r.rating === 2),
      rating: 2,
    };
    const oneStars = {
      reviews: reviews.filter((r) => r.rating === 1),
      rating: 1,
    };
    const allReviews = [fiveStars, fourStars, threeStars, twoStars, oneStars];
    this.setState({ allReviews });
  }

  filterReviews = (option) => {
    console.log(option);
  };

  render() {
    const { product } = this.props.location.state;
    return (
      <div className="review-container">
        <div className="stars-container">
          <h3>{`Overall rating ${product.avgRating}`}</h3>
          <div className="break"></div>
          {this.state.allReviews.map((star) => {
            return (
              <React.Fragment key={star.rating}>
                <div className="star-component">
                  <StarRatings
                    rating={star.rating}
                    starRatedColor="rgb(255,223,0)"
                    starDimension={"20px"}
                    starSpacing={"0px"}
                  />
                  <ProgressBar now={75} />
                  <NavLink to="">{`(${star.reviews.length})`}</NavLink>
                </div>
                <div className="break"></div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="review-content">
          <h3>All Reviews</h3>
          <button className="review-button">Write a review</button>
          <div className="break"></div>
          <Select
            title="Sort By"
            options={["Recent", "Helpful"]}
            onClick={this.filterReviews}
          />
          <Select
            title="Show"
            options={[
              "All Ratings",
              "5 Stars",
              "4 Stars",
              "3 Stars",
              "2 Stars",
              "1 Star",
            ]}
            onClick={this.filterReviews}
          />
          <div className="break"></div>
          <Feedback reviews={product.reviews} />
        </div>
      </div>
    );
  }
}

export default Reviews;
