import React, { useEffect, useState, useContext } from 'react';
import Navbar from './Navbar'
import DestinationCard from './DestinationCard'
import CreateNote from './CreateNote'
import Splash from './Splash'
import ViewNotes from './ViewNotes'
import Auth from './Auth'
import UserContext from './context/UserContext'


const Main = ()=>{

    // const [loggedIn, setLoggedIn] = useState(false)



    // useEffect(() => {return Splash}, [])

    return(
        <>
            <Navbar />
            <UserContext.Provider value={true}>
                <DestinationCard />
                {/* <Splash /> */}
                <Auth />
            </UserContext.Provider>
        </>
    )

}

export default Main;