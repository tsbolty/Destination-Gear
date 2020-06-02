import React, { useState } from 'react';
import Destinations from '../utils/destinations.json';



const Checklist = ({ destination, season })=>{

    // const [clicked, setClicked] = useState(false)

    // const handleCheckBox = (e)=>{
    //     e.preventDefault()
    //     const isClicked = ()=>{
    //         if(clicked === false){
    //             clicked = !clicked
    //         }
    //         return clicked
    //     }
    //     return setClicked(isClicked)
    // }



    // const listEl = document.querySelectorAll("checkboxListItem")
  
    // if(season.summer){
    //     listEl.appendChild(destination.summerGearListUrl.map(url=>{
    //         return <a href={url}>Product recommendation</a>
    //     }))
    // } else if (season.winter){
    //     listEl.appendChild(destination.winterGearListUrl.map(url=>{
    //         return <a href={url}>Product recommendation</a>
    //     }))
    // }

    


    return (
        <>
            <ul className= "checkboxes col-lg-6">
                {season.summer && destination.summerGearList.map((listItem, i)=> 
                    <li className= "checkboxListItem" key={Math.random(listItem.length)}>
                        <input type="checkbox" id="cb1"  className= "checklistInput" name="cb1" />
                        <label htmlFor="cb1" className= "checkboxLabel">
                       
                            <a target= "_blank" href={destination.summerGearListUrl[i]}>{listItem}</a>
                      
                        </label>
                    </li>
                )}
                
                {season.winter && destination.winterGearList.map(listItem=>
                    <li className= "checkboxListItem" key={Math.random(listItem.length)}>
                        <input type="checkbox" id="cb1"  className= "checklistInput" name="cb1" />
                        <label htmlFor="cb1" className= "checkboxLabel">{listItem}</label>
                    </li>
                )}
                
                
                    
                {/* <li>
                    <input type="checkbox" id="cb1" key={Math.random(listItem.length)} name="cb1" checked />
                    <label htmlFor="cb1">{listItem}</label>
                </li> */}
                
            </ul>

        </>
    )
    
}

export default Checklist;