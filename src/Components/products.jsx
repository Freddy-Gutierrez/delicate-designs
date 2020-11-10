import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import { NavLink } from "react-router-dom";

const image = "/option0.jpg";
class Products extends Component {
  state = {};

  render() {
    // dynamically create a product for each product
    // img onClick redirect user to product detail page and pass product in state
    // clicking the navlink for reviews redirects user to reviews page and passes product
    return (          
      <div className="product-container">
        {this.props.products.map((product) => {
          return (
            <div className="product" key={product._id}>
              <img
                className="product-img"
                src={product.src + image}
                alt={product.alt}
                onClick={() =>
                  this.props.history.push({
                    pathname: "/product_details",
                    state: { product: product },
                  })
                }
              />
              <p className="product-text">{product.title}</p>
              <p className="product-price">{`$${product.price}`}</p>
              <div className="rating-container">
                <StarRatings
                  rating={product.avgRating}
                  starRatedColor="rgb(255,223,0)"
                  starDimension={"20px"}
                  starSpacing={"0px"}
                />
                <NavLink
                  className="rating-text"
                  to={`/reviews/${product._id}`}
                >{`${product.totalReviews} reviews`}</NavLink>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Products;
