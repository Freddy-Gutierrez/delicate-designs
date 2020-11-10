import React, { Component } from 'react';
import {addReview} from '../../services/reviewService';
class FeedbackForm extends Component {
    state = {  }

    handleChange = ({ currentTarget: input }) => {
        const comment = { ...this.state.comment };
        comment[input.name] = input.value;
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
            <div>
                <p>Please give your feedback:</p>
                <form onSubmit={this.handleSubmit} className="form">
                    <p>Rating 
                        1
                        <input type="radio" name="rating" onChange={this.handleChange} value={1} required/>
                        <input type="radio" name="rating" onChange={this.handleChange} value={2} required/>
                        <input type="radio" name="rating" onChange={this.handleChange} value={3} required/>
                        <input type="radio" name="rating" onChange={this.handleChange} value={4} required/>
                        <input type="radio" name="rating" onChange={this.handleChange} value={5} required/>
                        5
                    </p>
                    <p>
                        Review
                        <textarea                            
                            name="review"
                            rows="5"
                            cols="40"                           
                            onChange={this.handleChange}
                            required
                        />
                    </p>
                    <button className="btn btn-primary" type="submit">
                       Submit
                    </button>
                </form>
            </div>
         );
    }
}
 
export default FeedbackForm;
