import React, { useEffect } from 'react';
import Navbar from './Navbar'
import DestinationCard from './DestinationCard'
import CreateNote from './CreateNote'
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
            <Auth action="login"/>
            {/* <Login /> */}
            <ViewNotes />
            {/* <Login /> */}
        </>
    )

}

export default Main;