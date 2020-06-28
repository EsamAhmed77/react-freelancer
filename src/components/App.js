import React from 'react';
import container from "react-bootstrap/Container";
import NavBar from "./Navbar/NavBar";
import "./style/Main.scss";

function App() {
  return (
    <container fluid>
      <NavBar/>
    </container>
  );
}

export default App;
