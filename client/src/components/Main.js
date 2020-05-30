import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import DestinationCard from './DestinationCard'
import CreateNote from './CreateNote'
import Splash from './Splash'
import ViewNotes from './ViewNotes'
import Auth from './Auth'


const Main = ()=>{

    const [loggedIn, setLoggedIn] = useState(false)



    useEffect(() => {return Splash}, [])

    return(
        <>
            <Navbar />
            <DestinationCard />
            {/* <Splash /> */}
            <Auth />
        </>
    )

}

export default Main;