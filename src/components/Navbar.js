import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navigation.css";

const Navigation = () => {
   return (
      <>
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
         <div className="thin-bar">
            <Container>
               <Row>
                  <Col className="d-flex align-items-center">
                     Give Us A Call At (201) 836-8878
                  </Col>
                  <Col className="d-flex justify-content-end align-items-center">
                     <a
                        href="https://www.facebook.com/profile.php?id=100071218990096"
                        className="social-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <FontAwesomeIcon icon={faFacebook} />
                     </a>
                     <a
                        href="https://www.instagram.com/alchemydental/"
                        className="social-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <FontAwesomeIcon icon={faInstagram} />
                     </a>
                     <a
                        href="mailto:AlchemyDentalContact@gmail.com"
                        className="social-icon"
                     >
                        <FontAwesomeIcon icon={faEnvelope} />
                     </a>
                  </Col>
               </Row>
            </Container>
         </div>
      </>
   );
};

export default Navigation;
