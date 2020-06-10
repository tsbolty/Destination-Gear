import React from "react";
import { useAuth0 } from "../react-auth0-spa";

function Navbar(){

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return(
        <>
        {/* Checks window size for styling purposes */}
        {window.innerWidth < 765
        ?
        <div className= "row" style= {{position: "relative", zIndex: 99, marginTop: "1rem"}}> 
                <div className= "col" id= "nav-header">
                    <div>
                        <div className= "row">
                            <img src= "./images/destination-gear-logo.png" alt= "logo" id= "logo"></img>
                        </div>
                        <div className= "row">
                            <h1 id= "heading" style={{paddingLeft: "2rem"}}>Destination Gear</h1>
                        </div>
                    </div>
                </div>
                <div className= "row">
                        {!isAuthenticated && (
                            <button className= "login-button" onClick={() => loginWithRedirect({})}>Log in</button>
                            )}
                        {isAuthenticated && <button className= "login-button" onClick={() => logout()}>Log out</button>}
                </div>
        </div>
        :
        // Checking for window size of less than 1001px
        window.innerWidth < 1001
        ?
        <div className= "row" style= {{position: "fixed", zIndex: 99, marginTop: "2.2rem"}}> 
                <div className= "col" id= "nav-header">
                    <div>
                        <img src= "./images/destination-gear-logo.png" alt= "logo" id= "logo"></img>
                        <h1 id= "heading">Destination Gear</h1>
                    </div>
                </div>
                <div className= "row">
                        {!isAuthenticated && (
                            <button className= "login-button" onClick={() => loginWithRedirect({})}>Log in</button>
                            )}
                        {isAuthenticated && <button className= "login-button" onClick={() => logout()}>Log out</button>}
                </div>
        </div> 
        :
        <div className= "row" style= {{position: "fixed", zIndex: 99, marginTop: "1rem"}}> 
                <div className= "col" id= "nav-header">
                    <div>
                        <img src= "./images/destination-gear-logo.png" alt= "logo" id= "logo"></img>
                        <h1 id= "heading">Destination Gear</h1>
                    </div>
                </div>
                <div className= "row">
                        {!isAuthenticated && (
                            <button className= "login-button" onClick={() => loginWithRedirect({})}>Log in</button>
                            )}
                        {isAuthenticated && <button className= "login-button" onClick={() => logout()}>Log out</button>}
                </div>
        </div>       
        }
        </>
    )
}

export default Navbar;