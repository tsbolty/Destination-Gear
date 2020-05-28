import React, {useRef} from 'react';
import { useStoreContext } from "../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";

const Signup = ()=>{


  const usernameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveUser({
      userName: usernameRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value
    })
  }

    // const clearFields = ()=>{
    //   usernameRef.current.value = "";
    //   firstNameRef.current.value = "";
    //   lastNameRef.current.value = "";
    //   emailRef.current.value = "";
    //   phoneNumberRef.current.value = "";
    // }

  return (
    <>
      <h2>Sign up here!</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" id= "signup-username" placeholder="Username" name="Username" ref={usernameRef} />
        <input type="text" id= "signup-firstname" placeholder="First name" name="firstname" ref={firstNameRef} />
        <input type="text" id= "signup-lastname" placeholder="Last name" name="lastname" ref={lastNameRef} />
        <input type="text" id= "signup-email" placeholder="Email" name="email" ref={emailRef} />
        <input type="tel" id= "signup-phonenumber" placeholder="Mobile number" name="phoneNumber" ref={phoneNumberRef} />
        <button type="submit" disabled={state.loading}>Sign up</button>
        {/* <button className="greytext" onClick={clearFields()}>Cancel</button> */}
 </form>
    </>
  );
    
}

export default Signup