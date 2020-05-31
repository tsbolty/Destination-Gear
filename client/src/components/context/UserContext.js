import React, { createContext } from 'react';

const UserContext = createContext({
    loggedIn: true
})

export default UserContext;