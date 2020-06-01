import React, { useState } from "react";
import Row from "./Row";
import Col from "./Col";
import Destinations from "../utils/destinations.json"
import Checklist from './Checklist';
import ViewNotes from './ViewNotes';

function DestinationCard(){
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
                        <Col size= "12">
                            <div className= "destination-card">
                                <img src={destination.summerImage} onClick={()=>onClick(destination.id)} className="destination-card" alt="summer"></img>
                                <div>
                                    <h2 className= "destination-text">{destination.name}</h2>
                                </div>
                            </div>
                            {destination.show && <div>
                                <Checklist destination={destination} />
                                <ViewNotes key={destination.id} id={destination.id}/>
                            </div>
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