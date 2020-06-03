import React, { useState } from 'react';

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

    return (
        <>
            <ul className= "checkboxes col-lg-4 col-sm-4">
                {season.summer && destination.summerGearList.map((listItem, i)=> 
                    <li className= "checkboxListItem" key={Math.random(listItem.length)}>
                        <input type="checkbox" id="cb1"  className= "checklistInput" name="cb1" />
                        <label htmlFor="cb1" className= "checkboxLabel">
                       
                            <a target= "_blank" href={destination.summerGearListUrl[i]}>{listItem}</a>
                      
                        </label>
                    </li>
                )}
                
                {season.winter && destination.winterGearList.map((listItem, i)=>
                    <li className= "checkboxListItem" key={Math.random(listItem.length)}>
                        <input type="checkbox" id="cb1"  className= "checklistInput" name="cb1" />
                        <label htmlFor="cb1" className= "checkboxLabel">
                        <a target= "_blank" href={destination.winterGearListUrl[i]}>{listItem}</a>
                        </label>
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