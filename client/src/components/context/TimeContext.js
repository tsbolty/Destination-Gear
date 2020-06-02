import React, { createContext } from 'react';

const TimeContext = createContext({
    currentTime: "",
    setCurrentTime: ()=>{}
})

export default TimeContext;