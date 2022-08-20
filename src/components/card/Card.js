import React from "react";
import "./card.css";
const Card = ({ price, isAnual }) => {
  return (
    <div className="card">
      <p>{price.type}</p>
      <h1>$ {isAnual ? price.annually : price.monthly}</h1>
      <ul>
        {price.features.map((feature, index) => (
          <li key={index} className={feature.included ? "included" : ""}>
            {feature.name}
          </li>
        ))}
      </ul>
      <button className="btn btn-block">
        <span>Learn more</span>
      </button>
    </div>
  );
};

export default Card;
