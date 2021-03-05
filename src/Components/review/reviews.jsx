import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import moment from 'moment';
import Select from "../common/select";
import Feedback from "./feedback";
import { getReviews, getFilteredReviews, updateHelpful } from '../../services/reviewService';
import ReviewStars from "./reviewStar";
import "../../CSS/review.css";

class Reviews extends Component {
  state = {productReview: null };

  
  async componentDidMount() {
    const { id: productId } = this.props.match.params;    
    let productReview = await getReviews(productId);
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
        this.setState({displayedReviews: this.state.productReview.reviews});
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
    const { displayedReviews} = this.state;    
    if (option === "Helpful"){
      const sorted = displayedReviews.sort(
        (a,b) => b.helpful.length - a.helpful.length
      );
      return this.setState({displayedReviews: sorted});      
    }
    const sorted = displayedReviews.sort(
      (a,b) => moment(moment(b.date, "dddd, MMMM Do YYYY, h:mm:ss a").format()).diff(moment(a.date, "dddd, MMMM Do YYYY, h:mm:ss a").format())
    );        
    this.setState({displayedReviews: sorted});
  };

  updateHelpful = async(reviewId) => {
    let productReview = await updateHelpful(reviewId);
    if (!productReview) return toast.error('Must be logged in to mark review as helpful');
    let displayedReviews = productReview.reviews;
    this.setState({productReview, displayedReviews});
    
  };

  render() {
    const { id: productId } = this.props.match.params;    
    const {productReview, displayedReviews, fiveStarReviews, fourStarReviews, threeStarReviews, twoStarReviews, oneStarReviews} = this.state;    
    return (
      productReview === null ? 
      <div className="no-reviews"> 
        <h1>Be the first to leave a review!</h1>
        <Link to={`/feedback-form/${productId}`} className="review-button">Write a review</Link>
      </div> :
      <div className="container grid grid-cols review">
        <div className="stars-container" data-aos="zoom-in-right">
            <h2>{`Overall rating ${productReview.avgRating}`}</h2>            
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
          <div className="review-content" data-aos="zoom-in-left">
            <div className="review-flex">
              <h1>All Reviews</h1>
              <Link to={`/feedback-form/${productReview.productId}`} className="review-button">Write a review</Link>
            </div>
            <div className="review-flex">
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
      </div>   
    );
  }
}

export default Reviews;
