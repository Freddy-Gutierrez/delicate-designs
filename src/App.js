import React, { Component } from "react";
import "./CSS/layout.css";
import "./CSS/review.css";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./Components/navbar";
import Banners from "./Components/banners";
import Shirts from "./Components/shirts";
import Toppers from "./Components/toppers";
import Tumblers from "./Components/tumblers";
import Totes from "./Components/totes";
import Home from "./Components/home";
import ProductDetails from "./Components/productDetails";
import Reviews from "./Components/reviews";
class App extends Component {
  state = {
    products: [
      {
        _id: 0,
        src:
          "https://ae01.alicdn.com/kf/H4eb29dff80f54a99af67732e5e32c22cf/Men-s-Real-Leather-Jacket-Men-Motorcycle-Removable-Hood-winter-coat-Men-Warm-Genuine-Leather-Jackets.jpg",
        alt: "jacket",
        title: "Harlem Jacket",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tristique senectus et netus et malesuada fames ac. Proin nibh nisl condimentum id venenatis a. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vel eros donec ac odio tempor. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Eu nisl nunc mi ipsum. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sed viverra ipsum nunc aliquet bibendum. Magna fringilla urna porttitor rhoncus dolor purus non enim. A diam sollicitudin tempor id eu. Feugiat scelerisque varius morbi enim nunc faucibus a. Iaculis at erat pellentesque adipiscing. Non tellus orci ac auctor augue mauris augue neque.",
        price: 134.14,
        avgRating: 4.0,
        reviews: [
          {
            username: "joey",
            review: "adasasdad",
            rating: 5,
            date: "08-11-2020",
          },
          {
            username: "jamal",
            review: "adasasdad",
            rating: 5,
            date: "01-19-19",
          },
          {
            username: "sally",
            review: "adasasdad",
            rating: 4,
            date: "07-08-18",
          },
          {
            username: "molley",
            review: "adasasdad",
            rating: 3,
            date: "01-01-17",
          },
          {
            username: "jackson",
            review: "adasasdad",
            rating: 2,
            date: "01-08-18",
          },
          {
            username: "shane",
            review: "adasasdad",
            rating: 1,
            date: "09-09-20",
          },
        ],
      },
      {
        _id: 1,
        src:
          "https://ae01.alicdn.com/kf/H4eb29dff80f54a99af67732e5e32c22cf/Men-s-Real-Leather-Jacket-Men-Motorcycle-Removable-Hood-winter-coat-Men-Warm-Genuine-Leather-Jackets.jpg",
        alt: "jacket",
        title: "Harlem Jacket",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tristique senectus et netus et malesuada fames ac. Proin nibh nisl condimentum id venenatis a. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vel eros donec ac odio tempor. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Eu nisl nunc mi ipsum. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sed viverra ipsum nunc aliquet bibendum. Magna fringilla urna porttitor rhoncus dolor purus non enim. A diam sollicitudin tempor id eu. Feugiat scelerisque varius morbi enim nunc faucibus a. Iaculis at erat pellentesque adipiscing. Non tellus orci ac auctor augue mauris augue neque.",
        price: 134.14,
        avgRating: 4.0,
        reviews: [
          { username: "joey", review: "adasasdad", rating: 5 },
          { username: "sally", review: "adasasdad", rating: 4 },
          { username: "molley", review: "adasasdad", rating: 3 },
          { username: "jackson", review: "adasasdad", rating: 2 },
          { username: "shane", review: "adasasdad", rating: 1 },
        ],
      },
      {
        _id: 2,
        src:
          "https://ae01.alicdn.com/kf/H4eb29dff80f54a99af67732e5e32c22cf/Men-s-Real-Leather-Jacket-Men-Motorcycle-Removable-Hood-winter-coat-Men-Warm-Genuine-Leather-Jackets.jpg",
        alt: "jacket",
        title: "Harlem Jacket",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tristique senectus et netus et malesuada fames ac. Proin nibh nisl condimentum id venenatis a. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vel eros donec ac odio tempor. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Eu nisl nunc mi ipsum. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sed viverra ipsum nunc aliquet bibendum. Magna fringilla urna porttitor rhoncus dolor purus non enim. A diam sollicitudin tempor id eu. Feugiat scelerisque varius morbi enim nunc faucibus a. Iaculis at erat pellentesque adipiscing. Non tellus orci ac auctor augue mauris augue neque.",
        price: 134.14,
        avgRating: 4.0,
        reviews: [
          { username: "joey", review: "adasasdad", rating: 5 },
          { username: "sally", review: "adasasdad", rating: 4 },
          { username: "molley", review: "adasasdad", rating: 3 },
          { username: "jackson", review: "adasasdad", rating: 2 },
          { username: "shane", review: "adasasdad", rating: 1 },
        ],
      },
      {
        _id: 3,
        src:
          "https://ae01.alicdn.com/kf/H4eb29dff80f54a99af67732e5e32c22cf/Men-s-Real-Leather-Jacket-Men-Motorcycle-Removable-Hood-winter-coat-Men-Warm-Genuine-Leather-Jackets.jpg",
        alt: "jacket",
        title: "Harlem Jacket",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tristique senectus et netus et malesuada fames ac. Proin nibh nisl condimentum id venenatis a. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vel eros donec ac odio tempor. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Eu nisl nunc mi ipsum. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sed viverra ipsum nunc aliquet bibendum. Magna fringilla urna porttitor rhoncus dolor purus non enim. A diam sollicitudin tempor id eu. Feugiat scelerisque varius morbi enim nunc faucibus a. Iaculis at erat pellentesque adipiscing. Non tellus orci ac auctor augue mauris augue neque.",
        price: 134.14,
        avgRating: 4.0,
        reviews: [
          { username: "joey", review: "adasasdad", rating: 5 },
          { username: "sally", review: "adasasdad", rating: 4 },
          { username: "molley", review: "adasasdad", rating: 3 },
          { username: "jackson", review: "adasasdad", rating: 2 },
          { username: "shane", review: "adasasdad", rating: 1 },
        ],
      },
      {
        _id: 4,
        src:
          "https://ae01.alicdn.com/kf/H4eb29dff80f54a99af67732e5e32c22cf/Men-s-Real-Leather-Jacket-Men-Motorcycle-Removable-Hood-winter-coat-Men-Warm-Genuine-Leather-Jackets.jpg",
        alt: "jacket",
        title: "Harlem Jacket",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tristique senectus et netus et malesuada fames ac. Proin nibh nisl condimentum id venenatis a. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vel eros donec ac odio tempor. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Eu nisl nunc mi ipsum. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sed viverra ipsum nunc aliquet bibendum. Magna fringilla urna porttitor rhoncus dolor purus non enim. A diam sollicitudin tempor id eu. Feugiat scelerisque varius morbi enim nunc faucibus a. Iaculis at erat pellentesque adipiscing. Non tellus orci ac auctor augue mauris augue neque.",
        price: 134.14,
        avgRating: 4.0,
        reviews: [
          { username: "joey", review: "adasasdad", rating: 5 },
          { username: "sally", review: "adasasdad", rating: 4 },
          { username: "molley", review: "adasasdad", rating: 3 },
          { username: "jackson", review: "adasasdad", rating: 2 },
          { username: "shane", review: "adasasdad", rating: 1 },
        ],
      },
      {
        _id: 5,
        src:
          "https://ae01.alicdn.com/kf/H4eb29dff80f54a99af67732e5e32c22cf/Men-s-Real-Leather-Jacket-Men-Motorcycle-Removable-Hood-winter-coat-Men-Warm-Genuine-Leather-Jackets.jpg",
        alt: "jacket",
        title: "Harlem Jacket",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tristique senectus et netus et malesuada fames ac. Proin nibh nisl condimentum id venenatis a. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vel eros donec ac odio tempor. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Eu nisl nunc mi ipsum. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sed viverra ipsum nunc aliquet bibendum. Magna fringilla urna porttitor rhoncus dolor purus non enim. A diam sollicitudin tempor id eu. Feugiat scelerisque varius morbi enim nunc faucibus a. Iaculis at erat pellentesque adipiscing. Non tellus orci ac auctor augue mauris augue neque.",
        price: 134.14,
        avgRating: 4.0,
        reviews: [
          { username: "joey", review: "adasasdad", rating: 5 },
          { username: "sally", review: "adasasdad", rating: 4 },
          { username: "molley", review: "adasasdad", rating: 3 },
          { username: "jackson", review: "adasasdad", rating: 2 },
          { username: "shane", review: "adasasdad", rating: 1 },
        ],
      },
      {
        _id: 6,
        src:
          "https://ae01.alicdn.com/kf/H4eb29dff80f54a99af67732e5e32c22cf/Men-s-Real-Leather-Jacket-Men-Motorcycle-Removable-Hood-winter-coat-Men-Warm-Genuine-Leather-Jackets.jpg",
        alt: "jacket",
        title: "Harlem Jacket",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tristique senectus et netus et malesuada fames ac. Proin nibh nisl condimentum id venenatis a. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vel eros donec ac odio tempor. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Eu nisl nunc mi ipsum. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sed viverra ipsum nunc aliquet bibendum. Magna fringilla urna porttitor rhoncus dolor purus non enim. A diam sollicitudin tempor id eu. Feugiat scelerisque varius morbi enim nunc faucibus a. Iaculis at erat pellentesque adipiscing. Non tellus orci ac auctor augue mauris augue neque.",
        price: 134.14,
        avgRating: 4.0,
        reviews: [
          { username: "joey", review: "adasasdad", rating: 5 },
          { username: "sally", review: "adasasdad", rating: 4 },
          { username: "molley", review: "adasasdad", rating: 3 },
          { username: "jackson", review: "adasasdad", rating: 2 },
          { username: "shane", review: "adasasdad", rating: 1 },
        ],
      },
      {
        _id: 7,
        src:
          "https://ae01.alicdn.com/kf/H4eb29dff80f54a99af67732e5e32c22cf/Men-s-Real-Leather-Jacket-Men-Motorcycle-Removable-Hood-winter-coat-Men-Warm-Genuine-Leather-Jackets.jpg",
        alt: "jacket",
        title: "Harlem Jacket",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tristique senectus et netus et malesuada fames ac. Proin nibh nisl condimentum id venenatis a. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vel eros donec ac odio tempor. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Eu nisl nunc mi ipsum. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sed viverra ipsum nunc aliquet bibendum. Magna fringilla urna porttitor rhoncus dolor purus non enim. A diam sollicitudin tempor id eu. Feugiat scelerisque varius morbi enim nunc faucibus a. Iaculis at erat pellentesque adipiscing. Non tellus orci ac auctor augue mauris augue neque.",
        price: 134.14,
        avgRating: 4.0,
        reviews: [
          { username: "joey", review: "adasasdad", rating: 5 },
          { username: "sally", review: "adasasdad", rating: 4 },
          { username: "molley", review: "adasasdad", rating: 3 },
          { username: "jackson", review: "adasasdad", rating: 2 },
          { username: "shane", review: "adasasdad", rating: 1 },
        ],
      },
      {
        _id: 8,
        src:
          "https://ae01.alicdn.com/kf/H4eb29dff80f54a99af67732e5e32c22cf/Men-s-Real-Leather-Jacket-Men-Motorcycle-Removable-Hood-winter-coat-Men-Warm-Genuine-Leather-Jackets.jpg",
        alt: "jacket",
        title: "Harlem Jacket",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tristique senectus et netus et malesuada fames ac. Proin nibh nisl condimentum id venenatis a. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vel eros donec ac odio tempor. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Eu nisl nunc mi ipsum. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sed viverra ipsum nunc aliquet bibendum. Magna fringilla urna porttitor rhoncus dolor purus non enim. A diam sollicitudin tempor id eu. Feugiat scelerisque varius morbi enim nunc faucibus a. Iaculis at erat pellentesque adipiscing. Non tellus orci ac auctor augue mauris augue neque.",
        price: 134.14,
        avgRating: 4.0,
        reviews: [
          { username: "joey", review: "adasasdad", rating: 5 },
          { username: "sally", review: "adasasdad", rating: 4 },
          { username: "molley", review: "adasasdad", rating: 3 },
          { username: "jackson", review: "adasasdad", rating: 2 },
          { username: "shane", review: "adasasdad", rating: 1 },
        ],
      },
      {
        _id: 9,
        src:
          "https://ae01.alicdn.com/kf/H4eb29dff80f54a99af67732e5e32c22cf/Men-s-Real-Leather-Jacket-Men-Motorcycle-Removable-Hood-winter-coat-Men-Warm-Genuine-Leather-Jackets.jpg",
        alt: "jacket",
        title: "Harlem Jacket",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Tristique senectus et netus et malesuada fames ac. Proin nibh nisl condimentum id venenatis a. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vel eros donec ac odio tempor. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Eu nisl nunc mi ipsum. Adipiscing bibendum est ultricies integer quis auctor elit sed. Sed viverra ipsum nunc aliquet bibendum. Magna fringilla urna porttitor rhoncus dolor purus non enim. A diam sollicitudin tempor id eu. Feugiat scelerisque varius morbi enim nunc faucibus a. Iaculis at erat pellentesque adipiscing. Non tellus orci ac auctor augue mauris augue neque.",
        price: 134.14,
        avgRating: 4.0,
        reviews: [
          { username: "joey", review: "adasasdad", rating: 5 },
          { username: "sally", review: "adasasdad", rating: 4 },
          { username: "molley", review: "adasasdad", rating: 3 },
          { username: "jackson", review: "adasasdad", rating: 2 },
          { username: "shane", review: "adasasdad", rating: 1 },
        ],
      },
    ],
  };

  render() {
    return (
      <div>
        <NavigationBar products={this.state.products} />
        <Switch>
          <Route
            path="/banners"
            render={(props) => (
              <Banners {...props} products={this.state.products} />
            )}
          />
          <Route
            path="/shirts"
            render={(props) => (
              <Shirts {...props} products={this.state.products} />
            )}
          />
          <Route
            path="/toppers"
            render={(props) => (
              <Toppers {...props} products={this.state.products} />
            )}
          />
          <Route
            path="/totes"
            render={(props) => (
              <Totes {...props} products={this.state.products} />
            )}
          />
          <Route
            path="/tumblers"
            render={(props) => (
              <Tumblers {...props} products={this.state.products} />
            )}
          />
          <Route path="/product_details" component={ProductDetails} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
