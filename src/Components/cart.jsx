import React, { Component } from "react";
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
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

  goToPayment = (event) => {
    event.preventDefault();
    const {data, total} = this.state;
    const options = { abortEarly: false };
    const schema = {
      first: Joi.string().min(1).max(20).label("First Name").required(),
      last: Joi.string().min(1).max(20).label("Last Name").required(),
      address: Joi.string().min(1).max(20).label("Address").required(),
      optional: Joi.string().min(0).max(20).allow(''),
      city: Joi.string().min(1).max(20).label("City").required(),
      state: Joi.string().min(2).max(2).label("State").required(),
      zip: Joi.string().min(5).max(5).label("Zip").required(),
      email: Joi.string().email().label("Email"),
      phone: Joi.string().label("Phone Number").required()
    }
    
    const { error } = Joi.validate(this.state.data, schema, options)
    if (!error){
      this.props.history.push({
        pathname: "/pay",
        state: {data, total}
      })
    } 
    else  toast.error(error.details[0].message);
  }

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };    
    data[input.name] = input.value;
    this.setState({ data });
  }

  render() {    
    const {cart, total} = this.state;
    console.log(this.props)
    return (      
      cart === [] ? <div/> :       
      <div className="cart-container">
        <ShippingInfo onChange={this.handleChange} onSubmit={this.goToPayment}/>
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
