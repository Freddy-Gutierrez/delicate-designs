import React from 'react';
import {withRouter} from 'react-router-dom';

const OrderSummary = (props) => {
    const {cart, total, remove, history} = props;
    const image = "/option0.jpg";
    return ( 
        <div className="cart">
        <h2 className="shipping__title">Order Summary</h2>
        <div className="cart__items">
          {cart.map((product, i) => {
            return (
              <div className="grid grid-cols-full cart__entry" key={product.item._id}>
                <img
                src={product.item.src+image}
                alt="product"
                className="cart__image"
                onClick={() =>
                  history.push({
                    pathname: "/product_details",
                    state: { product: cart[i].item },
                  })
                }
                />
                <div className="cart__details">
                  <h3 className="cart__title">{product.item.title}</h3>
                  <p>{`Qty: ${product.quantity}`}</p>
                  <p>{`Price: ${product.item.price}`}</p>
                  <button className="remove"onClick={() => remove(product.item._id)}>Remove</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart__total">{`Total: $${total}`}</div>     
      </div>    
     );
}
 
export default withRouter(OrderSummary);