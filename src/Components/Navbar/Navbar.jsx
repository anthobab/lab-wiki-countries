import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          LAB - WikiCountries
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
