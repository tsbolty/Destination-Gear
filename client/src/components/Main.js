import React, { useState } from 'react';
import Navbar from './Navbar'
import DestinationCard from './DestinationCard'
import CreateNote from './CreateNote'
import Splash from './Splash'
import ViewNotes from './ViewNotes'


const Main = ()=>{

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
            <button onClick= {handleSeasonClick}>Summer or Winter</button>
            <Navbar />
            <DestinationCard season={season}/>
        </>
    )
}

export default Main;