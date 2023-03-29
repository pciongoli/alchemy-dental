import React from "react";

const Footer = () => {
   return (
      <footer className="bg-dark text-white p-3 mt-5">
         <div className="container">
            <p>
               &copy; {new Date().getFullYear()} Alchemy Dental. All Rights
               Reserved.
            </p>
            <p>Phone: (123) 456-7890 | Email: info@alchemy-dental.com</p>
         </div>
      </footer>
   );
};

export default Footer;
