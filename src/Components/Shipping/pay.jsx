import React, { Component } from 'react';
var valid = require('card-validator');

class Pay extends Component {
    state = { selectedPayment: -1 }

    selectPayment = (option) => {
        this.setState({selectedPayment: option});
    }

    submitOrder = () =>{
        console.log("order submited");
    }

    validate = () => {
        let isValidName = valid.cardholderName('xc');
        let isValidCard = valid.number('5178057668668028');
        let expirationDate = valid.expirationDate('10//24');
        let isValidCvv = valid.cvv('122', isValidCard.card.code.size);
        let isValidZip = valid.postalCode('1');
        console.log('name', isValidName);
        console.log('card', isValidCard);
        console.log('exp date', expirationDate);
        console.log('Cvv', isValidCvv);
        console.log('Zip', isValidZip);
    }

    render() {         
        const {total, data} = this.props.location.state;
        return ( 
            <div className="payment-container">
                <h1>PAYMENT</h1>
                <form onSubmit={this.submitOrder}>
                <div className="payment-types">
                    <img className="payment-logo" src="/visa_logo.jpg" alt="visa logo" style={this.state.selectedPayment === 0 ? {border: "solid rgb(5, 183, 253)"} : {border: "solid white"}} onClick={() => this.selectPayment(0)}/>
                    <img className="payment-logo" src="/mastercard_logo.jpg" alt="mastercard logo" style={this.state.selectedPayment === 1 ? {border: "solid rgb(5, 183, 253)"} : {border: "solid white"}} onClick={() => this.selectPayment(1)}/>
                    <img className="payment-logo" src="/discover_logo.jpg" alt="discover logo" style={this.state.selectedPayment === 2 ? {border: "solid rgb(5, 183, 253)"} : {border: "solid white"}} onClick={() => this.selectPayment(2)}/>
                    <img className="payment-logo" src="/american_express_logo.png" alt="american express logo" style={this.state.selectedPayment === 3 ? {border: "solid rgb(5, 183, 253)"} : {border: "solid white"}} onClick={() => this.selectPayment(3)}/>
                </div>
                <div className="input-parent">
                    <h6>CARD NUMBER</h6>
                    <input className="card-number" type="text" placeholder="1234 5678 9012 3456" required={true} />
                </div>   
                <div className="payment-fields">                    
                    <div style={{width:"70%"}}>
                        <h6>CARD HOLDER NAME</h6>
                        <input className="card-name" type="text" placeholder="John Smith" required={true} />                        
                    </div>
                    <div style={{width:"30%"}}>
                        <h6>EXP DATE</h6>
                        <input className="card-date" type="text" placeholder="10/24" required={true} />                        
                    </div>
                    <div style={{width:"30%"}}>
                        <h6>CVV</h6>
                        <input className="card-cvv" type="text" placeholder="- - -" required={true} />                        
                    </div>
                </div>
                <input type="submit" value="Place Order" />     
                </form>        
            </div> 
        );
    }
}
 
export default Pay;