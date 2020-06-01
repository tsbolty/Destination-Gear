import React, { useEffect, useState, useContext } from 'react';
import Navbar from './Navbar'
import DestinationCard from './DestinationCard'
import CreateNote from './CreateNote'
import Splash from './Splash'
import ViewNotes from './ViewNotes'
import Auth from './Auth'
import UserContext from './context/UserContext'
import Loggedin from './Loggedin'


const Main = ()=>{

    const [loggedIn, setLoggedIn] = useState(false)
    
    // const handleAuthChange= ()=>{
    //     const [loggedIn, setLoggedIn] = useState({
    //         loggedIn: false
    //     })
    // }



    // useEffect(() => {return Splash}, [])

    return(
        <>
            <Navbar />
            <Loggedin />
            <UserContext.Provider value={{loggedIn: loggedIn}}>
                <DestinationCard />
                {/* <Splash /> */}
                <Auth action={"login"}/>
            </UserContext.Provider>
        </>
    )

}

export default Main;