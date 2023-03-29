import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
   return (
      <Navbar bg="dark" variant="dark" className="flex-column">
         <div className="container">
            <Navbar.Brand href="/">Alchemy Dental</Navbar.Brand>
            <Nav className="justify-content-center w-100">
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="/services">Services</Nav.Link>
               <Nav.Link href="/contact">Contact</Nav.Link>
               <Nav.Link href="/gallery">Gallery</Nav.Link>
            </Nav>
         </div>
      </Navbar>
   );
};

export default Navigation;
