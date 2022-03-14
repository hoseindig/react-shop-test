import React from "react";

const UserContext = React.createContext({
  userId: null,
  username: null,
  fullName: null,
  userLogin:()=>{},
  userLogout:()=>{},
});

export default UserContext;
