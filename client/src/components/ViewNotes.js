import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateNote from './CreateNote';


const ViewNotes = ()=>{

    const [array, setArray] = useState([])
    
    const getNotes = ()=>{
        axios.get("/api/note/note")
            .then(res=> {
                setArray(res.data)
            })
    }

    useEffect(()=>{
        getNotes()
    }, [])

    return(
        <>
            <div>
                <ul>
                    {array.map(note=>(
                        <li>
                            <h4>{note.title}</h4>
                            <p>{note.body}</p>
                        </li>
                    ))}

                </ul>
                <CreateNote getNotes = {getNotes}/>
            </div>
        </>
    )
}

export default ViewNotes;