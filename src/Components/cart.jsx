import React, { Component } from "react";
import OrderSummary from "./Shipping/orderSummary";
import ShippingInfo from './Shipping/shippingInfo';

class Cart extends Component {

  state = {
    cart : [],    
    data : {first: "", last: "", address: "", optional: "", city: "", state: "", zip: "", email: "", phone: ""},
    total: 0
  };

  componentDidMount() {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    let total = cart.reduce((total, currentItem) => {
      return total + (currentItem.item.price*currentItem.quantity)
    }, 0);

    this.setState({cart, total})
  }

  // find index of item to be removed, remove from array, update cart and total 
  remove = (productId) => {
    let cart = [...this.state.cart];
    let total = this.state.total;

    let removeIndex = cart.findIndex(p => p.item._id === productId);
    total-=(cart[removeIndex].item.price*cart[removeIndex].quantity);
    cart.splice(removeIndex, 1);    
    if(cart.length===0) this.props.updateIcon();
    
    localStorage.setItem('cart', JSON.stringify(cart))
    this.setState({cart, total});
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };    
    data[input.name] = input.value;
    this.setState({ data });
  }

  render() {    
    const {cart, total} = this.state;
    return (      
      cart === [] ? <div/> :       
      <div className="cart-container">
        <ShippingInfo onChange={this.handleChange}/>
        <OrderSummary 
        cart={cart}
        total={total}
        remove={this.remove}       
        />
      </div>
    );
  }
}

export default Cart;
