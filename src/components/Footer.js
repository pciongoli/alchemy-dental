import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "../styles/Footer.css";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Footer = () => {
   const mapStyles = {
      height: "200px",
      width: "100%",
   };

   const defaultCenter = {
      lat: 53.01101831730467,
      lng: -2.1832754268992574,
   };

   const handleMarkerClick = () => {
      window.open("https://goo.gl/maps/BYwGxnNyvugL2hfbA", "_blank");
   };

   return (
      <>
         <footer className="bg-dark text-white p-3 mt-5">
            <br></br>
            <LoadScript googleMapsApiKey={apiKey}>
               <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={16}
                  center={defaultCenter}
               >
                  <Marker
                     position={defaultCenter}
                     title="Alchemy Dental"
                     onClick={handleMarkerClick} // Add onClick event
                  />
               </GoogleMap>
            </LoadScript>
            <br></br>
            <div className="container">
               <p className="footer-p">Phone: (201) 836-8878</p>
               <p className="footer-p"> Email: alchemydental@gmail.com</p>
               <p className="footer-p">
                  Address: 300 Queen Anne Road, Teaneck, New Jersey 07631
               </p>
               <p>
                  &copy; {new Date().getFullYear()} ALCHEMY DENTAL, INC. All
                  Rights Reserved.
               </p>
            </div>
         </footer>
         <div className="thin-bar bg-dark text-white">
            <Container>
               <Row>
                  <Col className="d-flex align-items-center">
                     Give Us A Call At (201) 836-8878
                  </Col>
                  <Col className="d-flex justify-content-end align-items-center">
                     <a
                        href="https://www.facebook.com/profile.php?id=100071218990096"
                        className="social-icon text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <FontAwesomeIcon icon={faFacebook} />
                     </a>
                     <a
                        href="https://www.instagram.com/alchemydental/"
                        className="social-icon text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <FontAwesomeIcon icon={faInstagram} />
                     </a>
                     <a
                        href="mailto:AlchemyDentalContact@gmail.com"
                        className="social-icon text-white"
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

export default Footer;
