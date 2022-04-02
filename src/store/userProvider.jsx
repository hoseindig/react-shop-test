import React, { useReducer } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
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
  productList: [],

  categoryList: [],
  clientList: [],
  carouselList: [],
  featureList: [],

  wishList: [],
  compareList: [],

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
    toast.success(updateState.username + " successfull Login");
    return { ...state, user: updateState };
  }
  if (action.type === "LOGOUT") {
    const updateState = {
      userId: null,
      username: null,
      fullName: null,
    };
    toast.success(" User Logout");

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
      toast.success(`Item added "${action.item.title}"`);

      return { ...state, copyOfState, totalCartMoney: total };
    }
    const cartItems = [...state.cartItems, action.item];
    toast.success(`Item added "${action.item.title}"`);

    return { ...state, cartItems };
  }

  if (action.type === "AddToCompareList") {
    const index = state.compareList.findIndex((i) => i.id === action.item.id);
    if (index !== -1) {
      toast.warn(`alredy Item added "${action.item.title}" To Compare List`);
      return { ...state };
    } else {
    }
    const compareList = [...state.compareList, action.item];
    toast.success(`Item added "${action.item.title}" To Compare List`);
    // toast.success(`Item added "${action.item.title}"`);

    return { ...state, compareList };
  }

  if (action.type === "AddToWishList") {
    const index = state.wishList.findIndex((i) => i.id === action.item.id);
    if (index !== -1) {
      toast.warn(`alredy Item added "${action.item.title}" To Wish List`);
      return { ...state };
    } else {
    }
    const wishList = [...state.wishList, action.item];
    toast.success(`Item added "${action.item.title}" To Wish List`);
    // toast.success(`Item added "${action.item.title}" To Wish List`);

    return { ...state, wishList };
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
      toast.error(`Item removed "${action.item.title}"`);

      return { ...state, copyOfState, totalCartMoney: total };
    }
  }

  if (action.type === "SetProductList") {
    return { ...state, productList: action.items };
  }
  //featuresList carouselsList carouselsList clientsList
  if (action.type === "SetFeatureList") {
    return { ...state, featureList: action.items };
  }
  if (action.type === "SetCarouselList") {
    return { ...state, carouselList: action.items };
  }
  if (action.type === "SetClientList") {
    return { ...state, clientList: action.items };
  }
  if (action.type === "SetCategoryList") {
    return { ...state, categoryList: action.items };
  }

  if (action.type === "SetUserData") {
    return { ...state, user: action.item };
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
  const addToCompareList = (item) => {
    console.log("addToCompareList", item);
    dispachState({
      type: "AddToCompareList",
      item: item,
    });
  };
  const addToWishList = (item) => {
    console.log("AddToWishList", item);
    dispachState({
      type: "AddToWishList",
      item: item,
    });
  };

  const removeFromCompareList = (item) => {
    console.log("removeFromCompareList", item);
    dispachState({
      type: "removeFromCompareList",
      item: item,
    });
  };
  const removeFromWishList = (item) => {
    console.log("removeFromWishList", item);
    dispachState({
      type: "RemoveFromCompareList",
      item: item,
    });
  };

  const setUserData = (item) => {
    console.log("SetUserData", item);
    dispachState({
      type: "SetUserData",
      item: item,
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
    debugger
    dispachState({
      type: "RemoveFromCartItems",
      item: item,
    });
  };

  const setProductList = async (items) => {
    console.log("SetProductList", items);
    await dispachState({
      type: "SetProductList",
      items,
    });
  };

  const setFeatureList = async (items) => {
    console.log("SetFeatureList", items);
    await dispachState({
      type: "SetFeatureList",
      items,
    });
  };
  const setCarouselList = async (items) => {
    console.log("SetCarouselList", items);
    await dispachState({
      type: "SetCarouselList",
      items,
    });
  };
  const setClientList = async (items) => {
    console.log("SetClientList", items);
    await dispachState({
      type: "SetClientList",
      items,
    });
  };
  const setCategoryList = async (items) => {
    console.log("SetCategoryList", items);
    await dispachState({
      type: "SetCategoryList",
      items,
    });
  };

  //function
  ////////////////////////////
  //#endregion

  const myContext = {
    ...myState,
    userLogin: login,
    userLogout: logOut,

    setUserData,
    siteSeting: {
      ...myState.siteSeting,
      setbarVisibilityCntx: setbarVisibility,
    },
    setPriceUnit,
    setLanguage,
    addToCartItems,
    removeFromCartItems,
    setProductList,
    setFeatureList,
    setCarouselList,
    setClientList,
    setCategoryList,

    addToCompareList,
    addToWishList,
    removeFromCompareList,
    removeFromWishList,
  };
  return (
    <UserContext.Provider value={myContext}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
