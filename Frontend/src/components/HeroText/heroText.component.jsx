import React from "react";
import SplitText from "../SplitText";
import "../../components/HeroText/HeroText.css";
import { useNavigate } from "react-router-dom";

const HeroText = () => {
  const navigate = useNavigate();

  const handleContact = () => {
      navigate('/contact'); 
  }
  return (
    <div className="introduction">
      <SplitText
        text="Make Cross Border - Payments Easy & Fast!"
        className="text-2xl font-semibold text-center"
      />
      <p>
        We've simplified sending and receiving funds for businesses and
        individuals, providing a streamlined and secure payment solution.
      </p>
      <div className="buttons">
        <button onClick={handleContact}>Work with Us</button>
        <button onClick={handleContact}>Contact Us</button>
      </div>
    </div>
  );
};

export default HeroText;
