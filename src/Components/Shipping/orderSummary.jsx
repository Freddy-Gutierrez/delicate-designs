import React from 'react';
import {withRouter} from 'react-router-dom';

const OrderSummary = (props) => {
    const {cart, total, remove, history} = props;
    const image = "/option0.jpg";
    return ( 
        <div className="cart-items">
        <h3 className="title" >Order Summary</h3>
        {cart.map((product, i) => {
          return (
            <div className="cart-entry" key={product.item._id}>
              <img 
              src={product.item.src+image}
              alt="product"
              className="cart-img"
              onClick={() =>
                history.push({
                  pathname: "/product_details",
                  state: { product: cart[i].item },
                })
              } 
              />
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
                    className="remove"
                    onClick={() => remove(product.item._id)}
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
     );
}
 
export default withRouter(OrderSummary);