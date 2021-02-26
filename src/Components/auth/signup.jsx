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
      <div className="container login">
        <div className="login__container">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" onChange={this.handleChange} autoFocus={true}/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={this.handleChange} />
            </div>
            <button className="custom-btn custom-btn-blue custom-btn-block" type="submit">Sign Up</button>
            <p className="login__swap">Already have an account?<Link className="login__link" to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
