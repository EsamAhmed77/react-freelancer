import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "./Navbar/NavBar";
import "./style/Main.scss";
import OurCarousel from "./Carousel/OurCarousel";
import Companies from "./Companies/Companies";
import NeedWorkDone from "./NeedWorkDone/NeedWorkDone";

function App() {
  return (
    <Container fluid className="p-0" >
      <NavBar />
      <OurCarousel />
      <Companies />
      <NeedWorkDone />
    </Container>
  );
}

export default App;
