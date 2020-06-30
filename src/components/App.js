import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "./Navbar/NavBar";
import "./style/Main.scss";
import OurCarousel from "./Carousel/OurCarousel";

function App() {
  return (
    <Container fluid className="p-0">
      <NavBar />
      <OurCarousel />
    </Container>
  );
}

export default App;
