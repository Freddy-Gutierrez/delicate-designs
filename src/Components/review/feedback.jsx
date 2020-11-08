import React from "react";
import StarRatings from "react-star-ratings";

const Feedback = (props) => {  
  return (
    <div className="review-row">
      {props.reviews.map((review, index) => {
        return (
          <div className="feedback-container" key={index}>
            <div className="review-row">
              <h3>{review.name}</h3>
            </div>
            <div className="two-col">
              <p className="p-review">Rating</p>
              <p className="p-review">Posted</p>
            </div>
            <div className="two-col">
              <StarRatings
                rating={review.rating}
                starRatedColor="rgb(255,223,0)"
                starDimension={"15px"}
                starSpacing={"0px"}
              />
              <p style={{ marginLeft: "2em" }}>{review.date}</p>
            </div>
            <div className="review-row">
              <div className="review-comment">{review.review}</div>
              <div>
                <p
                  className="helpful"
                  onClick={(_id) => props.onClick(review._id)}
                >{`Helpful(${review.helpful.length})`}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feedback;
