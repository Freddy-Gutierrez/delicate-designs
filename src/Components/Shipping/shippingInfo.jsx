import React from 'react';
import SelectStates from './selectStates';
const ShippingInfo = (props) => {
    const {onChange} = props;
    return ( 
        <div className="shipping-info">
            <h1 className="title">Getting Your Order</h1>
            <h4 className="title">Shipping Information</h4>      
            <div className="shipping-element">
                <h6>First Name</h6>
                <input className="input" type="text" name="first" onChange={onChange}/>
            </div>                    
            <div className="shipping-element">
                <h6>Last Name</h6>
                <input className="input" type="text" name="last" onChange={onChange}/>
            </div>   
            <div className="shipping-element">
                <h6>Address</h6>
                <input className="input" type="text" name="address" onChange={onChange}/>          
            </div>   
            <div style={{marginLeft: "2%", marginTop: "2%"}}>
                <input className="input" type="text" placeholder="Apt #, Suite, Floor (optional)" name="optional" onChange={onChange} />
            </div>   
            <div className="shipping-element">
                <h6>City</h6>
                <input className="input" type="text" name="city" onChange={onChange}/>
            </div>   
            <div className="couplet">
            <div style={{marginRight:"2%"}}>
                <h6>State</h6>
                <SelectStates onChange={onChange}/>
            </div>
            <div>
                <h6>Zip Code</h6>
                <input className="input" type="text" name="zip" onChange={onChange}/>
            </div>            
            </div>   
            <div className="couplet">
                <input type="checkbox" style={{marginTop:"3px", marginRight:"2px"}}/>
                <p className="checkbox-text">Save this as my billing address</p>
            </div> 
            <h4 className="title">Contact Information</h4>       
            <div className="shipping-element">
                <h6>Email Address</h6>
                <input className="input" type="text" name="email" onChange={onChange}/>
            </div>   
            <div className="shipping-element">
                <h6>Phone Number</h6>
                <input className="input" type="text" name="phone" onChange={onChange}/>
            </div>  
            <button className="continue-to-payment-button">
                Continue to Payment Information
            </button>
        </div>
     );
}
 
export default ShippingInfo;