import UserContext from "./userContext";

import React, { useReducer } from "react";

const defaultState = {
  items: [],
  total: 0,
  user: { userId: null, username: null, fullName: null },
};
//#region
const UserReducer = (state, action) => {
  if (action.type === "LOGIN") {
    const updateState = {
      userId: 1111,
      username: "hoseinx",
      fullName: "hossein sheykhi",
    };
    return { user: updateState };
  }
  if (action.type === "LOGOUT") {
    const updateState = {
      userId: null,
      username: null,
      fullName: null,
    };
    return { user: updateState };
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
  //function
  ////////////////////////////
  //#endregion

  const myContext = {
    ...myState,
    userLogin: login,
    userLogout: logOut,
    siteSeting: {
      lang: "en",
      header: {
        priceUint: [
          { id: 1, name: "£ GBP" },
          { id: 2, name: "€ Euro" },
          { id: 3, name: "£ Pound Sterling" },
          { id: 4, name: "$ US Dollar" },
          { id: 5, name: "ريال" },
        ],
        Languages: [
          { id: 1, name: "English" },
          { id: 2, name: "Germany" },
          { id: 3, name: "Persian" },
        ],
        menuItems: [
          { id: 1, name: "My Compare", icon: "fa fa-random" },
          { id: 2, name: "Wishlist", icon: "fa fa-heart" },
          { id: 3, name: "My Account", icon: "fa fa-user" },
          { id: 4, name: "Contact", icon: "fa fa-phone" },
          { id: 5, name: "Checkout", icon: "fa fa-share" },
        ],
      },
    },
    cartItems: [
      {
        id: 1,
        title: "Kodak PIXPRO Astro Zoom AZ421 16 MP",
        image: "cart-product-1.jpg",
        price: 87.34,
        count: 1,
      },
    ],
  };
  return (
    <UserContext.Provider value={myContext}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
