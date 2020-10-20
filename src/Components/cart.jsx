import React, { Component } from "react";
class Cart extends Component {
  edit = (productId) => {
    console.log(productId);
  };

  remove = (productId) => {
    // backend call to remove entry from cart
    console.log(productId);
  };

  render() {
    const { cart, total } = this.props;
    return (
      <div className="cart-container">
        <div className="cart-items">
          <h1 className="header">{`Your Cart (${cart.length})`}</h1>
          {cart.map((product) => {
            return (
              <div className="cart-entry" key={product._id}>
                <img src={product.src} alt="product" className="cart-img" />
                <div className="product-details">
                  <h5 className="row">{product.title}</h5>
                  <div className="row">
                    <span className="bold">Qty:</span>
                    <p>{product.quantity}</p>
                  </div>
                  <div className="row">
                    <span className="bold">Price:</span>
                    <p>{product.price}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <button
                      className="edit"
                      onClick={() => this.edit(product._id)}
                    >
                      Edit
                    </button>
                  </div>
                  <div>
                    <button
                      className="remove"
                      onClick={() => this.remove(product._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="total">{`Total: $${total}`}</div>
        </div>
      </div>
    );
  }
}

export default Cart;
