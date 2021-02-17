import React from "react";
import StarRatings from "react-star-ratings";

const Feedback = (props) => {  
  return (
    <div className="review-flex">
      {props.reviews.map((review, index) => {
        return (
          <div style={{width:"100%"}}>
            <h3 className="review-username">{review.name}</h3>
            <div className="feedback-container" key={index}>
            <div className="two-col">
              <div>
                <p className="p-review">Rating</p>
                <StarRatings
                  rating={review.rating}
                  starRatedColor="rgb(255,223,0)"
                  starEmptyColor="rgb(109, 122, 130)"
                  starDimension={"15px"}
                  starSpacing={"0px"}
                />
              </div>
              <div>
                <p className="p-review">Posted</p>
                <p>{review.date}</p>
              </div>
            </div>
            <div className="review-comment">{review.review}</div>
            <p
              className="helpful"
              onClick={(_id) => props.onClick(review._id)}>
                {`Helpful(${review.helpful.length})`}
            </p>
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default Feedback;
