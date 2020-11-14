import React, { useContext } from 'react';
import TimeContext from './context/TimeContext'
import moment from 'moment'

const Countdown = ()=>{

    const {currentTime} = useContext(TimeContext)

    let timeTilDeparture = moment(currentTime.slice(4)).fromNow()

    return(
        <>
        {/* Checks window size to determine style properties */}
        {/* small screen style */}
        {window.innerWidth < 494
        ?
        <div id= "countdown" style= {{paddingTop: "8rem", textAlign: "center", paddingBottom: "2rem", color: "#bcb8b1"}}>
        {timeTilDeparture === "Invalid date"
        ?
        <h2>When is your departure date?</h2>
        :
        timeTilDeparture.includes("ago")
        ?
        <h2>Hope you enjoyed your trip!</h2>
        :
        timeTilDeparture.includes("month")
        ?
        <h2>Never too early to start getting ready for your trip!! It's only {timeTilDeparture}!</h2>
        :
        timeTilDeparture.includes("year")
        ?
        <h2>You've got plenty of time to get ready, your trip is {timeTilDeparture}...</h2>
        :
        <h2>Your trip {timeTilDeparture.includes("ago") ? "was" : "is"} {timeTilDeparture}!! Better start getting ready! </h2>
        }
        </div>
        :
        // Medium and large size screen styling
        <div id= "countdown" style= {{paddingTop: "10rem", textAlign: "center", paddingBottom: "2rem", color: "#bcb8b1"}}>
        {timeTilDeparture === "Invalid date"
        ?
        <h2>When is your departure date?</h2>
        :
        timeTilDeparture.includes("ago")
        ?
        <h2>Hope you enjoyed your trip!</h2>
        :
        timeTilDeparture.includes("month")
        ?
        <h2>Never too early to start getting ready for your trip!! It's only {timeTilDeparture}!</h2>
        :
        timeTilDeparture.includes("year")
        ?
        <h2>You've got plenty of time to get ready, your trip is {timeTilDeparture}...</h2>
        :
        <h2>Your trip {timeTilDeparture.includes("ago") ? "was" : "is"} {timeTilDeparture}!! Better start getting ready! </h2>
        }
        </div>
        }
        </>
    )
}

export default Countdown;