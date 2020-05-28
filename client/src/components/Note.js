import React, { useRef } from 'react';
import axios from "axios";

const Note = ()=>{

    const titleRef = useRef();
    const bodyRef = useRef();

    const handleFormSubmit = e => {
        e.preventDefault();
        // dispatch({ type: LOADING });
        axios.post("/api/note/note", {
          title: titleRef.current.value,
          body: bodyRef.current.value
        })
        .then(res=> console.log(res))
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

export default Note;