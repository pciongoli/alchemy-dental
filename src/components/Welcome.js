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
            <video autoPlay muted loop id="video-bg">
               <source src={MyVideo} type="video/mp4" />
            </video>
            <Container className="video-overlay">
               <h1>Welcome to Alchemy Dental</h1>
               <p>Your smile, our passion.</p>
            </Container>
         </div>
         <Container className="mt-5">
            <h2>About Alchemy Dental Lab</h2>
            <p>
               At Alchemy Dental, we are dedicated to creating high-quality
               dental restorations that meet the unique needs of each patient.
               Our family-run lab has been serving the Teaneck, NJ community for
               years, and we take pride in our commitment to excellence in every
               aspect of our work.
            </p>
            <p>
               Our team of experienced technicians uses the latest techniques
               and materials to create dental crowns, bridges, and other
               restorations that look and feel natural. We believe that
               communication and collaboration are key to achieving the best
               results for our patients, and we work closely with dentists and
               other dental professionals to ensure that our restorations meet
               their exact specifications.
            </p>
            <p>
               At Alchemy Dental, we understand that dental restorations are an
               important investment in your health and well-being. That's why we
               strive to provide personalized service and attention to every
               patient, from start to finish. If you're looking for a dental lab
               that truly cares about your dental health, look no further than
               Alchemy Dental.
            </p>
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
            <Row className="mt-5 text-center">
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
            <Row className="mt-5">
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
