import React, { Component } from "react";

const option0 = "/option0.jpg";
const option1 = "/option1.jpg";

// const option2 = "/option2.jpg";
// const option3 = "/option3.jpg";
// const option4 = "/option4.jpg";

class ProductDetails extends Component {
  
  state = { 
    product: null,
    selectedSrc: null,
    selectedId: 0,
    quantity: 1 };

  componentDidMount() {
    const { product } = this.props.location.state;
    this.setState({product, selectedSrc: product.src + option0})
  }

  updateImage = (e) => {        
    this.setState({selectedSrc: e.target.src, selectedId: e.target.id})
    console.log(e.target.id);
  }

  incrementQuantity = () => {
    let quantity = this.state.quantity + 1;
    this.setState({ quantity });
  };

  decrementQuantity = () => {
    let quantity = this.state.quantity - 1;
    this.setState({ quantity });
  };


  render() {
    const { product, selectedSrc } = this.state;    
    return (
      !this.state.product ? <div/> :
      <div>
        <h1 style={{textAlign: "center", paddingBottom: "10px"}}>Product details</h1>
        <div className="product-detail-container">
          <div className="product-img-options">
            <img id={0} src={product.src + option0} alt={product.alt} className="img-preview" onClick={(e) => this.updateImage(e)} style={this.state.selectedId == 0 ? {border: "solid black"} : {border: "none"}} />
            <img id={1} src={product.src + option1} alt={product.alt} className="img-preview" onClick={(e) => this.updateImage(e)} style={this.state.selectedId == 1 ? {border: "solid black"} : {border: "none"}} />            
          </div>
          <img
            src={selectedSrc}
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
                  onClick={() => this.props.addToCart(product, this.state.quantity)}
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
