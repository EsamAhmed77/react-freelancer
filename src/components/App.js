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
import TopJobsCategories from "./TopJobsCategories";
import Footer from "./Footer";

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
      <TopJobsCategories />
      <Footer />
    </Container>
  );
}

export default App;
