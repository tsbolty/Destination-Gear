import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import DestinationCard from './DestinationCard'
import Calendar from './Calendar/index'
import Datepicker from './Datepicker/index'
import TimeContext from './context/TimeContext'
import Countdown from './Countdown'
import DestinationLinks from './DestinationLinks'



const Main = ()=>{
    
    const [currentTime, setCurrentTime] = useState("")

    // Sets default to display summer information until winter date is selected
    const [season, setSeason] = useState({
        summer: true,
        winter: false
    })

    const winter = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"]
    
    // Checks if the current time (gathered and updated from calendar) includes any winter months. Changes season state accordingly
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
            {/* Context passes date chosen from calendar to display correct season information */}
            <TimeContext.Provider value={{currentTime, setCurrentTime}}>
                <div className= "container-fluid">
                    <Navbar />
                    <DestinationLinks />
                    <Countdown />
                    <Calendar />
                    <Datepicker />
                    <DestinationCard season={season} />
                </div>
            </TimeContext.Provider>
        </>
    )
}

export default Main;