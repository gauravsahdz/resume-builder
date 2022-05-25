import React from "react";
import "../css/header.css";
import { Navbar, Container } from "react-bootstrap";
import logo from "../images/logo.png";
import UtilityButtons from "./UtilityButtons";

const Header = () => {
  
  return (
    <Navbar
      id="navbar"
      bg="primary"
      variant="dark"
      className=" header"
      fixed="top"
    >
      <Container className="container">
        <Navbar.Brand className="logo container" href="#home">
          <img
            id="logo-img"
            alt="logo"
            src={logo}
            width="45"
            height="45"
            className="d-inline-block align-top"
          />
          <span className="logo-text">Resume Builder </span>
        </Navbar.Brand>
        <UtilityButtons/>
      </Container>
    </Navbar>
  );
};
export default Header;
