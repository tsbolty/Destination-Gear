import React from "react";
import { useAuth0 } from "./react-auth0-spa";
import NavBar from "./components/NavBar";
import Main from './components/Main'

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {/* <header>
        <NavBar />
      </header> */}
      <Main />
    </div>
  );
}

export default App;