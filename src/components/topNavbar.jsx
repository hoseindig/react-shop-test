import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import React, { useContext, useState } from "react";

import UserContext from "../store/userContext";

import styles from "./topNavbar.module.scss";
const TopNavbar = () => {
  const userCntx = useContext(UserContext);
  const [seletedLanguage, setseletedLanguage] = useState(
    userCntx.siteSeting.languageSelect.id
  );
  const [seletedPriceUnit, setPriceUnit] = useState(
    userCntx.siteSeting.priceUnitSelect.id
  );
  const [Languages, setLanguages] = useState(
    userCntx.siteSeting.header.Languages
  );

  // console.log("userCntx", userCntx);
  // console.log("seletedLanguage", seletedLanguage);

  const cssText = "justify-content-end " + styles["basic-navbar-nav"];
  //   debugger;
  const { menuItems, priceUnit } = userCntx.siteSeting.header;

  const getpriceUnitName = () => {
    const select = priceUnit.find((i) => i.id === seletedPriceUnit);
    return select;
  };
  const getLanguagesName = () => {
    const select = Languages.find((i) => i.id === seletedLanguage);
    return select;
  };

  const getTextByLanguagesSelcted = (list) => {
    const select = list.find((i) => i.id === seletedLanguage);
    return select;
  };
  return (
    <Navbar>
      <Container>
        {/* priceUnit */}
        <NavDropdown title={getpriceUnitName().name} id="basic-nav-dropdown">
          {priceUnit.map((p) => {
            return (
              <NavDropdown.Item
                key={p.id}
                href="#action/3.1"
                onClick={() => {
                  userCntx.setPriceUnit(p);
                  setPriceUnit(p.id);
                }}
              >
                {p.name}
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
        {/* Language */}
        <NavDropdown title={getLanguagesName().name} id="basic-nav-dropdown">
          {Languages.map((i) => {
            return (
              <NavDropdown.Item
                key={i.id}
                href="#action/3.1"
                onClick={() => {
                  userCntx.setLanguage(i);
                  setseletedLanguage(i.id);
                }}
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
                {m.languagesOption
                  ? getTextByLanguagesSelcted(m.languagesOption).text
                  : m.name }
                {/* {m.name} */}
              </Nav.Link>
            );
          })}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
