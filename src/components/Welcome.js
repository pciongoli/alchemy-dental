import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCommentDollar,
   faBoxOpen,
   faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Welcome.css";
import MyVideo from "../assets/video/jumbotron.mp4";
import image1 from "../assets/img/testimonial1.jpg";
import image2 from "../assets/img/testimonial3.jpg";
import image3 from "../assets/img/testimonial4.jpg";

const TestimonialCard = ({ name, img, quote }) => {
   return (
      <div className="testimonial-card position-relative">
         <img className="testimonial-image" src={img} alt={name} />
         <div className="testimonial-content position-absolute text-white d-flex flex-column justify-content-center align-items-center">
            <h5 className="testimonial-name">{name}</h5>
            <p className="testimonial-quote">{quote}</p>
         </div>
      </div>
   );
};

const Welcome = () => {
   const testimonials = [
      {
         name: "John Doe",
         img: image1,
         quote: "I had a fantastic experience at Alchemy Dental! The staff was friendly and professional. Highly recommended!",
      },
      {
         name: "Jane Smith",
         img: image2,
         quote: "The dentist was very knowledgeable and took the time to explain everything. My new go-to dental clinic!",
      },
      {
         name: "Mary Johnson",
         img: image3,
         quote: "Great service and very clean facilities. The whole family loves Alchemy Dental!",
      },
   ];

   return (
      <>
         <div className="video-jumbotron">
            <video autoPlay muted loop id="video-bg" playsInline>
               <source src={MyVideo} type="video/mp4" />
            </video>

            <div className="video-overlay">
               <h1>Welcome to Alchemy Dental</h1>
               <p>Your smile, our passion.</p>
            </div>
         </div>
         <Container className="mt-5">
            <h2>The Alchemy Way</h2>
            <p>
               Alchemy Dental is an implant driven laboratory that focuses on
               exquisite dental artistry. Founder Alfred Haddad is a renowned
               master ceramist and expert in the art and science of implant
               dentistry.
            </p>
            <p>
               Alfred Haddad, MDT graduated in 1974 from Dental Technology
               Institute in Germany. Alfred has been restoring dental implants
               since 1983. He began his journey by opening a lab in Lebanon with
               his Father and three brothers who are also dental technicians.
               Seeking greater opportunity, Alfred accepted a implant director
               position at a Boutique lab in NYC. After 5 years, Alfred's
               passion for dentistry led him to establish his very own
               laboratory known as Alchemy Dental.
            </p>
            <p>
               Alfred's passion is restoring full mouth implant cases and
               working chairside on All On Four surgical conversions. For that
               very reason, Alfred and his highly skilled team only cater to the
               greater New York City area. This boutique approach allows for a
               more personalized service with consistent quality.
            </p>
            <Row className="mt-4 image-section">
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
            <Row className="mt-5 text-center icon-section">
               <Col xs={12} md={4}>
                  <FontAwesomeIcon icon={faCommentDollar} size="3x" />
                  <h3>Request a Quote</h3>
                  <Button href="/quote" variant="primary">
                     Request a Quote
                  </Button>
               </Col>
               <Col xs={12} md={4}>
                  <FontAwesomeIcon icon={faBoxOpen} size="3x" />
                  <h3>Send a Case</h3>
                  <Button href="/send-case" variant="primary">
                     Send a Case
                  </Button>
               </Col>
               <Col xs={12} md={4}>
                  <FontAwesomeIcon icon={faEnvelope} size="3x" />
                  <h3>Contact Us</h3>
                  <Button href="/contact" variant="primary">
                     Contact Us
                  </Button>
               </Col>
            </Row>
            <Row className="mt-5 mt-5 testimonial-section">
               {testimonials.map((testimonial, index) => (
                  <Col key={index} md={4} className="mb-4">
                     <TestimonialCard
                        name={testimonial.name}
                        img={testimonial.img}
                        quote={testimonial.quote}
                     />
                  </Col>
               ))}
            </Row>
         </Container>
      </>
   );
};

export default Welcome;
