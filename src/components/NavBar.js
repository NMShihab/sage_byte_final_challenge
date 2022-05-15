import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../images/logo.png";
import Facebook from "../images/fb.svg";
import Instagram from "../images/insta.svg";
import Twitter from "../images/twt.svg";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">ROADMAP</Nav.Link>
            <Nav.Link href="#pricing">TEAM</Nav.Link>
            <Nav.Link href="#pricing">CONTACT US</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {" "}
              <img src={Facebook} alt="fb" />
            </Nav.Link>
            <Nav.Link href="#deets">
              {" "}
              <img src={Instagram} alt="insta" />
            </Nav.Link>
            <Nav.Link href="#deets">
              {" "}
              <img src={Twitter} alt="tweet" />
            </Nav.Link>
            <Nav.Link href="#memes">
              <button className="custom_btn">WALLET</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
