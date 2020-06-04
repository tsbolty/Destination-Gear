import React, { useState } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
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
                    {/* Outside turnery operator makes sure all div's go in the right place once the columns realign */}
                    {window.innerWidth > 991
                    ?
                    <>
                    {/* Inside turnery operator alternates the images and checklist/reminders div's left and right */}
                    {i %2 === 0
                    ?
                    <>
                        <div key={destination.id} className= {`col-lg-6 half-left destination-card`} id={`destination${i}`}>
                            {/* Checks for season state to determine which image to display */}
                            {season.summer
                            ?
                            <img src={destination.summerImage} onClick={()=>onClick(destination.id)} className= "destination-image" alt="summer"></img>
                            :
                            <img src={destination.winterImage} onClick={()=>onClick(destination.id)} className= "destination-image" alt="winter"></img>
                            }
                            <div>
                                {season.summer ?
                                <h2 className= "destination-text" style={{color: "white"}}>{destination.name}</h2>
                                :
                                <h2 className= "destination-text" style={{color: "black"}}>{destination.name}</h2> 
                                }
                            </div>
                        </div>
                        <div className= {`col-lg-6 half-right`}>
                            <div className= "row not-destination">
                                {/* Toggles rendering of these components on click. Show is true/false and toggles on click */}
                                {destination.show &&
                                <>
                                    <Checklist destination={destination} season= {season}/>
                                    <ViewNotes key={destination.id} id={destination.id} name={destination.name}/>
                                </>   
                                }
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className= {`col-lg-6 half-right`}>
                            <div className= "row not-destination">
                                {destination.show &&
                                <>
                                    <Checklist destination={destination} season= {season}/>
                                    <ViewNotes key={destination.id} id={destination.id} name={destination.name}/>
                                </>   
                                }
                            </div>
                        </div>
                        <div key={destination.id} className= {`col-lg-6 half-left destination-card`} id={`destination${i}`}>
                            {season.summer
                            ?
                            <img src={destination.summerImage} onClick={()=>onClick(destination.id)} className= "destination-image" alt="summer"></img>
                            :
                            <img src={destination.winterImage} onClick={()=>onClick(destination.id)} className= "destination-image" alt="winter"></img>
                            }
                            <div>
                            {season.summer ?
                                <h2 className= "destination-text" style={{color: "white"}}>{destination.name}</h2>
                                :
                                <h2 className= "destination-text" style={{color: "black"}}>{destination.name}</h2> 
                            }                            </div>
                        </div>
                    </>
                    }
                    </>
                    :
                    <>
                        <div key={destination.id} className= {`col-lg-6 half-left destination-card`} id={`destination${i}`}>
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
                        <div className= {`col-lg-6 half-right`}>
                            <div className= "row not-destination">
                                {destination.show &&
                                <>
                                    <Checklist destination={destination} season= {season}/>
                                    <ViewNotes key={destination.id} id={destination.id}/>
                                </>   
                                }
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