import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import { NavLink } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import Select from "./common/select";
import Feedback from "./feedback";

class Reviews extends Component {
  state = { allReviews: [], displayedReviews: [] };

  componentDidMount() {
    const { reviews } = this.props.location.state.product;
    console.log(reviews);
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

    let allReviews = [...this.state.allReviews];
    allReviews.push(fiveStars, fourStars, threeStars, twoStars, oneStars);
    this.setState({ allReviews, displayedReviews: reviews });
  }

  sortReviews = (option) => {
    console.log(option);
  };

  showReviews = (option) => {
    if (option === "All Ratings") {
      const { reviews } = this.props.location.state.product;
      this.setState({ displayedReviews: reviews });
    } else {
      let reviews = { ...this.state };
      let key = parseInt(option.charAt(0));
      let displayedReviews = reviews.allReviews.filter(
        (r) => r.rating === key
      )[0].reviews;
      this.setState({ displayedReviews });
    }
  };

  incrementHelpful = (_id) => {
    // given id make call to update in db
    console.log(_id);
  };

  render() {
    const { product } = this.props.location.state;
    if (this.state.allReviews.length === 0) return "";
    return (
      <div className="review-container">
        <div className="stars-container">
          <h3>{`Overall rating ${product.avgRating}`}</h3>
          <div className="break"></div>
          {this.state.allReviews.map((star) => {
            return (
              <div className="star-component" key={star.rating}>
                <StarRatings
                  rating={star.rating}
                  starRatedColor="rgb(255,223,0)"
                  starDimension={"20px"}
                  starSpacing={"0px"}
                />
                <ProgressBar now={75} />
                <NavLink to="">{`(${star.reviews.length})`}</NavLink>
              </div>
            );
          })}
        </div>
        <div className="review-content">
          <div className="review-row">
            <h1>All Reviews</h1>
            <button className="review-button">Write a review</button>
          </div>
          <div className="review-row">
            <Select
              title="Sort By"
              options={["Recent", "Helpful"]}
              onClick={this.sortReviews}
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
              onClick={this.showReviews}
            />
          </div>
          <Feedback
            reviews={this.state.displayedReviews}
            onClick={this.incrementHelpful}
          />
        </div>
      </div>
    );
  }
}

export default Reviews;
