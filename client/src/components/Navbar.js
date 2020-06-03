import React from "react";
import Row from "./Row";
import { useAuth0 } from "../react-auth0-spa";

function Navbar(){

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return(
        <heading style= {{position: "fixed", zIndex: 99}}> 
            <Row className= "justify-content-end">
                <div className= "col" id= "nav-header">
                <div>
                    <img src= "./images/destination-gear-logo.png" alt= "logo" id= "logo"></img>
                    <h1 id= "heading">Destination Gear</h1>
                    {!isAuthenticated && (
                        <button onClick={() => loginWithRedirect({})}>Log in</button>
                        )}
                    {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
                </div>
                </div>
            </Row>
        </heading>
    )
}

export default Navbar;