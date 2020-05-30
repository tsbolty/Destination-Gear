import React from 'react';


const Checklist = ({ destination })=>{
    return(
        <ul>
            {destination.summerGearList.map(listItem=>(
                <li>
                    <input type="checkbox" id="cb1" key={Math.random(listItem.length)} name="cb1" checked />
                    <label htmlFor="cb1">{listItem}</label>
                </li>
            ))}
        </ul>
    )
}

export default Checklist;