import React, { useState, useContext, useEffect } from 'react';
import Navbar from './Navbar'
import DestinationCard from './DestinationCard'
import CreateNote from './CreateNote'
import Splash from './Splash'
import Calendar from './Calendar/index'
import Datepicker from './Datepicker/index'
import TimeContext from './context/TimeContext'
import Countdown from './Countdown'



const Main = ()=>{

    const [currentTime, setCurrentTime] = useState("")

    const [season, setSeason] = useState({
        summer: true,
        winter: false
    })

    const summer = ["May", "Jun", "Jul", "Aug", "Sep", "Oct"]
    // const winter = /\bNov|\bDec|\bJan|\bFeb|\bMar|\bApr/g

    
    
    useEffect(()=>{
                const month = currentTime.split(" ")[1]
                if(summer.includes(month)){
                    setSeason({
                        summer: true,
                        winter: false
                    })
                } else { 
                    setSeason({
                        summer: false,
                        winter: true
                    })
                }
              
    }, [currentTime])

    



    // if(currentTime.includes("May" || "Jun" || "Jul" || "Aug" || "Sep" || "Oct")){
    //     setSeason({
    //         summer: true,
    //         winter: false
    //     })
    // } else if(currentTime.includes("Nov" || "Dec" || "Jan" || "Feb" || "Mar" || "Apr")){
    //     setSeason({
    //         summer: false,
    //         winter: true
    //     })
    // }

    return(
        <>
            <TimeContext.Provider value={{currentTime, setCurrentTime}}>
                <div className= "container">
                    <button>Summer or Winter</button>
                    <Navbar />
                    <Countdown />
                    <Calendar />
                    <Datepicker />
                    <DestinationCard season={season}/>
                </div>
            </TimeContext.Provider>
        </>
    )
}

export default Main;