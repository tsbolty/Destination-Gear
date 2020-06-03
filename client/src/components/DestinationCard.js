import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Row from "./Row";
import Col from "./Col";
import Destinations from "../utils/destinations.json"
import Checklist from './Checklist';
import ViewNotes from './ViewNotes';

function DestinationCard({ season }){

    const [destinations, setDestinations] = useState(Destinations)

    // $(".button").on("click", function(e) {
    //     $(document).scrollTop($(this).parent().next().offset().top);
    //     // $(this).parent().next() // this is the next div container.
    //     return false; // prevent anchor
    // });

    // const scrollBtn = document.getElementById("scroll-button")


    // document.addEventListener('click', function(event){
    //     if(event.target.matches(scrollBtn)){
    //         event.preventDefault()
    //         document.scrollTop(this.parent().next().offset().top)
    //     }
    // })
    
    var direction;

    for (const destination of destinations){
        if (destination.id %2 === 0){
            direction = "left"
        } else {
            direction = "right"
        }
    }
        
    

    

    const onClick = (id) => {
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
            {destinations.map((destination, i)=>{
                return(
                    <>
                    {i %2 === 0
                    ?
                    <>
                    <div key={destination.id} className= {`col-lg-6 half-${i %2 === 0 ? "left" : "right"}`}>
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
                    <div className= {`col-lg-6 half-${i %2 === 0 ? "right" : "left"}`}>
                        <div>
                            {destination.show &&
                            <>
                                <Checklist destination={destination} season= {season}/>
                                <ViewNotes key={destination.id} id={destination.id}/>
                            </>   
                            }
                        </div>
                    </div>
                    </>
                    :
                    <>
                    <div className= {`col-lg-6 half-${i %2 === 0 ? "right" : "left"}`}>
                        <div>
                            {destination.show &&
                            <>
                                <Checklist destination={destination} season= {season}/>
                                <ViewNotes key={destination.id} id={destination.id}/>
                            </>   
                            }
                        </div>
                    </div>
                    <div key={destination.id} className= {`col-lg-6 half-${i %2 === 0 ? "left" : "right"}`}>
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
                    </>
                    }
                    </>
                )
            })}
                </div>
            </div>
        </> 
    )
}

export default DestinationCard;