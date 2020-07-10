import React from "react";
import Container from "react-bootstrap/Container";

import "./style/Main.scss";

import NavBar from "./NavBar";
import OurCarousel from "./OurCarousel";
import Companies from "./Companies";
import NeedWorkDone from "./NeedWorkDone";
import WhatGreatAboutIt from "./WhatGreatAboutIt";
import CrowdFavorite from "./CrowdFavorite";

function App() {
  return (
    <Container fluid className="p-0">
      <NavBar />
      <OurCarousel />
      <Companies />
      <NeedWorkDone />
      <WhatGreatAboutIt />
      <CrowdFavorite />
    </Container>
  );
}

export default App;
