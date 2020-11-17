import React, { Component } from 'react';
import Products from "./products";
import { getBanners, getPillows, getShirts, getTumblers, getToppers, getTotes } from '../../services/productsService';

class ProductsPage extends Component {
    state = {products: null};
  
    async componentDidMount() {
      let products;
      switch(this.props.title){
        case "Pillows":
            products = await getPillows(this.props.productDirectory);
            break;
        case "Shirts":
          products = await getShirts(this.props.productDirectory);
          break;
        case "Toppers":
          products = await getToppers(this.props.productDirectory);
          break;
        case "Totes":
          products = await getTotes(this.props.productDirectory);
          break;
        case "Tumblers":
          products = await getTumblers(this.props.productDirectory);
          break;
        default:
          break;
      }
      this.setState({products})
    }
  
    render() {
      return (
        this.state.products === null ? <div/> : 
        <div>
          <h1 style={{textAlign: "center", paddingBottom: "10px"}}>{this.props.title}</h1>
          <Products products={this.state.products} {...this.props} />
        </div>
      );
    }
}
 
export default ProductsPage;