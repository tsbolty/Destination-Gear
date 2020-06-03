import React, { useContext } from 'react';
import TimeContext from './context/TimeContext'
import moment from 'moment'

const Countdown = ()=>{

    const {currentTime, setCurrentTime} = useContext(TimeContext)

    let timeTilDeparture = moment(currentTime.slice(4)).fromNow()
    

    return(
        <div id= "countdown">
        {timeTilDeparture === "Invalid date"
        ?
        <h2>When is your departure date?</h2>
        :
        <h2>Your trip {timeTilDeparture.includes("ago") ? "was" : "is"} {timeTilDeparture} </h2>
        }
        
        </div>
    )
}

export default Countdown;