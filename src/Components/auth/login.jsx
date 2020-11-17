import React, { Component } from "react";
import { login } from "../../services/auth";
import { Link } from "react-router-dom";

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
    // if (getCurrentUser()) return <Redirect to="/candidates" />;
    return (
      <div>
        <div className="login-container">
          <span>
            <h3>Login</h3>
            <form onSubmit={this.handleSubmit}>
              <p style={{marginBottom: "0px"}}>Username</p>
              <input type="text" style={{marginBottom: "5px"}} name="username" onChange={this.handleChange} />
              <p style={{marginBottom: "0px"}}>Password</p>
              <input type="password" style={{marginBottom: "5px"}} name="password" onChange={this.handleChange}/>
              <p>
                <button type="submit">Login</button>
              </p>
              <p>
                Don't have an account?<Link to="/signup">Sign Up</Link>
              </p>
            </form>            
          </span>
        </div>
      </div>
    );
  }
}

export default Login;
