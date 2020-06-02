import React from "react";
import Row from "./Row";
import Col from "./Col";
import { useAuth0 } from "../react-auth0-spa";

function Navbar(){

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return(
        <> 
            <Row id= "nav-header">
            {/* <Row style= {{height: "10rem", backgroundColor: "#157017"}}> */}
                <div>
                    <img src= "./images/destination-gear-logo.png" alt= "logo" id= "logo"></img>
                    <h1 id= "heading">Destination Gear</h1>
                    {!isAuthenticated && (
                        <button onClick={() => loginWithRedirect({})}>Log in</button>
                        )}
                    {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
                </div>
                {/* <Col size= "lg-2 sm-10">
                    <ul>
                        <li className= "nav-buttons justify-content-center"><a href="/destinations">Destinations</a></li> 
                        <li className= "nav-buttons justify-content-center"><a href="/blog">Blog</a></li> 
                        <li className= "nav-buttons justify-content-center"><a href="/login">Login/Signup</a></li>
                    </ul>
                </Col> */}
                
            </Row>
            <Row style= {{backgroundColor: "black", height: ".7rem"}}></Row>
            <Row style= {{backgroundColor: "white", height: ".001rem", marginBottom: ".25rem"}}></Row>
            <Row style= {{backgroundColor: "black", height: ".7rem"}}></Row>
        </>
    )
}

export default Navbar;