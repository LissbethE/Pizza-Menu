import React from "react";

const Order = function ({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until 🌙{closeHour}:00pm. Come visit us or order online.</p>

      <button className="btn">Order</button>
    </div>
  );
};

const Footer = function () {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  const paragraph = (
    <p>
      We're happy to welcome you between ☀️{openHour}:00am and 🌙{closeHour}
      :00pm.
    </p>
  );

  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour} /> : paragraph}
    </footer>
  );
};

export default Footer;
