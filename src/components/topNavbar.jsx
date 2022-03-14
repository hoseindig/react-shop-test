import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import React, { useContext, useState } from "react";

import UserContext from "../store/userContext";

import styles from "./topNavbar.module.scss";
const TopNavbar = () => {
  const [seletedLanguage, setseletedLanguage] = useState(1);
  const [seletedpriceUint, setseletedpriceUint] = useState(4);
  const userCnx = useContext(UserContext);
  const cssText = "justify-content-end " + styles["basic-navbar-nav"];
  //   debugger;
  const [Languages, setLanguages] = useState(
    userCnx.siteSeting.header.Languages
  );
  const { menuItems, priceUint } = userCnx.siteSeting.header;

  const getpriceUintName = () => {
    return priceUint.find((i) => i.id === seletedpriceUint);
  };
  const getLanguagesName = () => {
    return Languages.find((i) => i.id === seletedLanguage);
  };
  return (
    <Navbar>
      <Container>
        {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
        <NavDropdown title={getpriceUintName().name} id="basic-nav-dropdown">
          {priceUint.map((p) => {
            return (
              <NavDropdown.Item key={p.id} href="#action/3.1">
                {p.name}
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
        <NavDropdown title={getLanguagesName().name} id="basic-nav-dropdown">
          {Languages.map((i) => {
            return (
              <NavDropdown.Item
                key={i.id}
                href="#action/3.1"
                onClick={() => setseletedLanguage(i.id)}
              >
                {i.name}
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
        <Navbar.Toggle />
        <Navbar.Collapse className={cssText}>
          {menuItems.map((m) => {
            return (
              <Nav.Link href="#home" key={m.id}>
                <i className={m.icon}></i>
                {m.name}
              </Nav.Link>
            );
          })}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
