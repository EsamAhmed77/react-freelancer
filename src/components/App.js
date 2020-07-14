import React from "react";
import Container from "react-bootstrap/Container";

import "./style/Main.scss";

import NavBar from "./NavBar";
import OurCarousel from "./OurCarousel";
import Companies from "./Companies";
import NeedWorkDone from "./NeedWorkDone";
import WhatGreatAboutIt from "./WhatGreatAboutIt";
import CrowdFavorite from "./CrowdFavorite";
import GetWorkDone from "./GetWorkDone";
import ApiEnterprise from "./ApiEnterprise";

function App() {
  return (
    <Container fluid className="p-0">
      <NavBar />
      <OurCarousel />
      <Companies />
      <NeedWorkDone />
      <WhatGreatAboutIt />
      <CrowdFavorite />
      <GetWorkDone />
      <ApiEnterprise />
    </Container>
  );
}

export default App;
