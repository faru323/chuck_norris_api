import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons//bs";

import "./style.css";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => setCards(res.data));
  }, []);
  console.log(cards);
  return (
    <div className="salam">
      <div className="cards">
        <div className="cardDiv">
          <img
            src="https://market.enonic.com/vendors/enonic/chuck-norris-widget/_/attachment/inline/1c700535-289d-4563-883f-cb8d4ec69b6a:43f4099ef34bd5fa69c7ab886d971be70cba17db/application.svg"
            alt="cardlogo"
          />
          <p>
            <b>Description :</b> <span>{cards.value}</span>
          </p>
          <p>
            <b>Category :</b> <span>{cards?.categories}</span>
          </p>
          <div className=" buttonsDiv">
            <button className="buttons" id="no">
              {" "}
              X
            </button>
            <button className="buttons">
              <BsCheckLg id="checked" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
