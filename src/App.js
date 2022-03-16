import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./App.scss";
import TopNavbar from "./components/topNavbar";
import NavbarForm from "./components/navbar";
import MainMenuNavbar from "./components/mainMenuNavbar";
import UserProvider from "./store/userProvider";
import QuickMenu from "./components/quickMenu";

import MainBox from "./components/mainBox";

function App() {
  const userData = useState({
    usewrname: "",
    password: "",
    fullName: "hossein sheykhi",
  });

  return (
    <UserProvider>
      <div className="App">
        <TopNavbar />
        <NavbarForm />
        {/* <MainMenuNavbar /> */}
        <Container>
          <Row>
            {/* <Col md={3}>
              <QuickMenu />
            </Col>
            <Col md={8}><MainBox /></Col> */}
            <Col md={12}>
              <MainBox />
            </Col>
          </Row>
        </Container>
      </div>
    </UserProvider>
  );
}

export default App;
