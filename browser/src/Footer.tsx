import React from 'react';
import {
  companyName,
  developerName,
  developerLinkin,
  developerGithub
} from './Constants/Names';
import githubLogo from './assets/github-logo.svg';
import linkedinLogo from './assets/linkedin-logo.svg';

const Footer = () => {
  // Constants used in the component
  const year = new Date().getFullYear();
  const copyrightYear = `© ${year} Copyright by ${companyName}. All rights reserved. `;
  const designedBy = `Designed by: ${developerName}`;

  return (
    <div className="footer">
      <div className="footer-left">
        <h3>{copyrightYear}</h3>
      </div>
      <div className="footer-right">
        <h3>{designedBy}</h3>

        <a href={developerLinkin} target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="linkedin-logo" className="footer-logo" />
        </a>
        <a href={developerGithub} target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="github-logo" className="footer-logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
