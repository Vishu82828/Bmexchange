import React from "react";
import "../../components/Footer/Footer.css";
import MainImg from "../../image/logo.png";
import { Twitter, Facebook, Pinterest, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="logos">
          <div className="brand">
            <img src={MainImg} alt="Logo" />
          </div>
          <p className="ptag" id="ptag">Empowering innovation and building a connected community through technology.</p>
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

        <div className="contact">
          <h3>Contact Details</h3>
          <p id="pcontact"><strong>Mob :</strong> 7070905888</p>
          <p id="pcontact"><strong>Email :</strong> onlineworldbmr01@gmail.com</p>
          <p id="pcontact"><strong>Name :</strong> Rahul Kumar</p>
          <p id="pcontact"><strong>Address :</strong> 1234, Dummy Street, Example City, Country</p>
        </div>

        <div className="subscribe">
          <h3>Subscribe Now</h3>
          <p className="ptag" id="ptag">Stay updated with the latest news, insights, and exclusive offers. Join our community today!</p>
          <input type="email" placeholder="Enter your Email" />
          <button>Subscribe Now</button>
        </div>
      </div>
      
      <hr />
      <div className="copyright">
        <p className="pcopy" id="pcopy">Copyright &copy; All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
