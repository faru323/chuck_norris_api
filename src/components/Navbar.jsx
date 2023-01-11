import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navb">
      <div className="navbLeft">
        <img
          id="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBGUotJaOEBBvsj8e9cnxESZYsErkXalGmw&usqp=CAU"
          alt=""
        />
      </div>
      <div className="navbRight">
        <ul>
          <li>
            {" "}
            <Link className=" aa Links" to="/">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link className=" aa Links" to="/fav">
              Favourite
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
