import React from "react";
import Container from "react-bootstrap/Container";

import "./style/Main.scss";

import NavBar from "./NavBar";
import OurCarousel from "./OurCarousel";
import Companies from "./Companies";
import NeedWorkDone from "./NeedWorkDone";

function App() {
  return (
    <Container fluid className="p-0">
      <NavBar />
      <OurCarousel />
      <Companies />
      <NeedWorkDone />
    </Container>
  );
}

export default App;
