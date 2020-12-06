import React from 'react';
import StarRatings from "react-star-ratings";
import { ProgressBar } from "react-bootstrap";

const ReviewStars = (props) => {    
    return ( 
        <div>
            <div className="star-component">
                <StarRatings
                  rating={5}
                  starRatedColor="rgb(255,223,0)"
                  starEmptyColor="rgb(109, 122, 130)"
                  starDimension={"20px"}
                  starSpacing={"0px"}
                />
                <ProgressBar now={(props.fiveStars/props.totalReviews)*100.0} />
                <button className="star-reviews" onClick={() => props.onClick('5 Stars')} >{props.fiveStars}</button>                
            </div>
            <div className="star-component">
                <StarRatings
                  rating={4}
                  starRatedColor="rgb(255,223,0)"
                  starEmptyColor="rgb(109, 122, 130)"
                  starDimension={"20px"}
                  starSpacing={"0px"}
                />
                <ProgressBar now={(props.fourStars/props.totalReviews)*100.0} />
                <button className="star-reviews" onClick={() => props.onClick('4 Stars')} >{props.fourStars}</button>                
            </div>
            <div className="star-component">
                <StarRatings
                  rating={3}
                  starRatedColor="rgb(255,223,0)"
                  starEmptyColor="rgb(109, 122, 130)"
                  starDimension={"20px"}
                  starSpacing={"0px"}
                />
                <ProgressBar now={(props.threeStars/props.totalReviews)*100.0} />
                <button className="star-reviews" onClick={() => props.onClick('3 Stars')} >{props.threeStars}</button>                
            </div>
            <div className="star-component">
                <StarRatings
                  rating={2}
                  starRatedColor="rgb(255,223,0)"
                  starEmptyColor="rgb(109, 122, 130)"
                  starDimension={"20px"}
                  starSpacing={"0px"}
                />
                <ProgressBar now={(props.twoStars/props.totalReviews)*100.0} />
                <button className="star-reviews" onClick={() => props.onClick('2 Stars')} >{props.twoStars}</button>                
            </div>
            <div className="star-component">
                <StarRatings
                  rating={1}
                  starRatedColor="rgb(255,223,0)"
                  starEmptyColor="rgb(109, 122, 130)"
                  starDimension={"20px"}
                  starSpacing={"0px"}
                />
                <ProgressBar now={(props.oneStars/props.totalReviews)*100.0} />
                <button className="star-reviews" onClick={() => props.onClick('1 Star')} >{props.oneStars}</button>                
            </div>
        </div>
     );
}
 
export default ReviewStars;