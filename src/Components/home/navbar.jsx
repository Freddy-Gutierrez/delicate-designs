import React from "react";
import {getCurrentUser} from "../../services/auth";
import { Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const NavigationBar = (props) => {
  const pathname = useLocation().pathname;

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/"><img src="/ddlogo.jpg"  className="ddlogo" alt="delicate design logo"/> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={pathname}>
          <Nav.Link href="/tumblers">Tumblers</Nav.Link>
          <Nav.Link href="/tumblers" >Banners</Nav.Link>
          <Nav.Link href="/tumblers">Pillows</Nav.Link>
          <Nav.Link href="/tumblers">Shirts</Nav.Link>
          <Nav.Link href="/tumblers">Toppers</Nav.Link>
          <Nav.Link href="/tumblers">Totes</Nav.Link>
        </Nav>
      </Navbar.Collapse>  
      <Navbar.Brand href="/cart">
        <img src={props.cartIcon} alt="cart icon" className="cart-icon" />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavigationBar;
