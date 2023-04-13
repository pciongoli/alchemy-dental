import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import "../styles/Navigation.css";

const Navigation = () => {
   return (
      <>
         <Navbar variant="dark" expand="lg" className="navigation">
            <div className="container">
               <Navbar.Brand href="/">
                  <img src={logo} alt="Alchemy Dental" className="brand-logo" />
               </Navbar.Brand>
            </div>
            <Navbar.Toggle
               aria-controls="responsive-navbar-nav"
               className="navbar-toggle"
            />
            <div className="container-right">
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto">
                     <Nav.Link href="/">Welcome</Nav.Link>
                     <Nav.Link href="/services">Services</Nav.Link>
                     <Nav.Link href="/contact">Contact</Nav.Link>
                     <Nav.Link href="/gallery">Gallery</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </div>
         </Navbar>
      </>
   );
};

export default Navigation;
