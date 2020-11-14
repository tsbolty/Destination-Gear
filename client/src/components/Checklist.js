import React from 'react';

const Checklist = ({ destination, season })=>{

    return (
        <>
            <ul className= "checkboxes col-lg-5 col-sm-5">
                {/* checks for season and maps through corresponding array to generate checklist */}
                {season.summer && destination.summerGearList.map((listItem, i)=> 
                    <li className="custom-control custom-checkbox" key={Math.random(listItem.length)}>
                        <input type="checkbox" id="cb1"  className= "checklistInput" name="cb1" />
                        <label htmlFor="cb1" className= "checkboxLabel">
                            <a target= "_blank" rel="noopener noreferrer" className= "link-text"href={destination.summerGearListUrl[i]}>{listItem}</a>
                        </label>
                    </li>
                )}
                
                {/* checks for season and maps through corresponding array to generate checklist */}
    
                {season.winter && destination.winterGearList.map((listItem, i)=>
                    <li className= "checkboxListItem" key={Math.random(listItem.length)}>
                        <input type="checkbox" id="cb1"  className= "checklistInput" name="cb1" />
                        <label htmlFor="cb1" className= "checkboxLabel">
                        <a target= "_blank" rel="noopener noreferrer" href={destination.winterGearListUrl[i]}>{listItem}</a>
                        </label>
                    </li>
                )}
            </ul>
        </>
    )   
}

export default Checklist;