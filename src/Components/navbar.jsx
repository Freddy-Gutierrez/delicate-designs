import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const NavigationBar = (props) => {
  const pathname = useLocation().pathname;
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={pathname}>
          <Nav.Link href="/banners">Banners</Nav.Link>
          <Nav.Link href="/shirts">Shirts</Nav.Link>
          <Nav.Link href="/toppers">Toppers</Nav.Link>
          <Nav.Link href="/totes">Totes</Nav.Link>
          <Nav.Link href="/tumblers">Tumblers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
