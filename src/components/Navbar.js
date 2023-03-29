import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
   return (
      <Navbar bg="dark" variant="dark" expand="sm" className="flex-column">
         <div className="container">
            <Navbar.Brand href="/">Alchemy Dental</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="w-100 justify-content-end">
                  <Nav.Link href="/">Welcome</Nav.Link>
                  <Nav.Link href="/services">Services</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Nav.Link href="/gallery">Gallery</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </div>
      </Navbar>
   );
};

export default Navigation;
