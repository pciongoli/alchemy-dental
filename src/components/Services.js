import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Services.css";
import { Link } from "react-router-dom";

import ServiceImg1 from "../assets/img/service/ServiceImg1.jpg";
import ServiceImg2 from "../assets/img/service/ServiceImg2.jpg";
import ServiceImg3 from "../assets/img/service/ServiceImg3.jpg";
import ServiceImg4 from "../assets/img/service/ServiceImg4.jpg";
import ServiceImg5 from "../assets/img/service/ServiceImg5.jpg";
import ServiceImg6 from "../assets/img/service/ServiceImg6.jpg";
import ServiceImg7 from "../assets/img/service/ServiceImg7.jpg";
import ServiceImg8 from "../assets/img/service/ServiceImg8.jpg";

const Services = () => {
   const services = [
      {
         title: "Abutment Crown - Type 1",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod.",
         img: ServiceImg1,
      },
      {
         title: "Abutment Crown - Type 2",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod.",
         img: ServiceImg2,
      },
      {
         title: "Screw Retained Crown - Type 1",
         description:
            "Sed auctor malesuada quam, id suscipit risus sagittis ut. Nulla facilisi.",
         img: ServiceImg3,
      },
      {
         title: "Screw Retained Crown - Type 2",
         description:
            "Sed auctor malesuada quam, id suscipit risus sagittis ut. Nulla facilisi.",
         img: ServiceImg4,
      },
      {
         title: "Hybrids/All-on-4R - Type 1",
         description:
            "Quisque facilisis semper odio, nec cursus velit varius in. In hac habitasse.",
         img: ServiceImg5,
      },
      {
         title: "Hybrids/All-on-4R - Type 2",
         description:
            "Quisque facilisis semper odio, nec cursus velit varius in. In hac habitasse.",
         img: ServiceImg6,
      },
      {
         title: "Implant Over Denture - Type 1",
         description:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.",
         img: ServiceImg7,
      },
      {
         title: "Implant Over Denture - Type 2",
         description:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.",
         img: ServiceImg8,
      },
   ];

   return (
      <Container className="services-container">
         <h2>Services</h2>
         {services.map((service, index) => (
            <Row key={index} className="service">
               <Col md={6} className="service-description">
                  <h3>
                     <Link to="/contact" className="service-link">
                        {service.title}
                     </Link>
                  </h3>{" "}
                  <p>{service.description}</p>
               </Col>
               <Col md={6}>
                  <img
                     src={service.img}
                     alt={service.title}
                     className="service-image"
                  />
               </Col>
            </Row>
         ))}
      </Container>
   );
};

export default Services;
