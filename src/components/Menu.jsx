import React from "react";
import Pizza from "./Pizza";
import data from "./../dev-data/data.json";

const Menu = function () {
  const isTrue = data.length > 0;

  return (
    <main className="menu">
      <h2>🍕Our Menu</h2>

      {isTrue && (
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
      )}

      {isTrue && (
        <ul className="pizzas">
          {data.map((pizza) => (
            <Pizza key={pizza.id} data={pizza} />
          ))}
        </ul>
      )}

      {!isTrue && (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

export default Menu;
