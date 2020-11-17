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
            <div className="table-wrapper">
                <form onSubmit={this.handleSubmit} className="form">
                <table className="feedback-table">
                    <thead>
                        <tr>
                            <td colSpan={2}> <div style={{textAlign: "center"}}>Please give your feedback</div> </td>
                        </tr>                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rating: </td>
                            <td>
                                1
                                <input style={{margin: "1%"}} type="radio" name="rating" onChange={this.handleChange} value={1} required/>
                                <input style={{margin: "1%"}} type="radio" name="rating" onChange={this.handleChange} value={2} required/>
                                <input style={{margin: "1%"}} type="radio" name="rating" onChange={this.handleChange} value={3} required/>
                                <input style={{margin: "1%"}} type="radio" name="rating" onChange={this.handleChange} value={4} required/>
                                <input style={{margin: "1%"}} type="radio" name="rating" onChange={this.handleChange} value={5} required/>
                                5    
                            </td>
                        </tr>
                        <tr>
                            <td>Review: </td>
                            <td>
                                <textarea                            
                                    name="review"
                                    className="feedback-text"
                                    rows="5"
                                    cols="55"                           
                                    onChange={this.handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button style={{marginLeft: "40%"}} className="btn btn-primary" type="submit">Submit</button>
                            </td>
                        </tr>
                    </tbody>     
                </table>
                </form>               
            </div>
         );
    }
}
 
export default FeedbackForm;
