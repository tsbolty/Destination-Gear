import React from "react";
import Row from "./Row";
import Col from "./Col";
import { useAuth0 } from "../react-auth0-spa";

function Navbar(){

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return(
        <> 
            <Row className= "justify-content-center" id= "nav-header">
            {/* <Row style= {{height: "10rem", backgroundColor: "#157017"}}> */}
                <Col size= "2">
                    <img src= "./images/destination-gear-logo.png" alt= "logo" id= "logo"></img>
                </Col>
                <Col size= "4">
                    <h1 id= "heading">Destination Gear</h1>
                </Col>
                <Col size= "1">
                
                    {!isAuthenticated && (
                        <button onClick={() => loginWithRedirect({})}>Log in</button>
                    )}

                    {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
                
                </Col>
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