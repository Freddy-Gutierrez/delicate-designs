import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Select from "../common/select";
import Feedback from "./feedback";
import { getReviews, getFilteredReviews, updateHelpful } from '../../services/reviewService';
import ReviewStars from "./reviewStar";

class Reviews extends Component {
  state = {productReview: null };

  
  async componentDidMount() {
    const { productId } = this.props.location.state;
    let productReview = await getReviews(productId);
    console.log(productReview);
    let fiveStarReviews = await getFilteredReviews(productId, 5);
    let fourStarReviews = await getFilteredReviews(productId, 4);
    let threeStarReviews = await getFilteredReviews(productId, 3);
    let twoStarReviews = await getFilteredReviews(productId, 2);
    let oneStarReviews = await getFilteredReviews(productId, 1);
    let displayedReviews = productReview.reviews;
    this.setState({productReview, displayedReviews, fiveStarReviews, fourStarReviews, threeStarReviews, twoStarReviews, oneStarReviews});
  }



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

  sortReviews = (option) => {
    console.log(option);
  };

  updateHelpful = async(reviewId) => {
    let productReview = await updateHelpful(reviewId);
    if (!productReview) return toast.error('Must be logged in to mark review as helpful');
    let displayedReviews = productReview.reviews;
    this.setState({productReview, displayedReviews});
    
  };

  render() {
    const { avgRating } = this.props.location.state;  
    const {productReview, displayedReviews, fiveStarReviews, fourStarReviews, threeStarReviews, twoStarReviews, oneStarReviews} = this.state;    
    return (
      productReview === null ? <div/> :
      <div className="review-container">
        <div className="stars-container">
          <h3>{`Overall rating ${avgRating}`}</h3>
          <div className="break"></div>
          <ReviewStars 
            totalReviews={productReview.reviews.length}
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
            onClick={this.updateHelpful}
          />
        </div>
        <ToastContainer position="bottom-center"/>
      </div>      
    );
  }
}

export default Reviews;
