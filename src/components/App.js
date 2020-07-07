import React from "react";
import Container from "react-bootstrap/Container";

import "./style/Main.scss";

import NavBar from "./NavBar";
import OurCarousel from "./OurCarousel";
import Companies from "./Companies";
import NeedWorkDone from "./NeedWorkDone";
import WhatGeatAboutIt from "./WhatGreatAboutIt"

function App() {
  return (
    <Container fluid className="p-0">
      <NavBar />
      <OurCarousel />
      <Companies />
      <NeedWorkDone />
      <WhatGeatAboutIt />
    </Container>
  );
}

export default App;
