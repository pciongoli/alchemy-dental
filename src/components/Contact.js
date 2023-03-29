import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactForm.css";
const Contact = () => {
   const [formValues, setFormValues] = useState({
      name: "",
      email: "",
      message: "",
   });

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValues({ ...formValues, [name]: value });
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS values
      emailjs
         .send(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            formValues,
            "YOUR_USER_ID"
         )
         .then((result) => {
            alert("Message sent successfully!");
         })
         .catch((error) => {
            alert("An error occurred. Please try again.");
         });

      // Reset the form after submission
      setFormValues({ name: "", email: "", message: "" });
   };

   return (
      <div className="container mt-5">
         <h1>Contact Us</h1>
         <form className="contact-form" onSubmit={handleSubmit}>
            <input
               type="text"
               name="name"
               placeholder="Your name"
               value={formValues.name}
               onChange={handleChange}
               required
            />
            <br />
            <input
               type="email"
               name="email"
               placeholder="Your email"
               value={formValues.email}
               onChange={handleChange}
               required
            />
            <br />
            <textarea
               name="message"
               placeholder="Your message"
               value={formValues.message}
               onChange={handleChange}
               required
            ></textarea>
            <br />
            <button type="submit">Send</button>
         </form>
      </div>
   );
};

export default Contact;
