import React from "react";

const UserContext = React.createContext({
  userId: null,
  username: null,
  fullName: null,
  user: {},
  userLogin: () => {},
  userLogout: () => {},
  setPriceUnit: () => {},
  setLanguage: () => {},
  addToCartItems: () => {},
  removeFromCartItems: () => {},
  
  setProductList: () => {},
  setFeatureList: () => {},
  setCarouselList: () => {},
  setClientList: () => {},
  setCategoryList: () => {},
  cartItems: [],
  productList: [],

  categoryList: [],
  clientList: [],
  carouselList: [],
  featureList: [],


  totalCartMoney: 0,
  priceUnitSelect: {},
  languageSelect: {},
  header: {},
  siteSeting: {
    barVisibility: false,
    setbarVisibilityCntx: () => {},
    priceUnitSelect: {},
    languageSelect: {},
    header: {
      priceUnit: [],
      menuItems: [],
    },
  },
});

export default UserContext;
