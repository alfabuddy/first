import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img
          src="https://as1.ftcdn.net/v2/jpg/11/06/46/02/1000_F_1106460226_TgQKQENUY2zYC15f1rMs7lMVtOdhRQYS.jpg"
          alt="" width={333}
        />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
