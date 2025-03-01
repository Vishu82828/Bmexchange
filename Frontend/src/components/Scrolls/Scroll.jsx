import React from "react";
import ScrollVelocity from "../Scrolls/ScrollVelocity.jsx";

const Scroll = () => {
  const velocity = 100; // Define velocity before using it

  return (
    <div>
      <ScrollVelocity
        texts={["React Bits", "Scroll Down"]}
        velocity={velocity} // Now it is defined
        className="custom-scroll-text"
      />
    </div>
  );
};

export default Scroll;
