import React from 'react';
import contactPageTopImage from '../assets/contact-page-top-image.jpg';

const Contact = () => {
  // const pageHeaderText = 'Contact Us';
  return (
    <div className="contact">
      {/* <h1 className="contact-heading">{pageHeaderText}</h1> */}
      <div className="contact-page-top-image">
        <img
          src={contactPageTopImage}
          alt="Contact Page Top"
          className="contact-page-top-image"
        />
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default Contact;
