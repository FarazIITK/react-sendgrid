import React from 'react';
import { companyName } from './Constants/Names';
import githubLogo from './assets/github-logo.svg';
import linkedinLogo from './assets/linkedin-logo.svg';

const Footer = () => {
  // Constants used in the component
  const year = new Date().getFullYear();
  const copyrightYear = `© ${year} Copyright by ${companyName}. All rights reserved. `;
  const designedBy = `Designed by: Faraz Husain`;

  return (
    <div className="footer">
      <div className="footer-left">
        <h3>{copyrightYear}</h3>
      </div>
      <div className="footer-right">
        <h3>{designedBy}</h3>
        <img src={linkedinLogo} alt="linkedin-logo" className="footer-logo" />
        <img src={githubLogo} alt="github-logo" className="footer-logo" />
      </div>
    </div>
  );
};

export default Footer;
