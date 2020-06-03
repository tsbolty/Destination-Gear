import React, { useRef } from 'react';
import axios from "axios";
import { useAuth0 } from "../react-auth0-spa";

const CreateNote = ({ getNotes, id })=>{
    const { user } = useAuth0();
    const destinationKey = id
    const titleRef = useRef();
    const bodyRef = useRef();

    const handleFormSubmit = e => {
        e.preventDefault();
        
        axios.post("/api/note/note", {
          title: titleRef.current.value,
          body: bodyRef.current.value,
          userEmail: user.email,
          location: destinationKey
        })
        .then(res=> getNotes())
        .catch(err=> console.log(err))
    }

    return(
        <>
            <input ref={titleRef}></input>
            <textarea ref={bodyRef}></textarea>
            <button onClick={handleFormSubmit}>submit</button>
            
        </>
    )
}

export default CreateNote;