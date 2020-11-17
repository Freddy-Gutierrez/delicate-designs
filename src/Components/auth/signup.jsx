import React, { Component } from "react";
import { getCurrentUser,signup } from "../../services/auth";
import { Link, Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    data: { username: "", password: "" },
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state.data;
    signup(username, password);
  };

  render() {
    if (getCurrentUser()) return <Redirect to="/" />;
    return (
      <div>
        <div className="login-container">
          <span>
            <h3>Sign Up</h3>
            <form onSubmit={this.handleSubmit}>
              <p style={{marginBottom: "0px"}}>Username</p>
              <input type="text" style={{marginBottom: "5px"}} name="username" onChange={this.handleChange} />
              <p style={{marginBottom: "0px"}}>Password</p>
              <input type="password" style={{marginBottom: "5px"}} name="password" onChange={this.handleChange}/>
              <p>
                <button type="submit">Sign Up</button>
              </p>
              <p>
                Already have an account?<Link to="/login">Login</Link>
              </p>
            </form>            
          </span>
        </div>
      </div>
    );
  }
}

export default Signup;
