import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "../styles/Gallery.css";

import Gallery1 from "../assets/img/gallery/gallery1.jpg";
import Gallery2 from "../assets/img/gallery/gallery2.jpg";
import Gallery3 from "../assets/img/gallery/gallery3.jpg";
import Gallery4 from "../assets/img/gallery/gallery4.jpg";
import Gallery5 from "../assets/img/gallery/gallery5.jpg";
import Gallery6 from "../assets/img/gallery/gallery6.jpg";
import Gallery7 from "../assets/img/gallery/gallery7.jpg";
import Gallery8 from "../assets/img/gallery/gallery8.jpg";

import Gallery1Thumb from "../assets/img/gallery/gallery1-thumb.jpg";
import Gallery2Thumb from "../assets/img/gallery/gallery2-thumb.jpg";
import Gallery3Thumb from "../assets/img/gallery/gallery3-thumb.jpg";
import Gallery4Thumb from "../assets/img/gallery/gallery4-thumb.jpg";
import Gallery5Thumb from "../assets/img/gallery/gallery5-thumb.jpg";
import Gallery6Thumb from "../assets/img/gallery/gallery6-thumb.jpg";
import Gallery7Thumb from "../assets/img/gallery/gallery7-thumb.jpg";
import Gallery8Thumb from "../assets/img/gallery/gallery8-thumb.jpg";

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

   const thumbnails = [
      Gallery1Thumb,
      Gallery2Thumb,
      Gallery3Thumb,
      Gallery4Thumb,
      Gallery5Thumb,
      Gallery6Thumb,
      Gallery7Thumb,
      Gallery8Thumb,
   ];

   const [showModal, setShowModal] = useState(false);
   const [selectedImage, setSelectedImage] = useState(null);

   const handleImageClick = (image) => {
      setSelectedImage(image);
      setShowModal(true);
   };

   const handleClose = () => {
      setShowModal(false);
   };

   return (
      <>
         <Container className="gallery-container">
            {/* ... */}
            <Row>
               {thumbnails.map((thumb, index) => (
                  <Col xs={12} sm={6} md={4} lg={3} key={index}>
                     <img
                        src={thumb}
                        alt={`Thumbnail ${index + 1}`}
                        className="gallery-image"
                        onClick={() => handleImageClick(images[index])}
                     />
                  </Col>
               ))}
            </Row>
         </Container>
         <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Body>
               <img src={selectedImage} alt="Selected" className="img-fluid" />
            </Modal.Body>
         </Modal>
      </>
   );
};

export default Gallery;
