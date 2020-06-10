import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateNote from './CreateNote';
import { useAuth0 } from "../react-auth0-spa";


const ViewNotes = ({id, name})=>{

    const { user } = useAuth0()
    const [array, setArray] = useState([])
    
    // gets notes from database. Before it sets it to the array state, it filters to only push notes that match the current user's email and the notes that match the appropriate location ID
    const getNotes = ()=>{
        if(user){
        axios.get("/api/note/note")
            .then(res=> {
                setArray(res.data.filter(note=> user.email === note.userEmail && parseInt(note.location) === id))
            })
        }
    }

    // Deletes note based upon Mongo ID
    const handleDelete = (id)=>{
        axios.delete("/api/note/note/" + id)
        .then(res=> getNotes())
    }

    useEffect(()=>{
        getNotes()
    }, [])

    return(
        
        <div className= "col-lg-7 col-sm-7">
            {/* Only displays this h4 if there are reminders to be displayed */}
            {array.length > 0 &&
            <h4 className= "reminder-item" style= {{marginTop: ".5rem"}}>Reminders for {name}</h4>
            }
            {/* This maps through the notes array and displays correct reminders based upon location ID */}
            <ul id="reminder-list">
                {array.map(note=>(
                    <li className= "reminder-item" key={Math.floor(Math.random * 1000000)}>
                        <h4 className= "reminder-item-text">{note.title}</h4>
                        <p className= "reminder-item-text">{note.body}</p>
                        <div className="button_cont delete-reminder" align="center" onClick={()=>handleDelete(note._id)}>Delete</div>
                    </li>
                ))}
            </ul>
            {/* Only allows for a maximum of 5 reminders */}
            {user && array.length < 5 &&
            <CreateNote getNotes={getNotes} key={id} id={id}/>}
        </div>
    )
}

export default ViewNotes;