import React, { Component } from 'react';
var valid = require('card-validator');

class Pay extends Component {
    state = {  }

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
        console.log( this.props.location.state)
        return ( 
        <div>
            <h1>PAYMENT</h1>        
            <button onClick={this.validate}>validate</button>         
        </div> );
    }
}
 
export default Pay;