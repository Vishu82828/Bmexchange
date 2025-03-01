import React from "react";
import "../../components/card/Card.css";

const Card = ({ img, heading, info }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h2 className="card-heading">{heading}</h2>
      <p className="card-info">{info}</p>
    </div>
  );
};

export default Card;

