import React, { useState, useContext } from "react";
import UserContext from "../store/userContext";
import CardItem from "./CardItem";
const CardDropDown = ({ show }) => {
  const [showCard, setShowCard] = useState(false);
  const UserCntx = useContext(UserContext);
  const cart = UserCntx.siteSeting.header.cart;
  const languageSelect = UserCntx.siteSeting.languageSelect;
  // console.log("CardItem", cart, languageSelect);
  const getLanguageText = (list) => {
    const select=list.find((i) => i.id === languageSelect.id);
    return select
  };
  // debugger;
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
            {/* View Cart */}
            {getLanguageText(cart.dropDown.viewCartBtn.languagesOption).text}
            {/* {cart.dropDown.viewCartBtn.languagesOption[languageSelect.id]} */}
            <i className="fa fa-chevron-right"></i>
          </a>
          <a href="checkout.html" className="btn btn--primary">
            {/* Check Out  */}
            {getLanguageText(cart.dropDown.checkOutBtn.languagesOption).text}

            <i className="fa fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardDropDown;
