import React, { useState } from "react";
import Row from "./Row";
import Col from "./Col";
import Destinations from "../utils/testdestinations.json"
import Checklist from './Checklist';
import ViewNotes from './ViewNotes';

function DestinationCard({ season }){
    // const [showChecklist, setShowChecklist] = useState(false)

    
    const [destinations, setDestinations] = useState(Destinations)

    // var elementScrollTop = document.querySelectorAll("destination-card").scrollTop


    const onClick = (id) => {
        // elementScrollTop += 200
        const updated = destinations.map(destination=>{
          if(destination.id === id){
              destination.show = !destination.show
          }
          return destination
        })
        
        setDestinations(updated)
    }

    return(
        <>
            <div className= "container-fluid">
                <div className= "row">
            {destinations.map(destination=>{
                return(
                    <>
                    <div key={destination.id} className= "destination-card col-lg-6 half-left">
                        {/* <Col size= "xl-6 sm-12"> */}
                        {season.summer
                        ?
                        <img src={destination.summerImage} onClick={()=>onClick(destination.id)} className= "destination-image" alt="summer"></img>
                        :
                        <img src={destination.winterImage} onClick={()=>onClick(destination.id)} className= "destination-image" alt="winter"></img>
                        }
                        <div>
                            <h2 className= "destination-text">{destination.name}</h2>
                        </div>
                    </div>
                    <div className= "col-lg-6 half-right">
                            
                        {/* </Col> */}
                        {/* <Col size= "xl-6 sm-12"> */}
                        <div >
                            {destination.show &&
                            <>
                                <Checklist destination={destination} season= {season}/>
                                <ViewNotes key={destination.id} id={destination.id}/>
                            </>   
                            }
                        </div>
                        {/* </Col> */}
                    </div>
                    </>
                )
            })}
                </div>
            </div>
        </> 
    )
}

export default DestinationCard;