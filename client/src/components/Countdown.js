import React, { useState } from 'react';
import TimeContext from './context/TimeContext'
import moment from 'moment'

const Countdown = ()=>{

    const [currentTime, setCurrentTime] = useState("")



    return(
        <h2>{currentTime}</h2>
    )
}

export default Countdown;