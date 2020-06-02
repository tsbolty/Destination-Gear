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
            <Row>
            {destinations.map(destination=>{
                return(
                    <div key={destination.id}>
                        <Col size= "xl-6 sm-12">
                            <div className= "destination-card">
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
                        </Col>
                        <Col size= "xl-6 sm-12">
                            {destination.show &&
                            <>
                                <Checklist destination={destination} season= {season}/>
                                <ViewNotes key={destination.id} id={destination.id}/>
                            </>   
                            }
                        </Col>
                    </div>
                )
            })}
            </Row>
        </> 
    )
}

export default DestinationCard;