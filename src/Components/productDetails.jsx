import React, { Component } from "react";

class ProductDetails extends Component {
  state = { quantity: 1 };

  incrementQuantity = () => {
    let quantity = this.state.quantity + 1;
    this.setState({ quantity });
  };

  decrementQuantity = () => {
    let quantity = this.state.quantity - 1;
    this.setState({ quantity });
  };

  render() {
    const { product } = this.props.location.state;
    return (
      <div>
        <h1>Product details</h1>
        <div className="product-detail-container">
          <img
            src={product.src}
            alt={product.alt}
            className="product-detail-img"
          />
          <div>
            <h2 className="title">{product.title}</h2>
            <p className="description">{product.description}</p>
            <div className="add-to-cart-container">
              <div className="quantity-container">
                <button
                  className="increment-button"
                  onClick={this.decrementQuantity}
                  disabled={this.state.quantity === 0 ? true : false}
                >
                  -
                </button>
                <div className="increment-text">{this.state.quantity}</div>
                <button
                  className="increment-button"
                  onClick={this.incrementQuantity}
                >
                  +
                </button>
              </div>
              <div>
                <button
                  className="add-cart-button"
                  disabled={this.state.quantity === 0 ? true : false}
                  onClick={(item, quantity) =>
                    this.props.onClick(product, this.state.quantity)
                  }
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
