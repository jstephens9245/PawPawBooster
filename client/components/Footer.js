'strict'
import React from 'react';
import {Link} from 'react-router';

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-section footer-contact">
        <p className="footer-title">Contact Information</p>
      </div>
      <div className="footer-section">
        <p className="footer-title">Menu</p>
        <Link href="/" className="footer-section-text">
          Home
        </Link>
        <Link to="/signup" className="footer-section-text">
          SignUp
        </Link>
        <Link href="/events" className="footer-section-text">
          Events
        </Link>
        <Link to="/assets/pawpaw_bilaws.pdf" target="_blank" className="footer-section-text">
          Bi-laws
        </Link>
        <Link href="/aboutus" className="footer-section-text">
          About Us
        </Link>
      </div>
      <div className="footer-section footer-connect">
        <p className="footer-title">Connect</p>
      </div>
    </div>
  );
};
export default Footer;
