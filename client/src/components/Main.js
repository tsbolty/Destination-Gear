import React, { useState, useEffect, Suspense, Lazy } from 'react';
import Navbar from './Navbar'
// import DestinationCard from './DestinationCard'
import Calendar from './Calendar/index'
import Datepicker from './Datepicker/index'
import TimeContext from './context/TimeContext'
import Countdown from './Countdown'


const Main = ()=>{

    const DestinationCard = React.lazy(() => import('./DestinationCard'))

    const [currentTime, setCurrentTime] = useState("")

    const [season, setSeason] = useState({
        summer: true,
        winter: false
    })

    const winter = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"]
    
    useEffect(()=>{
                const month = currentTime.split(" ")[1]
                if(winter.includes(month)){
                    setSeason({
                        summer: false,
                        winter: true
                    })
                } else { 
                    setSeason({
                        summer: true,
                        winter: false
                    })
                }
              
    }, [currentTime])

    return(
        <>
            <TimeContext.Provider value={{currentTime, setCurrentTime}}>
                <div className= "container-fluid">
                    <Navbar />
                    <Countdown />
                    <Calendar />
                    <Datepicker />
                    <Suspense fallback={<div>Loading...</div>}>
                        <DestinationCard season={season}/>
                    </Suspense>
                </div>
            </TimeContext.Provider>
        </>
    )
}

export default Main;