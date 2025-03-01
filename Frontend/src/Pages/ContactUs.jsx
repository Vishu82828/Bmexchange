import React from "react";
import "../../src/Styles/ContactUs.css";

const ContactUs = () => {
  return (
    <>
    <div className="contact-introduction">
      <h1>Contact Us</h1>
    </div>
      <div className="form-container-main">
        <div className="form-container">
          <div className="form-image">
            <h1 className="montserrat">Get in touch</h1>
          </div>
          <div className="form">
            <input type="text" id="name" placeholder="Name" autoFocus />
            <input type="email" id="mail" placeholder="Email" />
            <textarea
              name="message"
              // id="message"
              cols="30"
              rows="10"
              placeholder="Say Hello"
            ></textarea>
            <div className="button-container">
              <div className="send-button">Send</div>
              <div className="reset-button-container">
                <div className="reset-button" id="reset-btn">Reset</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;