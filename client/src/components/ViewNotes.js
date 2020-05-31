import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import CreateNote from './CreateNote';
import UserContext from './context/UserContext'


const ViewNotes = ()=>{

    const [array, setArray] = useState([])
    const { loggedIn } = useContext(UserContext)
    
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
            {loggedIn
            ?
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
            :
            null
            }
        </>
    )
}

export default ViewNotes;