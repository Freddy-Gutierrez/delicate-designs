import React from "react";
import {getCurrentUser} from '../../services/auth';
import { Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../../CSS/nav.css";

const NavigationBar = (props) => {
  const pathname = useLocation().pathname;

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/"><img  className="ddlogo" src="/ddlogo.jpg" alt="delicate design logo"/> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={pathname}>
          <Nav.Link className="nav-items" href="/tumblers">Tumblers</Nav.Link>
          <Nav.Link className="nav-items" href="/tumblers" >Banners</Nav.Link>
          <Nav.Link className="nav-items" href="/tumblers">Pillows</Nav.Link>
          <Nav.Link className="nav-items" href="/tumblers">Shirts</Nav.Link>
          <Nav.Link className="nav-items" href="/tumblers">Toppers</Nav.Link>
          <Nav.Link className="nav-items" href="/tumblers">Totes</Nav.Link>          
          <div className="nav-right">
            {getCurrentUser() ?
              <Nav.Link>
                <div className="display-user">
                  <h4 className="username">{`Welcome ${getCurrentUser().username}!`}</h4>
                  <button onClick={props.signout} className="remove">Signout</button>
                </div>
              </Nav.Link>: <Nav.Link className="login" href="/login">Login</Nav.Link>}
            <Navbar.Brand href="/cart">
              <img src={props.cartIcon} alt="cart icon" className="cart-icon" />
            </Navbar.Brand>
          </div>
        </Nav>
      </Navbar.Collapse>  
    </Navbar>
  );
};

export default NavigationBar;
