import React from "react";

const UserContext = React.createContext({
  userId: null,
  username: null,
  fullName: null,
  user:{},
  userLogin: () => {},
  userLogout: () => {},
  setPriceUnit: () => {},
  setLanguage: () => {},
  addToCartItems: () => {},
  removeFromCartItems: () => {},

  cartItems: [],
  priceUnitSelect: {},
  languageSelect: {},
  header: {},
  siteSeting:{
    barVisibility:false,
    setbarVisibilityCntx:() => {},
    priceUnitSelect:{},
    languageSelect:{},
    header:{
      priceUnit:[],
      menuItems:[],
    }
  }
});

export default UserContext;
