import React, { useState, useContext } from "react";
import UserContext from "../store/userContext";
import CardItem from "./CardItem";
const CardDropDown = ({ show }) => {
  const [showCard, setShowCard] = useState(false);
  const UserCntx = useContext(UserContext);
  return (
    <div
      className="cart-dropdown-block"
      style={{ opacity: show ? 1 : showCard ? 1 : 0 }}
      onMouseOver={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}
    >
      {/* {showCard ? <h1>showCard</h1> : ""}
      {show ? <h1>show</h1> : ""} */}
      <div className=" single-cart-block ">
        <CardItem items={UserCntx.cartItems} />
      </div>
      <div className=" single-cart-block ">
        <div className="btn-block">
          <a href="cart.html" className="btn">
            View Cart <i className="fa fa-chevron-right"></i>
          </a>
          <a href="checkout.html" className="btn btn--primary">
            Check Out <i className="fa fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardDropDown;
