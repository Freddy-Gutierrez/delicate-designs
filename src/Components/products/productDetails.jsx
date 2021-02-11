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
    quantity: 0 };

  componentDidMount() {
    const { product } = this.props.location.state;
    this.setState({product, selectedSrc: product.src + option0})
  }

  updateImage = (e) => {        
    this.setState({selectedSrc: e.target.src, selectedId: e.target.id})
    console.log(e.target.id);
  }

  handleChange = ({ currentTarget: input }) => {
    let quantity = input.value;
    this.setState({quantity});
  }

  // incrementQuantity = () => {
  //   let quantity = this.state.quantity + 1;
  //   this.setState({ quantity });
  // };

  // decrementQuantity = () => {
  //   let quantity = this.state.quantity - 1;
  //   this.setState({ quantity });
  // };


  render() {
    const { product, selectedSrc, quantity } = this.state;  
    console.log(product);
    return (
        !this.state.product ? <div/> :
        <div>
            <h1 className="page-title">Product details</h1>
            <div className="grid grid-cols-3 details">
            <div className="details__image__options">
                <img id={0} src={product.src + option0} alt={product.alt} className="details__preview" onClick={(e) => this.updateImage(e)} style={this.state.selectedId == 0 ? {border: "2px solid black"} : {border: "none"}} />
                <img id={1} src={product.src + option1} alt={product.alt} className="details__preview" onClick={(e) => this.updateImage(e)} style={this.state.selectedId == 1 ? {border: "2px solid black"} : {border: "none"}} />
            </div>
            <img className="details__main__image" src={selectedSrc} alt={product.alt} />
            <div>
              <h2 className="details__title">{product.title}</h2>
              <p className="details__description">{product.description}</p>
            </div>
            <div>
              <label className="label" htmlFor="quantity">Quantity</label>
              <input type="number" id="quantity" min="0" max="100" onChange={this.handleChange}/>
              <button 
                className="custom-btn custom-btn-blue"
                onClick={() => this.props.addToCart(product, parseInt(quantity))}
                disabled={quantity > 0 ? false : true}
              >ADD TO CART</button>
            </div>
          </div>
        </div>
            );
          }
        }

export default ProductDetails;
