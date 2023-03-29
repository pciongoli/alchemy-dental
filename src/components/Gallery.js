import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Gallery.css";

import Gallery1 from "../assets/img/gallery/gallery1.jpg";
import Gallery2 from "../assets/img/gallery/gallery2.jpg";
import Gallery3 from "../assets/img/gallery/gallery3.jpg";
import Gallery4 from "../assets/img/gallery/gallery4.jpg";
import Gallery5 from "../assets/img/gallery/gallery5.jpg";
import Gallery6 from "../assets/img/gallery/gallery6.jpg";
import Gallery7 from "../assets/img/gallery/gallery7.jpg";
import Gallery8 from "../assets/img/gallery/gallery8.jpg";

const Gallery = () => {
   const images = [
      Gallery1,
      Gallery2,
      Gallery3,
      Gallery4,
      Gallery5,
      Gallery6,
      Gallery7,
      Gallery8,
   ];

   return (
      <Container className="gallery-container">
         <h2>Gallery</h2>
         <Row>
            {images.map((img, index) => (
               <Col xs={12} sm={6} md={4} lg={3} key={index}>
                  <img
                     src={img}
                     alt={`Image ${index + 1}`}
                     className="gallery-image"
                  />
               </Col>
            ))}
         </Row>
      </Container>
   );
};

export default Gallery;
