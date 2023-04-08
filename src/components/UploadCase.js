import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/UploadCase.css";

const UploadCase = () => {
   const listData = [
      {
         title: "List Item 1",
         content: "Content for List Item 1",
      },
      {
         title: "List Item 2",
         content: "Content for List Item 2",
      },
      {
         title: "List Item 3",
         content: "Content for List Item 3",
      },
      {
         title: "List Item 4",
         content: "Content for List Item 4",
      },
   ];

   return (
      <Container>
         <h2>How to Upload a Case</h2>
         <ListGroup>
            {listData.map((item, index) => (
               <ListGroup.Item key={index}>
                  <h5>{item.title}</h5>
                  <p>{item.content}</p>
               </ListGroup.Item>
            ))}
         </ListGroup>
      </Container>
   );
};

export default UploadCase;
