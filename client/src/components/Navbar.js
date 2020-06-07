import React from "react";
import { useAuth0 } from "../react-auth0-spa";

function Navbar(){

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return(
        <>
        {window.innerWidth < 765
        ?
        <div className= "row" style= {{position: "relative", zIndex: 99, marginTop: "1rem"}}> 
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