import React from "react";
import { useAuth0 } from "./react-auth0-spa";
import Main from './components/Main';
import './style.scss';
import './checklist.scss';

function App() {
  const { loading, user } = useAuth0();
if(user){
  console.log(user)
}
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <Main />
    </div>
  );
}

export default App;