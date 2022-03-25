import UserContext from "./userContext";

import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
const defaultState = {
  items: [],
  total: 0,
  priceUnitSelect: {},
  languageSelect: {},
  user: { userId: null, username: null, fullName: null },
  siteSeting: {
    lang: "en",
    barVisibility: false,
    priceUnitSelect: { id: 4, name: "$ US Dollar", symbol: "$" },
    languageSelect: { id: 1, name: "English" },
    header: {
      priceUnit: [
        { id: 1, name: "£ GBP", symbol: "£" },
        { id: 2, name: "€ Euro", symbol: "€ " },
        { id: 3, name: "£ Pound Sterling", symbol: "£" },
        { id: 4, name: "$ US Dollar", symbol: "$" },
        { id: 5, name: "ريال", symbol: " Rls " },
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
      cart: {
        languagesOption: [
          { id: 1, text: "Shopping Cart" },
          { id: 3, text: "سبد خرید" },
        ],
        dropDown: {
          checkOutBtn: {
            languagesOption: [
              { id: 1, text: "Check Out" },
              { id: 3, text: "وارسی" },
            ],
          },
          viewCartBtn: {
            languagesOption: [
              { id: 1, text: "View Cart" },
              { id: 3, text: "مشاهده سبد خرید" },
            ],
          },
        },
      },
    },
  },
  cartItems: [],
  totalCartMoney: 0,
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
  if (action.type === "SETBarVisibility") {
    // debugger;
    const siteSeting = {
      ...state.siteSeting,
      barVisibility: action.item,
    };
    return { ...state, siteSeting };
  }

  if (action.type === "AddToCartItems") {
    const index = state.cartItems.findIndex((i) => i.id === action.item.id);
    if (index !== -1) {
      let copyOfState = state;
      copyOfState.cartItems[index].count++;

      let total = 0;
      for (let i = 0; i < copyOfState.cartItems.length; i++) {
        total +=
          copyOfState.cartItems[i].count * copyOfState.cartItems[i].price;
      }

      return { ...state, copyOfState, totalCartMoney: total };
    }
    const cartItems = [...state.cartItems, action.item];
    return { ...state, cartItems };
  }

  if (action.type === "RemoveFromCartItems") {
    const index = state.cartItems.findIndex((i) => i.id === action.item.id);
    if (index !== -1) {
      let copyOfState = state;
      copyOfState.cartItems.splice(index, 1); //  [index].count++;

      let total = 0;
      for (let i = 0; i < copyOfState.cartItems.length; i++) {
        total +=
          copyOfState.cartItems[i].count * copyOfState.cartItems[i].price;
      }

      return { ...state, copyOfState, totalCartMoney: total };
    }
  }

  return defaultState;
};
//#endregion

const UserProvider = (props) => {
  const navigate = useNavigate();
  const [myState, dispachState] = useReducer(UserReducer, defaultState);
  //#region
  ////////////////////////////
  //function
  const login = () => {
    console.log("LOGIN");
    dispachState({
      type: "LOGIN",
    });
    navigate("/");
    // debugger
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

  const setbarVisibility = (bol) => {
    console.log("SETLanguage", bol);
    dispachState({
      type: "SETBarVisibility",
      item: bol,
    });
  };

  const addToCartItems = (item) => {
    console.log("addToCartItems", item);
    dispachState({
      type: "AddToCartItems",
      item: item,
    });
  };

  const removeFromCartItems = (item) => {
    console.log("removeFromCartItems", item);
    dispachState({
      type: "RemoveFromCartItems",
      item: item,
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
      ...myState.siteSeting,
      setbarVisibilityCntx: setbarVisibility,
    },

    // cartItems: [
    //   {
    //     id: 1,
    //     title: "Kodak PIXPRO Astro Zoom AZ421 16 MP",
    //     image: "cart-product-1.jpg",
    //     price: 87.34,
    //     count: 1,
    //   },
    //   {
    //     id: 2,
    //     title: "Kodak PIXPRO Astro Zoom AZ421 16 MP",
    //     image: "cart-product-1.jpg",
    //     price: 87.34,
    //     count: 1,
    //   },
    // ],
    setPriceUnit,
    setLanguage,
    addToCartItems,
    removeFromCartItems,
  };
  return (
    <UserContext.Provider value={myContext}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
