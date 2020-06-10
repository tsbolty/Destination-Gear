import React from 'react';

const DestinationLinks = ()=>{
    return(
        <>
        {/* For smooth scrolling feature on medium and large screen devices
         */}
            {window.innerWidth > 765
            ?
            <div id="destination-links">
            <a href="#destination0" className="scroll-button" role="button">Maroon Bells</a>
            <a href="#destination1" className="scroll-button" role="button">Swiss Alps</a>
            <a href="#destination2" className="scroll-button" role="button">Safari</a>
            <a href="#destination3" className="scroll-button" role="button">Grand Canyon</a>
            <a href="#destination4" className="scroll-button" role="button">Amazon Rainforest</a>
            <a href="#destination5" className="scroll-button" role="button">Cairngorms</a>
            <a href="#destination6" className="scroll-button" role="button">Australian Outback</a>
            <a href="#destination7" className="scroll-button" role="button">Appalachian Mountains</a>
            <a href="#destination8" className="scroll-button" role="button">Banff</a>
            </div>
            :
            null
            }
        </>
    )
}

export default DestinationLinks;