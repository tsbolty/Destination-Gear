import React, { useState, useContext } from 'react';
import Navbar from './Navbar'
import DestinationCard from './DestinationCard'
import CreateNote from './CreateNote'
import Splash from './Splash'
import ViewNotes from './ViewNotes'
import Calendar from './Calendar/index'
import Datepicker from './Datepicker/index'
import TimeContext from './context/TimeContext'



const Main = ()=>{

    const [currentTime, setCurrentTime] = useState("")

    const [season, setSeason] = useState({
        summer: true,
        winter: false
    })

    const handleSeasonClick = (e)=>{
        e.preventDefault()
        if(season.summer){
            setSeason({
                summer: false,
                winter: true
            })
        } else if(season.winter){
            setSeason({
                summer: true,
                winter: false
            })
        }
        return season
    }

    return(
        <>
            <TimeContext.Provider value={{currentTime, setCurrentTime}}>
                <button onClick= {handleSeasonClick}>Summer or Winter</button>
                <Navbar />
                <Calendar />
                <Datepicker />
                <DestinationCard season={season}/>
            </TimeContext.Provider>
        </>
    )
}

export default Main;