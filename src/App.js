import logo from "./logo.svg";
import "./App.scss";
import NavbarForm from "./components/navbar";
import UserProvider from "./store/userProvider";
import React, { useState } from "react";

function App() {
  const userData = useState({
    usewrname: "",
    password: "",
    fullName: "hossein sheykhi",
  });
  return (
    <UserProvider>
      <div className="App">
        <NavbarForm />
      </div>
    </UserProvider>
  );
}

export default App;
