import React from "react";
import Row from "./Row";
import Col from "./Col";
import Destinations from "../utils/destinations.json"

function DestinationCard(){
    return(
        <>
            <Row>
            {Destinations.map(destination=>{
                return(
                    <Col size="lg-4 sm-12">
                        <div className="card destination-card" style={{width: "18rem"}} key={destination.id}>
                            <img src={destination.summerImage} className="card-img-top" alt="summer"></img>
                            <div className="card-body">
                                <p className="card-text">{destination.name}</p>
                            </div>
                        </div>
                    </Col>
                )
            })}
            </Row>
        </>
    )
}

export default DestinationCard;