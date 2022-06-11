import React from 'react';
import { companyName } from './Constants/Names';
import companyLogo from './assets/company-logo.svg';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          <img src={companyLogo} alt="company-logo" className="company-logo" />
        </Link>
        <Link to="/">
          <div className="company-name">{renderCompanyName()}</div>
        </Link>
      </div>
      <div className="nav-bar-right">
        <Link to="/">
          <li>{navBarHomeLabel}</li>
        </Link>
        <Link to="/services">
          <li>{navBarOurServicesLabel}</li>
        </Link>
        <Link to="/projects">
          <li>{navBarProjectsLabel}</li>
        </Link>
        <Link to="/contact">
          <li>{navBarContactLabel}</li>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
