import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "../styles/Navigation.css";

const Navigation = () => {
   return (
      <>
         <Navbar bg="dark" variant="dark" expand="lg" className="navigation">
            <div className="container">
               <Navbar.Brand href="/">Alchemy Dental</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
