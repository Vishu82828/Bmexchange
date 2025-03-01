import React from "react";
import { useTrail, animated } from "@react-spring/web";

const SplitText = ({ text, className }) => {
  const letters = text.split("");

  const trail = useTrail(letters.length, {
    loop: { reverse: true }, // This makes the animation continuously alternate
    opacity: 0,
    transform: "translateY(0px)",
    from: { opacity: 1, transform: "translateY(20px)" },
    delay: 1,
    config: { duration: 1000 } // Adjust duration as needed
  });

  return (
    <h1 className={className}>
      {trail.map((style, index) => (
        <animated.span key={index} style={style}>
          {letters[index] === " " ? "\u00A0" : letters[index]}
        </animated.span>
      ))}
    </h1>
  );
};

export default SplitText;
