import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CSS/layout.css";
import "./CSS/carousel.css";
import "./CSS/review.css";
import "./CSS/productDetails.css";
import "./CSS/cart.css";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./Components/navbar";
import Banners from "./Components/banners";
import Home from "./Components/home";
import ProductDetails from "./Components/productDetails";
import Cart from "./Components/cart";
import ProductsPage from './Components/productsPage';
import Pay from './Components/Shipping/pay';
import Reviews from './Components/review/reviews';
import Login from "./Components/auth/login";
import FeedbackForm from './Components/review/feedbackForm';
class App extends Component {
  state = {
    cartIcon: ""
  };

  //in cdm get user cart
  componentDidMount() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let cartIcon = (cart && cart.length > 0) ? '/cart_full.png' : '/cart_empty.png';
    this.setState({cartIcon})
  }

  addToCart = (item, quantity) => {    
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart ? cart : [];
    // check if product is already in cart, if so increment quantity but don't add item again
    let duplicate = cart.find(product => {return product.item._id === item._id})
    duplicate ? duplicate.quantity+=quantity : cart.push({item, quantity});    

    localStorage.setItem('cart', JSON.stringify(cart));
    
    this.setState({cartIcon: "/cart_full.png"});
    toast.success("Item added to cart");
  };

    updateIcon = () => {
      console.log('icon updated');
      this.setState({cartIcon: "/cart_empty.png"});
    }

  render() {
    return (
      <div>
        <NavigationBar cart={this.state.cart} total={this.state.total} cartIcon={this.state.cartIcon} />
        <Switch>
          <Route
            path="/banners"
            render={(props) => (
              <Banners {...props} products={this.state.products} />
            )}
          />
          <Route
            path="/pillows"
            render={(props) => (
              <ProductsPage {...props} productDirectory={"/pillows"} title={"Pillows"}/>
            )}
          />
          <Route
            path="/shirts"
            render={(props) => (
              <ProductsPage {...props} productDirectory={"/shirts"} title={"Shirts"}/>
            )}
          />
          <Route
            path="/toppers"
            render={(props) => (
              <ProductsPage {...props} productDirectory={"/toppers"} title={"Toppers"}/>
            )}
          />
          <Route
            path="/totes"
            render={(props) => (
              <ProductsPage {...props} productDirectory={"/totes"} title={"Totes"}/>
            )}
          />
          <Route
            path="/tumblers"
            render={(props) => (
              <ProductsPage {...props} productDirectory={"/tumblers"} title={"Tumblers"}/>
            )}
          />
          <Route
            path="/cart"
            render={(props) => (
              <Cart
                {...props}            
                updateIcon={this.updateIcon}
              />
            )}
          />
          <Route
            path="/product_details"
            render={(props) => (
              <ProductDetails
                {...props}
                products={this.state.products}
                addToCart={this.addToCart}
                removeFromCart={this.removeFromCart}
              />
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/feedback-form/:id" component={FeedbackForm} />
          <Route path="/pay" component={Pay} />
          <Route path="/reviews/:id" component={Reviews} />
          <Route path="/" component={Home} />
        </Switch>
        <ToastContainer position="bottom-center"/>
      </div>
    );
  }
}

export default App;
