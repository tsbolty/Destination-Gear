import React from 'react';
import Navbar from './MyNavbar'
import DestinationCard from './DestinationCard'
import CreateNote from './CreateNote'
import Splash from './Splash'
import ViewNotes from './ViewNotes'


const Main = ()=>{

    // const [loggedIn, setLoggedIn] = useState(false)
    
    // const handleAuthChange= ()=>{
    //     const [loggedIn, setLoggedIn] = useState({
    //         loggedIn: false
    //     })
    // }



    // useEffect(() => {return Splash}, [])

    return(
        <>
            <DestinationCard />
            
        </>
    )

}

export default Main;