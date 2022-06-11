import React from 'react';
import { companyName } from './Constants/Names';
import companyLogo from './assets/company-logo.svg';

const NavBar = () => {
  // Constants used in the component
  const navBarHomeLabel = 'Home';
  const navBarOurServicesLabel = 'Services';
  const navBarProjectsLabel = 'Projects';
  const navBarContactLabel = 'Contact';

  //   Function to render the comapnay name
  const renderCompanyName = () => {
    const letters = companyName.split(' ');
    const companyNameFirstHalf = letters.slice(0, 2).join(' ');
    const companyNameSecondHalf = letters.slice(2, 4).join(' ');
    return (
      <React.Fragment>
        <h1>{companyNameFirstHalf}</h1>
        <h1>{companyNameSecondHalf}</h1>
      </React.Fragment>
    );
  };
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <img src={companyLogo} alt="company-logo" className="company-logo" />
        <div className="company-name">{renderCompanyName()}</div>
      </div>
      <div className="nav-bar-right">
        <li>{navBarHomeLabel}</li>
        <li>{navBarOurServicesLabel}</li>
        <li>{navBarProjectsLabel}</li>
        <li>{navBarContactLabel}</li>
      </div>
    </div>
  );
};

export default NavBar;
