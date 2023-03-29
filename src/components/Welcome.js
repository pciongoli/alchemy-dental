import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/Welcome.css";

const Welcome = () => {
   return (
      <div className="video-jumbotron">
         <video autoPlay muted loop id="video-bg">
            <source
               src="http://techslides.com/demos/sample-videos/small.mp4"
               type="video/mp4"
            />
         </video>
         <Container className="video-overlay">
            <h1>Welcome to Alchemy Dental</h1>
            <p>Your smile, our passion.</p>
         </Container>
      </div>
   );
};

export default Welcome;
