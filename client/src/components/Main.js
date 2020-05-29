import React, { useEffect } from 'react';
import Navbar from './Navbar'
import DestinationCard from './DestinationCard'
import Signup from './Signup'
import CreateNote from './CreateNote'
import Login from './Login'
import Splash from './Splash'
import ViewNotes from './ViewNotes'
import Auth from './Auth'


const Main = ()=>{

    // state = {
    //     loggedIn: false,
    //     season: "summer"
    // }

    useEffect(() => {return Splash}, [])

    return(
        <>
            
            <Navbar />
            {/* <Splash /> */}
            {/* <DestinationCard /> */}
            <Auth />
            {/* <Login /> */}
            {/* <ViewNotes /> */}
            {/* <Login /> */}
        </>
    )

}

export default Main;