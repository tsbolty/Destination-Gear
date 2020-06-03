import React from "react";
import { useAuth0 } from "./react-auth0-spa";
import Main from './components/Main'
import './style.scss';
import './checklist.scss'

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App container-fluid">
      <Main />
    </div>
  );
}

export default App;