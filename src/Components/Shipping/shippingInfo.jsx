import React from 'react';
import SelectStates from './selectStates';
const ShippingInfo = (props) => {
    const {onChange, onSubmit} = props;
    return ( 
        <div className="shipping">
                <form onSubmit={onSubmit}>                   
                    <h2 className="shipping__title">Shipping Information</h2>      
                    <div className="shipping__flexcol">
                        <label className="shipping__label" htmlFor="first">First Name</label>                        
                        <input type="text" name="first" onChange={onChange} min={3} max={25} required={true}/>
                    </div>                    
                    <div className="shipping__flexcol">
                        <label className="shipping__label" htmlFor="last">Last Name</label>                                            
                        <input type="text" name="last" onChange={onChange} min={3} max={25} required={true}/>
                    </div>   
                    <div className="shipping__flexcol">
                        <label className="shipping__label" htmlFor="address">Address</label>                                            
                        <input type="text" name="address" onChange={onChange} min={3} max={50} required={true}/>
                    </div>                       
                    <div className="shipping__optional">
                        <input type="text" placeholder="Apt #, Suite, Floor (optional)" name="optional" onChange={onChange} />
                    </div> 
                    <div className="shipping__flexcol">
                        <label className="shipping__label" htmlFor="city">City</label>                                            
                        <input type="text" name="city" onChange={onChange} min={3} max={25} required={true}/>
                    </div>    
                    <div className="shipping__flexcol">
                        <label className="shipping__label" htmlFor="state">State</label>                                            
                        <SelectStates onChange={onChange}/>
                    </div>  
                    <div className="shipping__flexcol">
                        <label className="shipping__label" htmlFor="zip">Zip</label>                                            
                        <input type="text" name="zip" onChange={onChange} min={3} max={10} required={true} />
                    </div>  
                    <div className="shipping__flexrow">
                        <input className="checkbox" type="checkbox"/>
                        <p className="shipping__text">Save this as my billing address</p>
                    </div> 
                    <h2 className="shipping__title">Contact Information</h2>      
                    <div className="shipping__flexcol">
                        <label className="shipping__label" htmlFor="email">Email</label>                                            
                        <input type="text" name="email" onChange={onChange} min={3} max={50} required={true} />
                    </div>  
                    <div className="shipping__flexcol">
                        <label className="shipping__label" htmlFor="phone">Phone Number</label>                        
                        <input type="text" name="phone" onChange={onChange} min={9} max={10} required={true} />
                    </div>  
                    <input className="custom-btn custom-btn-blue custom-btn-block" type="submit" value="Go to Payment Information" />
            </form>
        </div>
     );
}
 
export default ShippingInfo;