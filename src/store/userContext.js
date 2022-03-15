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
  cartItems: [],
  priceUnitSelect: {},
  languageSelect: {},
  header: {},
  siteSeting:{
    priceUnitSelect:{},
    languageSelect:{},
    header:{
      priceUnit:[],
      menuItems:[],
    }
  }
});

export default UserContext;
