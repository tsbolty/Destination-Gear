import React, { useContext } from 'react';
import TimeContext from './context/TimeContext'
import moment from 'moment'

const Countdown = ()=>{

    const {currentTime, setCurrentTime} = useContext(TimeContext)

    let timeLeft = moment(currentTime.slice(4)).fromNow()

    console.log(timeLeft)

    let start = moment(currentTime)
    let end = moment(Date.now())

    return(
        <>
        {timeLeft === "Invalid date"
        ?
        <h2>When is your departure date?</h2>
        :
        <h2>Your trip {timeLeft.includes("ago") ? "was" : "is"} {timeLeft} </h2>
        }
        </>
    )
}

export default Countdown;