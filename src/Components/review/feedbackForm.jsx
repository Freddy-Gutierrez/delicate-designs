import React, { Component } from 'react';
import {addReview} from '../../services/reviewService';
class FeedbackForm extends Component {
    state = {  }

    handleChange = ({ currentTarget: input }) => {
        const comment = { ...this.state.comment };
        comment[input.name] = input.value;
        console.log(comment);
        this.setState({ comment });
      };
    
      handleSubmit = async (event) => {
        event.preventDefault();
        const productId = this.props.match.params.id;
        const {rating, review } = this.state.comment;
        await addReview(productId, rating, review);        
      };

    render() { 
        return ( 
            <div className="container">
                <h1 className="page-title">Please Give Your Feedback</h1>                    
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="form__group">
                        <label htmlFor="rating">Rating</label>
                        <div className="radio-container">
                            <span>1</span>
                            <input type="radio" id="rating" name="rating" onChange={this.handleChange} value={1} required/>
                            <input type="radio" id="rating" name="rating" onChange={this.handleChange} value={2} required/>
                            <input type="radio" id="rating" name="rating" onChange={this.handleChange} value={3} required/>
                            <input type="radio" id="rating" name="rating" onChange={this.handleChange} value={4} required/>
                            <input type="radio" id="rating" name="rating" onChange={this.handleChange} value={5} required/>
                            <span>5</span>
                        </div>
                    </div>
                    <div className="form__group">
                        <label htmlFor="review">Review</label>
                        <textarea
                            id="review"
                            name="review"
                            className="feedback__text"
                            rows="5"
                            cols="55"
                            onChange={this.handleChange}
                            required
                        />
                    </div>                         
                    <button className="custom-btn custom-btn-blue">Submit</button>
                </form>               
            </div>
         );
    }
}
 
export default FeedbackForm;
