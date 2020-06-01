import React, { useState } from "react";
import Row from "./Row";
import Col from "./Col";
import Destinations from "../utils/destinations.json"
import Checklist from './Checklist';
import ViewNotes from './ViewNotes';

function DestinationCard(){
    // const [showChecklist, setShowChecklist] = useState(false)

    let match;
    // var elementScrollTop = document.querySelectorAll("destination-card").scrollTop


    const onClick = (id) => {
        // elementScrollTop += 200
        match = id
        return match;
    }

    return(
        <>
            <Row>
            {Destinations.map(destination=>{
                return(
                    <div key={destination.id}>
                        <Col size= "12">
                            <div className= "destination-card">
                                <img src={destination.summerImage} onClick={()=>onClick(destination.id)} className="destination-card" alt="summer"></img>
                                <div>
                                    <h2 className= "destination-text">{destination.name}</h2>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <Checklist destination={destination} />
                                    <ViewNotes />
                                </div>
                            </div>    
                            
                        </Col>
                    </div>
                )
            })}
            </Row>
        </> 
    )
}

export default DestinationCard;