import React from "react";

const Pizza = function ({ data }) {
  //if (data.soldOut) return null;

  return (
    <li className={`pizza ${data.soldOut && "sold-out"}`}>
      <img src={data.photoName} alt={data.name} />

      <div>
        <h3>{data.name}</h3>
        <p>{data.ingredients}</p>

        <span>{data.soldOut ? "SOLD OUT" : data.price}</span>
      </div>
    </li>
  );
};

export default Pizza;
