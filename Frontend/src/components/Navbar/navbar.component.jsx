import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../image/logo.png";
import "../../components/Navbar/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo-container" onClick={() => navigate("/")}> 
        <img src={logo} alt="Logo of Website" />
        {/* <label>BMR Exchange</label> */}
      </div>
      <nav className={menuOpen ? "nav-open" : ""}>
        <ul className="nav-links">
          <li><Link to="/whyus" onClick={() => setMenuOpen(false)}>Why Us</Link></li>
          <li><Link to="/howitwork" onClick={() => setMenuOpen(false)}>How it Works</Link></li>
          <li><Link to="/crypto" onClick={() => setMenuOpen(false)}>Crypto Exchange</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>
        <button className="contact-btn" onClick={() => navigate("/contact")}>Get in Touch</button>
      </nav>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
