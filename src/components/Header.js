import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../Context";

import "./styles.css";

const Header = () => {
  const { cart } = useCartStore();

  return (
    <div>
      <span className="header">React Context API </span>
      <ul className="nav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
