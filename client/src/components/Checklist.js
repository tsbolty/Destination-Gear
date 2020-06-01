import React from 'react';
import Destinations from '../utils/destinations.json';



const Checklist = (props)=>{

    return (
        <>
            <ul className= "checkboxes">
                {props.destination.summerGearList.map(listItem=> 
                    <li >
                        <input type="checkbox" id="cb1" key={Math.random(listItem.length)} name="cb1" />
                        <label htmlFor="cb1">{listItem}</label>
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