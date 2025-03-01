import React from "react";
import "../../components/Footer/Footer.css";

import MainImg from "../../image/logo.png";

import { Twitter, Facebook, Pinterest, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="logos">
          <div className="brand">
            <img src={MainImg} alt="Logo" />
            <h2>Hope</h2>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <h3>Follow Us</h3>

          <div className="social-icons">
            <span><Twitter /></span>
            <span><Facebook /></span>
            <span><Pinterest /></span>
            <span><Instagram /></span>
          </div>
        </div>

        <div className="useful">
          <h3>Useful Links</h3>
          <ul>
            <li>&#10148; Blog</li>
            <li>&#10148; Community</li>
            <li>&#10148; Marketplace</li>
            <li>&#10148; Career</li>
            <li>&#10148; About Us</li>
          </ul>
        </div>

        <div className="imp">
          <h3>Important Links</h3>
          <ul>
            <li>&#10148; About Us</li>
            <li>&#10148; Our Company</li>
            <li>&#10148; Portfolio</li>
            <li>&#10148; Privacy Policy</li>
            <li>&#10148; Contact Us</li>
          </ul>
        </div>

        <div className="subscribe">
          <h3>Subscribe Now</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorem ea earum.</p>

          <input type="email" placeholder="Enter your Email" />
          <button>Subscribe Now</button>
        </div>
      </div>

      <hr />
      <div className="copyright">
        <p>Copyright &copy; All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
