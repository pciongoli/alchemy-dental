import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import UploadCase from "./components/UploadCase";
import RequestQuote from "./components/RequestQuote";

function App() {
   return (
      <Router>
         <div className="App">
            <Navbar />
            <Routes>
               <Route path="/" element={<Welcome />} />
               <Route path="/services" element={<Services />} />
               <Route path="/quote" element={<RequestQuote />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/gallery" element={<Gallery />} />
               <Route path="/upload-case" element={<UploadCase />} />
            </Routes>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
