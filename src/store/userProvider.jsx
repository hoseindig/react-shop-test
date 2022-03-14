import UserContext from "./userContext";

import React, { useReducer } from "react";

const defaultState = {
  items: [],
  total: 0,
  user: null,
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
  };
  return (
    <UserContext.Provider value={myContext}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
