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
        {/* <MainMenuNavbar /> */}
        <Container fluid>
          <Row>
            <Col>
              <TopNavbar />
            </Col>
          </Row>
          <Row>
            <NavbarForm />
          </Row>

          <Row>
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
