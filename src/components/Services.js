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
         <Row>
            <Col xs={12} md={6} lg={4}>
               <h3>
                  <a href="/gallery">Crowns</a>
               </h3>
            </Col>
            <Col xs={12} md={6} lg={4}>
               <h3>
                  <a href="/gallery">Bridges</a>
               </h3>
            </Col>
            <Col xs={12} md={6} lg={4}>
               <h3>
                  <a href="/gallery">Dentures</a>
               </h3>
            </Col>
            <Col xs={12} md={6} lg={4}>
               <h3>
                  <a href="/gallery">Retainers</a>
               </h3>
            </Col>
            <Col xs={12} md={6} lg={4}>
               <h3>
                  <a href="/gallery">Veneers</a>
               </h3>
            </Col>
            <Col xs={12} md={6} lg={4}>
               <h3>
                  <a href="/gallery">Cosmetic Dentistry</a>
               </h3>
            </Col>
         </Row>
      </div>
   );
};

export default Services;
