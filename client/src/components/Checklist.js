import React from 'react';

const Checklist = ()=>{
    return(
        <ul>
            <li>
                <input type="checkbox" id="cb1" name="cb1" checked />
                <label htmlFor="cb1">Two goats and a cat!</label>
            </li>
            <li>
                <input type="checkbox" id="cb2" name="cb2" />
                <label htmlFor="cb2">Lorem ipsum dolar set.</label >
            </li>
            <li>
                <input type="checkbox" id="cb3" name="cb3" />
                <label htmlFor="cb3">I don't know what to write here!</label>
            </li>
        </ul>
    )
}

export default Checklist;