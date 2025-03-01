import React, { useState } from "react";
import "../../src/Styles/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/contact/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage(data.message);
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setResponseMessage("Error: " + JSON.stringify(data));
      }
    } catch (error) {
      setResponseMessage("Something went wrong!");
    }
  };

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
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              autoFocus
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Say Hello"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="button-container">
              <div className="send-button" onClick={handleSubmit}>Send</div>
              <div className="reset-button-container">
                <div
                  className="reset-button"
                  id="reset-btn"
                  onClick={() => setFormData({ name: "", email: "", message: "" })}
                >
                  Reset
                </div>
              </div>
            </div>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
