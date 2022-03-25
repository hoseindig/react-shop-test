import React, { useState, useContext, useLayoutEffect } from "react";

import UserContext from "../store/userContext";
import CardItemInCart from "./CardItem";

const CardDropDown = ({ show }) => {
  const [showCard, setShowCard] = useState(false);

  const UserCntx = useContext(UserContext);

  const cart = UserCntx.siteSeting.header.cart;
  const languageSelect = UserCntx.siteSeting.languageSelect;
  const { barVisibility } = UserCntx.siteSeting;

  const getLanguageText = (list) => {
    const select = list.find((i) => i.id === languageSelect.id);
    return select;
  };
  /////////////////////////
  //get and set cart posyion :|
  const element = document.getElementById("login-btn-navbar");
  let bodyRect = document.body.getBoundingClientRect();
  let elemRect;
  let offset = {};
  if (element) {
    elemRect = element.getBoundingClientRect();
    offset.top = elemRect.top - bodyRect.top;
    offset.right = elemRect.right - bodyRect.right;
    offset.left = elemRect.left - bodyRect.left;
    if (elemRect.left + 360 > bodyRect.width)
      offset.left = bodyRect.width - 360;
    // debugger;
    // console.log("Element is " + offset.left + " vertical pixels from <body>");
  }

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    // console.log(`Window size: ${width} x ${height}`); //<span>Window size: {width} x {height}</span>;
  }
  ShowWindowDimensions();
  /////////////////////////

  return (
    <div
      className="cart-dropdown-block"
      style={{
        opacity: show ? 1 : showCard ? 1 : 0,// 1- show  2-hide
        top: barVisibility ? 107 : 190,
        left: offset.left,
      }}
      onMouseOver={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}
    >
      {/* {showCard ? <h1>showCard</h1> : ""}
      {show ? <h1>show</h1> : ""} */}
      <div className=" single-cart-block ">
        <CardItemInCart items={UserCntx.cartItems} />
      </div>
      <div className=" single-cart-block ">
        {UserCntx.cartItems.length > 0 && (
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
        )}

        {UserCntx.cartItems.length === 0 && <h4> Cart Empty</h4>}
      </div>
    </div>
  );
};

export default CardDropDown;
