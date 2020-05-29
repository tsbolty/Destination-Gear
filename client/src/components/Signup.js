// import React, {useRef, useState} from 'react';
// import axios from "axios";
// // import { useStoreContext } from "../utils/GlobalState";
// // import { LOADING } from "../utils/actions";


// const Signup = ()=>{

//   // const [user, setUser] = useState({
//   //   username: "",
//   //   firstName: "",
//   //   lastName: "",
//   //   email: "",
//   //   phoneNumber: "",
//   //   password: ""
//   // })
  
//   const usernameRef = useRef();
//   const firstNameRef = useRef();
//   const lastNameRef = useRef();
//   const emailRef = useRef();
//   const phoneNumberRef = useRef();
//   const passwordRef = useRef();
//   // const [state, dispatch] = useStoreContext();

//   const handleFormSubmit = e => {
//     e.preventDefault();
//     // var clearFields = ()=>{
//     //   usernameRef.current.value = "";
//     //   firstNameRef.current.value = "";
//     //   lastNameRef.current.value = "";
//     //   emailRef.current.value = "";
//     //   phoneNumberRef.current.value = "";
//     //   passwordRef.current.value = "";
//     // }

//     axios.post("/api/users/signup", {
//       username: usernameRef.current.value.trim(),
//       firstName: firstNameRef.current.value.trim(),
//       lastName: lastNameRef.current.value.trim(),
//       email: emailRef.current.value,
//       phoneNumber: phoneNumberRef.current.value,
//       password: passwordRef.current.value
//     })
//     .then(res=> console.log(res))
//     //   setUser({
//     //   username: usernameRef.current.value.trim(),
//     //   firstName: firstNameRef.current.value.trim(),
//     //   lastName: lastNameRef.current.value.trim(),
//     //   email: emailRef.current.value,
//     //   phoneNumber: phoneNumberRef.current.value,
//     //   password: passwordRef.current.value
//     // }))
//     .catch(err=> console.log(err))
//   }
    
//   return (
//     <>
//       <h2>Sign up here!</h2>
//       <form onSubmit={handleFormSubmit} >
//         <input type="text" id= "signup-username" placeholder="Username" name="Username" ref={usernameRef} />
//         <input type="text" id= "signup-firstname" placeholder="First name" name="firstname" ref={firstNameRef} />
//         <input type="text" id= "signup-lastname" placeholder="Last name" name="lastname" ref={lastNameRef} />
//         <input type="text" id= "signup-email" placeholder="Email" name="email" ref={emailRef} />
//         <input type="tel" id= "signup-phonenumber" placeholder="Mobile number" name="phoneNumber" ref={phoneNumberRef} />
//         <input type="password" id= "signup-password" placeholder="Password" name="password" ref={passwordRef} />
//         <button type="submit" >Sign up</button>
//         {/* THIS GOES IN THE BUTTON ABOVE!!! disabled={state.loading} */}
//         {/* <button className="greytext" onClick={clearFields}>Cancel</button> */}
//  </form>
//     </>
//   );
    
// }

// export default Signup







import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import { Link } from "react-router-dom";

class Signup extends Component {
    constructor(props) {
      super(props) 
      this.state = {
        validUsername: false,
        validPassword: false,
        confirmPassword: false
    }
  }
    
    componentDidUpdate() {
        this.validatePassword();
        this.confirmPassword();
        this.validateUsername();
    }

    validateUsername() {
        if (this.props.username.length > 1 && !this.state.validUsername) {
            this.setState({
                validUsername: true
            });
        }
        if (this.props.username.length < 1 && this.state.validUsername) {
            this.setState({
                validUsername: false
            });
        }
    }

    validatePassword() {
        let strongPassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
        let valid = strongPassword.test(this.props.password);
        if (!this.state.validPassword && valid) {
            this.setState({
                validPassword: true
            });
        }
        if (this.state.validPassword && !valid) {
            this.setState({
                validPassword: false,
            });
        }
    }

    confirmPassword() {
        if (this.props.password === this.props.confirmPassword && !this.state.confirmPassword && this.props.password) {
            this.setState({
                confirmPassword: true
            });
        }
        if (this.props.password !== this.props.confirmPassword && this.state.confirmPassword) {
            this.setState({
                confirmPassword: false
            });
        }
    }

    render() {
        return (
            <div>
                <h2 className="loginTitle title-font">Signup</h2>
                <hr />
                {this.props.message?(
                    <Alert className="animated fadeIn" color="danger">{this.props.message}</Alert>
                ): (<></>)}
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="username" value={this.props.username} onChange={this.props.handleInputChange} valid={this.state.validUsername} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="password" value={this.props.password} onChange={this.props.handleInputChange} valid={this.state.validPassword} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" value={this.props.confirmPassword} onChange={this.props.handleInputChange} valid={this.state.confirmPassword} />
                        <FormText>at least 8 characters, 1 capital & 1 number</FormText>
                    </FormGroup>
                    {/* if all fields are valid, allow the user to submit the form */}
                    {(this.state.validUsername && this.state.validPassword && this.state.confirmPassword) ? (
                        <Button onClick={this.props.handleSignup} color="success" block>Signup</Button>
                    ) : (
                        <Button onClick={this.props.handleSignup} color="danger" block disabled>Signup</Button>
                    )}
                    {/* <p className="signupLink">
                        <Link to="/login">already have an account?  Sign in here</Link>
                    </p> */}
                </Form>
            </div>
        );
    }
}

export default Signup;