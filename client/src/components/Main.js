import React, { useEffect } from 'react';
import Navbar from './Navbar'
import DestinationCard from './DestinationCard'
import Signup from './Signup'
import CreateNote from './CreateNote'
import Login from './Login'
import Splash from './Splash'
import ViewNotes from './ViewNotes'
import Signin from './Signin'

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
            {/* <Signup /> */}
            <Signin />
            {/* <ViewNotes /> */}
            {/* <Login /> */}
        </>
    )

}

export default Main;