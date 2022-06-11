import React from 'react';
import './Styles/NavBar.scss';
import { companyName } from './Constants/Names';

const NavBar = () => {
  // Constants used in the component
  const navBarHomeLabel = 'Home';
  const navBarOurServicesLabel = 'Services';
  const navBarProjectsLabel = 'Projects';
  const navBarContactLabel = 'Contact';
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">{companyName}</div>
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
