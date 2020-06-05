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

    const handleDelete = (id)=>{
        axios.delete("/api/note/note/" + id)
        .then(res=> getNotes())
    }

    useEffect(()=>{
        getNotes()
    }, [])

    return(
        
        <div className= "col-lg-7 col-sm-7">
            {array.length > 0 &&
            <h4 className= "reminder-item" style= {{marginTop: ".5rem"}}>Reminders for {name}</h4>
            }
            <ul id="reminder-list">
                {array.map(note=>(
                    <li className= "reminder-item" key={Math.floor(Math.random * 1000000)}>
                        <h4 className= "reminder-item-text">{note.title}</h4>
                        <p className= "reminder-item-text">{note.body}</p>
                        <div className="button_cont delete-reminder" align="center" onClick={()=>handleDelete(note._id)}>Delete</div>
                    </li>
                ))}
            </ul>
            {user && array.length < 5 &&
            <CreateNote getNotes={getNotes} key={id} id={id}/>}
        </div>
    )
}

export default ViewNotes;