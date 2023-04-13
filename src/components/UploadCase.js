import React from "react";
import { Container, ListGroup, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/UploadCase.css";
import CaseBrand from "../assets/img/case-brand.jpg";

const UploadCase = () => {
   const listData = [
      {
         title: "CEREC",
         content: (
            <>
               <p>Create or Login to your CEREC Connect account</p>
               <p>Select “MY CEREC CONNECT”</p>
               <p>Type “Alchemy Dental” in the box for Company Name</p>
               <p>Click FIND</p>
               <p>Check the box at the bottom left for “Alchemy Dental”</p>
               <p>Click ADD to complete the registration</p>
            </>
         ),
      },
      {
         title: "iTero Element R",
         content: (
            <>
               <p>Go to us.3shapecommunicate.com in a web browser</p>
               <p>
                  Connect with Alchemy Dental by searching
                  alchemydental@gmail.com
               </p>
               <p>
                  After connecting with us as a Lab, select Alchemy Dental when
                  sending files
               </p>
            </>
         ),
      },
      {
         title: "3M True Definition Scanner",
         content: (
            <>
               <p>Contact 3M™ support at 800-634-2249 select Option 3</p>
               <p>Select Option 1 and request support Alchemy Dental to be</p>
               <p>added to your scanner</p>
               <p>
                  3M™ will then confirm with Alchemy Dental and add connection
                  remotely
               </p>
            </>
         ),
      },
      {
         title: "Carestream",
         content: (
            <>
               <p>Visit Carestream Connect on your scanner</p>
               <p>Search for Alchemy Dental</p>
               <p>Add Alchemy Dental</p>
               <p>Select Alchemy Dental when submitting scans raw STL files</p>
               <p>
                  Email Alchemy Dental at{" "}
                  <a href="mailto:alchemydental@gmail.com">
                     alchemydental@gmail.com
                  </a>
               </p>
            </>
         ),
      },
   ];

   return (
      <Container>
         <h2>How to Upload a Case</h2>
         <h4>CHOOSE YOUR BRAND AND FOLLOW THE STEPS BELOW</h4>
         <h6>
            Sending a case to Alchemy Dental Lab is simple and efficient thanks
            to digital scanning technology. Find the name of your scanner below
            and expand the section for the instruction on how to add Alchemy
            Dental as the default destination for your preferred device. We
            support all major digital scanning platforms, including
            SironaCEREC®, the Align Technology iTero™, Carestream, E4D-Planmeca,
            3M Tm True Definition Scanner, and 3Shapes TRIOS®
         </h6>
         <Image src={CaseBrand} alt="Case-Brand" className=" mb-3" />
         <ListGroup>
            {listData.map((item, index) => (
               <ListGroup.Item key={index}>
                  <h5>{item.title}</h5>
                  <div>{item.content}</div>
               </ListGroup.Item>
            ))}
         </ListGroup>
      </Container>
   );
};

export default UploadCase;
