import React from "react";
import StarRatings from "react-star-ratings";
const Feedback = (props) => {
  console.log(props.reviews);
  return (
    <div>
      {props.reviews.map((review) => {
        return (
          <div className="feedback-container" key={review.username}>
            <h3>{review.username}</h3>
            <div className="break"></div>
            <div className="two-col">
              <p className="rating">Rating</p>
              <p className="posted">Posted</p>
            </div>
            <div className="break"></div>
            <div className="two-col">
              <span>
                <StarRatings
                  rating={review.rating}
                  starRatedColor="rgb(255,223,0)"
                  starDimension={"20px"}
                  starSpacing={"0px"}
                />
                <p>{review.date}</p>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feedback;
