import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateNote from './CreateNote';
import { useAuth0 } from "../react-auth0-spa";
import { node } from 'prop-types';


const ViewNotes = ({id})=>{

    const { user } = useAuth0()

    const userEmail = user.email

    const [array, setArray] = useState([])
    
    const getNotes = ()=>{
        axios.get("/api/note/note")
            .then(res=> {
                setArray(res.data.filter(note=> userEmail === note.userEmail && note.location == id))
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
                <CreateNote getNotes={getNotes} key={id} id={id}/>
            </div>
        </>
    )
}

export default ViewNotes;