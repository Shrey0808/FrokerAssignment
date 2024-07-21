// src/components/Footer.js

import React from 'react';
import '../styles/Footer.css';
import footerLogo from '../assets/images/logo.png'; // Update the path as needed
import footerImage from '../assets/images/footer.svg'; // Update the path as needed
import footerQr from '../assets/images/qr.jpg'; // Update the path as needed
import arrow from '../assets/images/arrow.jpg'
import {
    FaTwitter,
    FaLinkedin,
    FaFacebookF,
    FaInstagramSquare,
    FaYoutube,
} from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo">
          <img src={footerLogo} alt="Footer Logo" className="footer-logo" />
        </div>
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <div class="row">
            <img class="arr" src={arrow} alt="img"></img>
            <span>Home</span>
            </div>
            <div class="row">
            <img class="arr" src={arrow} alt="img"></img>
            <span>About Us</span>
            </div>
            <div class="row">
            <img class="arr" src={arrow} alt="img"></img>
            <span>Privacy policy</span>
            </div>
            <div class="row">
            <img class="arr" src={arrow} alt="img"></img>
            <span>Terms & Conditions</span>
            </div>
        </div>
        <div className="footer-section contacts">
          <h4>Contacts</h4>
          <a href="https://maps.app.goo.gl/NdKEJZE7diouSA9q9" className="footer-link" target = "__blank" rel="noopener noreferrer"><RiMapPin2Fill /></a><span>Whitefield, Bengaluru, 560066</span>
          <a href="mailto:contact@example.com" className="footer-link"><IoIosMail /></a><span>support@froker.in</span>
          <div className="footer-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
        <div className="footer-section scan-to-download">
          <h4>Scan To Download</h4>
          <img src={footerQr} alt="Scan QR Code to Download" className="scan-image" />
        </div>
      </div>
      <div className="footer-bottom">
        <img src={footerImage} alt="Footer Background" className="footer-image" />
        <p>&copy; 2024 Arroz Technology. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
