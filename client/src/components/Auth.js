import React, { Component, useContext } from "react";
import Login from "./Login";
import Signup from "./Signup";
import API from "../utils/API";

class Auth extends Component {

  state = {
    loggedIn: false,
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    user: null,
    message: ""
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.login({
        username: this.state.username,
        password: this.state.password,

      }).then(user => {
        console.log(user);
        if (user.data.loggedIn) {
          this.setState({
            loggedIn: true,
            user: user.data.user
          });
          console.log("log in successful");
          // {this.props.handleAuthChange = true}
        }
        else if (user.data.message) {
          this.setState({
            message: user.data.message
          })
        }
      });
    }
  }

  handleSignup = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.signup({
        username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }).then(user => {
        if (user.data.loggedIn) {
          this.setState({
            loggedIn: true,
            user: user.data.user
          });
          console.log("log in successful");
          
        } else {
          console.log("something went wrong :(")
          console.log(user.data);
          this.setState({
            message: user.data
          })
        }
      })
    }
  }

  render() {
    return (
      <div className="authBox">
        {(this.props.action === "login") ? (
          <Login
            username={this.state.username}
            password={this.state.password}
            handleLogin={this.handleLogin}
            handleInputChange={this.handleInputChange}
            message={this.state.message}
          />
        ) : (
            <Signup
              username={this.state.username}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              password={this.state.password}
              confirmPassword={this.state.confirmPassword}
              handleSignup={this.handleSignup}
              handleInputChange={this.handleInputChange}
              message={this.state.message}
            />
          )}
      </div>
    )
  }
}



export default Auth;