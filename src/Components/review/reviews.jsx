import React, { Component } from "react";
import Select from "../common/select";
import Feedback from "./feedback";
import { getReviews, getFilteredReviews } from '../../services/reviewService';
import ReviewStars from "./reviewStar";

class Reviews extends Component {
  state = {productReview: null };

  
  async componentDidMount() {
    const { productId } = this.props.location.state;
    let productReview = await getReviews(productId);
    let fiveStarReviews = await getFilteredReviews(productId, 5);
    let fourStarReviews = await getFilteredReviews(productId, 4);
    let threeStarReviews = await getFilteredReviews(productId, 3);
    let twoStarReviews = await getFilteredReviews(productId, 2);
    let oneStarReviews = await getFilteredReviews(productId, 1);
    let displayedReviews = productReview[0].reviews;
    this.setState({productReview, displayedReviews, fiveStarReviews, fourStarReviews, threeStarReviews, twoStarReviews, oneStarReviews});
  }

  sortReviews = (option) => {
    console.log(option);
  };

  showReviews = (option) => {    
    const {fiveStarReviews, fourStarReviews, threeStarReviews, twoStarReviews, oneStarReviews} = this.state;
    switch(option){
      case "All Ratings":
        this.setState({displayedReviews: this.state.productReview[0].reviews});
        break;
      case "5 Stars":
        this.setState({displayedReviews: fiveStarReviews});
        break;
      case "4 Stars":
        this.setState({displayedReviews: fourStarReviews});
        break;
      case "3 Stars":
        this.setState({displayedReviews: threeStarReviews});
        break;
      case "2 Stars":
        this.setState({displayedReviews: twoStarReviews});
        break;
      case "1 Star":
        this.setState({displayedReviews: oneStarReviews});
        break;
      default:
        break;
    }    
  };

  incrementHelpful = (_id) => {
    // given id make call to update in db
    console.log(_id);
  };

  render() {
    const {  productId, avgRating } = this.props.location.state;  
    const {productReview, displayedReviews, fiveStarReviews, fourStarReviews, threeStarReviews, twoStarReviews, oneStarReviews} = this.state;
    console.log(this.state.productReview);
    return (
      productReview === null ? <div/> :
      <div className="review-container">
        <div className="stars-container">
          <h3>{`Overall rating ${avgRating}`}</h3>
          <div className="break"></div>
          <ReviewStars 
            totalReviews={productReview[0].reviews.length}
            fiveStars={fiveStarReviews.length}
            fourStars={fourStarReviews.length}
            threeStars={threeStarReviews.length}
            twoStars={twoStarReviews.length}
            oneStars={oneStarReviews.length}
            onClick={this.showReviews}
          />
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
            reviews={displayedReviews}
            onClick={this.incrementHelpful}
          />
        </div>
      </div>      
    );
  }
}

export default Reviews;
