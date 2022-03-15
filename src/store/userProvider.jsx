import UserContext from "./userContext";

import React, { useReducer } from "react";

const defaultState = {
  items: [],
  total: 0,
  priceUnitSelect: {},
  languageSelect: {},
  user: { userId: null, username: null, fullName: null },
  siteSeting: {
    lang: "en",
    priceUnitSelect: { id: 4, name: "$ US Dollar", symbol: "$" },
    languageSelect: { id: 1, name: "English" },
    header: {
      priceUnit: [
        { id: 1, name: "£ GBP", symbol: "£" },
        { id: 2, name: "€ Euro", symbol: "€ " },
        { id: 3, name: "£ Pound Sterling", symbol: "£" },
        { id: 4, name: "$ US Dollar", symbol: "$" },
        { id: 5, name: "ريال", symbol: "ريال" },
      ],
      Languages: [
        { id: 1, name: "English" },
        // { id: 2, name: "Germany" },
        { id: 3, name: "Persian" },
      ],
      menuItems: [
        {
          id: 1,
          name: "My Compare",
          icon: "fa fa-random",
          languagesOption: [
            { id: 1, text: "My Compare" },
            { id: 3, text: "مقایسه" },
          ],
        },
        {
          id: 2,
          name: "Wishlist",
          icon: "fa fa-heart",
          languagesOption: [
            { id: 1, text: "Wishlist" },
            { id: 3, text: "مورد علاقه" },
          ],
        },
        {
          id: 3,
          name: "My Account",
          icon: "fa fa-user",
          languagesOption: [
            { id: 1, text: "My Account" },
            { id: 3, text: "حساب کاربری" },
          ],
        },
        {
          id: 4,
          name: "Contact",
          icon: "fa fa-phone",
          languagesOption: [
            { id: 1, text: "Contact" },
            { id: 3, text: "تماس با ما" },
          ],
        },
        {
          id: 5,
          name: "Checkout",
          icon: "fa fa-share",
          languagesOption: [
            { id: 1, text: "Checkout" },
            { id: 3, text: "بازبینی" },
          ],
        },
      ],
      cart:{
        languagesOption: [
          { id: 1, text: "Shopping Cart" },
          { id: 3, text: "سبد خرید" },
        ],
        dropDown:{
          checkOutBtn:{
            languagesOption: [
              { id: 1, text: "Check Out" },
              { id: 3, text: "وارسی" },
            ],
          },
          viewCartBtn:{
            languagesOption: [
              { id: 1, text: "View Cart" },
              { id: 3, text: "مشاهده سبد خرید" },
            ],
          }
        }
      }
    },
  },
};
//#region
const UserReducer = (state, action) => {
  if (action.type === "LOGIN") {
    const updateState = {
      userId: 1111,
      username: "hoseinx",
      fullName: "hossein sheykhi",
    };
    return { ...state, user: updateState };
  }
  if (action.type === "LOGOUT") {
    const updateState = {
      userId: null,
      username: null,
      fullName: null,
    };
    return { ...state, user: updateState };
  }

  if (action.type === "SETPriceUnit") {
    // debugger;
    const siteSeting = {
      ...state.siteSeting,
      priceUnitSelect: action.item,
    };
    return { ...state, siteSeting };
  }
  if (action.type === "SETLanguage") {
    // debugger;
    const siteSeting = {
      ...state.siteSeting,
      languageSelect: action.item,
    };
    return { ...state, siteSeting };
  }
  return defaultState;
};
//#endregion

const UserProvider = (props) => {
  const [myState, dispachState] = useReducer(UserReducer, defaultState);
  //#region
  ////////////////////////////
  //function
  const login = () => {
    console.log("LOGIN");
    dispachState({
      type: "LOGIN",
    });
  };
  const logOut = () => {
    console.log("LOGOUT");
    dispachState({
      type: "LOGOUT",
    });
  };

  const setPriceUnit = (item) => {
    console.log("SETPriceUnit", item);
    dispachState({
      type: "SETPriceUnit",
      item,
    });
  };
  const setLanguage = (item) => {
    console.log("SETLanguage", item);
    dispachState({
      type: "SETLanguage",
      item,
    });
  };

  //function
  ////////////////////////////
  //#endregion

  const myContext = {
    ...myState,
    userLogin: login,
    userLogout: logOut,

    cartItems: [
      {
        id: 1,
        title: "Kodak PIXPRO Astro Zoom AZ421 16 MP",
        image: "cart-product-1.jpg",
        price: 87.34,
        count: 1,
      },
      {
        id: 2,
        title: "Kodak PIXPRO Astro Zoom AZ421 16 MP",
        image: "cart-product-1.jpg",
        price: 87.34,
        count: 1,
      },
    ],
    setPriceUnit,
    setLanguage,
  };
  return (
    <UserContext.Provider value={myContext}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
