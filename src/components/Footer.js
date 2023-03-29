import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Footer = () => {
   const mapStyles = {
      height: "200px",
      width: "100%",
   };

   const defaultCenter = {
      lat: 53.01101831730467, // Replace with your business latitude
      lng: -2.1832754268992574, // Replace with your business longitude
   };

   return (
      <footer className="bg-dark text-white p-3 mt-5">
         <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
         >
            <GoogleMap
               mapContainerStyle={mapStyles}
               zoom={16}
               center={defaultCenter}
            />
         </LoadScript>
         <div className="container">
            <p>Phone: (201) 836-8878 </p>
            <p> Email: alchemydental@gmail.com</p>
            <p> Address: 300 Queen Anne Road, Teaneck, New Jersey 07631</p>
            <p>
               &copy; {new Date().getFullYear()} ALCHEMY DENTAL, INC. All Rights
               Reserved.
            </p>
         </div>
      </footer>
   );
};

export default Footer;
