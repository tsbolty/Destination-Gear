import React, { useRef } from 'react';
import axios from "axios";
import { useAuth0 } from "../react-auth0-spa";
import e from 'express';

const CreateNote = ({ getNotes, id })=>{
    const { user } = useAuth0();
    const destinationKey = id
    const titleRef = useRef();
    const bodyRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(titleRef.current.value.length > 0){
            axios.post("/api/note/note", {
              title: titleRef.current.value,
              body: bodyRef.current.value,
              userEmail: user.email,
              location: destinationKey
            })
            // clear input fields
            .then(res=> getNotes())
            .catch(err=> console.log(err))
        }
    }

    

    return(
        <>
            <h5>New Reminder</h5>
            <form onSubmit={handleFormSubmit}>
            <input ref={titleRef} className= "input-area" placeholder= "Title"></input>
            <br />
            <textarea ref={bodyRef} className= "input-area" placeholder= "Write your reminder here"></textarea>
            <br />
            <button onClick={handleFormSubmit}>submit</button>
            </form>
        </>
    )
}

export default CreateNote;