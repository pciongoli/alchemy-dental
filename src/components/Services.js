import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
   return (
      <div className="container mt-5">
         <h1>Services</h1>
         <Row className="mt-4">
            <Col xs={12} md={6}>
               <Image
                  className="sample-image"
                  src="https://assets.codepen.io/7125791/jonathan-borba-W9YEY6G8LVM-unsplash.jpg"
                  alt="Sample Image 1"
                  thumbnail
                  fluid
               />
            </Col>
            <Col xs={12} md={6}>
               <Image
                  className="sample-image"
                  src="https://assets.codepen.io/7125791/enis-yavuz-VC5lS43bwJo-unsplash.jpg"
                  alt="Sample Image 2"
                  thumbnail
                  fluid
               />
            </Col>
         </Row>
         <ul>
            <li>
               <Link to="/gallery">Crowns</Link>
            </li>
            <li>
               <Link to="/gallery">Bridges</Link>
            </li>
            <li>
               <Link to="/gallery">Dentures</Link>
            </li>
            <li>
               <Link to="/gallery">Retainers</Link>
            </li>
            <li>
               <Link to="/gallery">Veneers</Link>
            </li>
            <li>
               <Link to="/gallery">Cosmetic Dentistry</Link>
            </li>
         </ul>
      </div>
   );
};

export default Services;
