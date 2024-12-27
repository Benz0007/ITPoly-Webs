import React from "react";

function Contact() {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>Email: contact@lanna-polytechnic.ac.th</p>
      <p>Phone: +66 123 456 789</p>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.1234567890123!2d98.975678!3d18.788345"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Contact;
