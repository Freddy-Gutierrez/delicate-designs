import React, { Component } from "react";
import ShippingInfo from './Shipping/shippingInfo';

class Cart extends Component {

  state = {cart : [], total: 0};

  componentDidMount() {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    let total = cart.reduce((total, currentItem) => {
      return total + currentItem.item.price
    }, 0);

    this.setState({cart, total})
    console.log(cart);
  }

  edit = (productId) => {
    console.log(productId);
  };

  remove = (productId) => {
    // backend call to remove entry from cart
    console.log(productId);
  };

  render() {    
    const {cart, total} = this.state;
    return (      
      cart === [] ? <div/> :       
      <div className="cart-container">
        <ShippingInfo />
        <div className="cart-items">
          <h3 >Order Summary</h3>
          {cart.map((product) => {
            return (
              <div className="cart-entry" key={product.item._id}>
                <img src={product.item.src+'/option0.jpg'} alt="product" className="cart-img" />
                <div className="product-details">
                  <h5 className="row">{product.item.title}</h5>
                  <div className="row">
                    <span className="bold">Qty:</span>
                    <p>{product.quantity}</p>
                  </div>
                  <div className="row">
                    <span className="bold">Price:</span>
                    <p>{product.item.price}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <button
                      className="edit"
                      onClick={() => this.edit(product.item._id)}
                    >
                      Edit
                    </button>
                  </div>
                  <div>
                    <button
                      className="remove"
                      onClick={() => this.remove(product.item._id)}
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
