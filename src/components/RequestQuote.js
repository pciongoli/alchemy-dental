// RequestQuote.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const RequestQuote = () => {
   return (
      <Container>
         <Row className="mt-5">
            <Col>
               <h2>Request a Quote</h2>
               <p>
                  We'd be delighted to provide you with a personalized quote!
                  Simply get in touch using one of the options below, and our
                  team will promptly respond with the information you need.
               </p>
               <p>Phone: (201) 836-8878</p>
               <p>
                  Email:{" "}
                  <a href="mailto:alchemydental@gmail.com">
                     alchemydental@gmail.com
                  </a>
               </p>
               <p>
                  Contact Form:{" "}
                  <Link to="/contact">
                     Fill out our contact form and we'll be in touch shortly
                  </Link>
               </p>
            </Col>
         </Row>
      </Container>
   );
};

export default RequestQuote;
