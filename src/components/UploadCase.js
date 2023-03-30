import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/UploadCase.css";

const UploadCase = () => {
   const accordionData = [
      {
         title: "Accordion Item 1",
         content: "Content for Accordion Item 1",
      },
      {
         title: "Accordion Item 2",
         content: "Content for Accordion Item 2",
      },
      {
         title: "Accordion Item 3",
         content: "Content for Accordion Item 3",
      },
      {
         title: "Accordion Item 4",
         content: "Content for Accordion Item 4",
      },
   ];

   return (
      <Container>
         <h2>How to Upload a Case</h2>
         <Accordion>
            {accordionData.map((item, index) => (
               <Card key={index}>
                  <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
                     {item.title}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={`${index}`}>
                     <Card.Body>{item.content}</Card.Body>
                  </Accordion.Collapse>
               </Card>
            ))}
         </Accordion>
      </Container>
   );
};

export default UploadCase;
