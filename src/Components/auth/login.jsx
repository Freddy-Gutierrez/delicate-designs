import React, { Component } from "react";
import { login } from "../../services/auth";
import { Link } from "react-router-dom";
import "../../CSS/login.css";

class Login extends Component {
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
    login(username, password);
  };

  render() {  
    return (      
        <div className="container login__container">
          <form className="login__form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" onChange={this.handleChange} autoFocus={true}/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={this.handleChange} />
            </div>
            <button className="custom-btn custom-btn-blue custom-btn-block" type="submit">Login</button>
            <p className="login__swap">Don't have an account?<Link className="login__link" to="/signup">Sign Up</Link></p>
          </form>
        </div>      
    );
  }
}

export default Login;
