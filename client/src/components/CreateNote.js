import React, { useRef } from 'react';
import axios from "axios";
import { PromiseProvider } from 'mongoose';

const CreateNote = ({ getNotes })=>{

    const titleRef = useRef();
    const bodyRef = useRef();

    const handleFormSubmit = e => {
        e.preventDefault();
        axios.post("/api/note/note", {
          title: titleRef.current.value,
          body: bodyRef.current.value
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