import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateNote from './CreateNote';
import { useAuth0 } from "../react-auth0-spa";


const ViewNotes = ({id})=>{

    const { user } = useAuth0()

    const [array, setArray] = useState([])
    
    const getNotes = ()=>{
        if(user){
        axios.get("/api/note/note")
            .then(res=> {
                if(array.length < 5){
                setArray(res.data.filter(note=> user.email === note.userEmail && note.location == id))
                }
            })
        }
    }

    useEffect(()=>{
        getNotes()
    }, [])

    return(
        <>
            <div className= "col-lg-6">
                <ul>
                    {array.map(note=>(
                        <li>
                            <h4>{note.title}</h4>
                            <p>{note.body}</p>
                        </li>
                    ))}

                </ul>
                {user &&
                <CreateNote getNotes={getNotes} key={id} id={id}/>}
            </div>
        </>
    )
}

export default ViewNotes;