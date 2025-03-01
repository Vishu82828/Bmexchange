import React from "react";
import SplitText from "../SplitText";
import "../../components/HeroText/HeroText.css";

const HeroText = () => {
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
        <button>Work with Us</button>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default HeroText;
