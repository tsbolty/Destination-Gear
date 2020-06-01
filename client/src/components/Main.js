import React from 'react';
import Navbar from './MyNavbar'
import DestinationCard from './DestinationCard'
import CreateNote from './CreateNote'
import Splash from './Splash'
import ViewNotes from './ViewNotes'
import Profile from './Profile'


const Main = ()=>{

    return(
        <>
            <Navbar />
            <DestinationCard />
            <Profile />
        </>
    )

}

export default Main;