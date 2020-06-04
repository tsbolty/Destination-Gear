import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateNote from './CreateNote';
import { useAuth0 } from "../react-auth0-spa";


const ViewNotes = ({id, name})=>{

    const { user } = useAuth0()

    const [array, setArray] = useState([])
    
    const getNotes = ()=>{
        if(user){
        axios.get("/api/note/note")
            .then(res=> {
                setArray(res.data.filter(note=> user.email === note.userEmail && parseInt(note.location) === id))
            })
        }
    }

    const handleDelete = (e)=>{
        e.preventDefault()
        console.log("something")
        // axios.delete("/api/note/note", )
    }

    useEffect(()=>{
        getNotes()
    }, [])

    return(
        
        <div className= "col-lg-7 col-sm-7">
            {array.length > 0 &&
            <h4 className= "reminder-item">Reminders for {name}</h4>
            }
            <ul id="reminder-list">
                {array.map(note=>(
                    <li className= "reminder-item">
                        <h4 className= "reminder-item-text">{note.title}</h4>
                        <p className= "reminder-item-text">{note.body}</p>
                        <div class="button_cont delete-reminder" align="center" onClick={handleDelete}>Delete</div>
                    </li>
                ))}
            </ul>
            {user &&
            <CreateNote getNotes={getNotes} key={id} id={id}/>}
        </div>
    )
}

export default ViewNotes;