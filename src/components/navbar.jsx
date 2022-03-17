import React, { useContext, useState, useEffect } from "react";
import { Navbar, Container, Popover, Badge } from "react-bootstrap";

import UserContext from "../store/userContext";
import CartDropDown from "./CardDropDown";
import styles from "./navbar.module.scss";

const NavbarForm = () => {
  const userCntx = useContext(UserContext);
  const cart = userCntx.siteSeting.header.cart;
  // debugger
  const [showCardDropDown, setShowCardDropDown] = useState(false);

  /************************** */
  // nav sticky  scroll        //
  const [barVisibility, setBarVisibility] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    console.log("handleScroll");
    const position = window.pageYOffset;
    position >= 170 ? setBarVisibility(true) : setBarVisibility(false);
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  /***************** */

  const seletedLanguage = userCntx.siteSeting.languageSelect.id;

  // console.log("seletedLanguage", seletedLanguage,userCntx.siteSeting.languageSelect.id);
  // console.log("cart",cart);

  const getLanguageText = (list) => {
    const select = list.find((i) => i.id === seletedLanguage);
    // debugger
    return select;
  };
  return (
    <Navbar expand="lg" className={barVisibility ? "showBar" : "hideBar"}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="images/logo.jpg" alt="" />
        </Navbar.Brand>

        <div className={styles.serachBox}>
          <input type="text" />
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end login-btn">
          <Navbar.Text>
            {!userCntx.user.userId && (
              <span onClick={userCntx.userLogin}>Login</span>
            )}
          </Navbar.Text>
          <Navbar.Text>
            {userCntx.user.userId && (
              <div className={styles["login-info"]}>
                <p href="#login">{userCntx.user.fullName}</p>
                <p onClick={userCntx.userLogout}>Logout</p>
              </div>
            )}
          </Navbar.Text>

          <span
            className={styles["shopping-cart"]}
            onMouseOver={() => setShowCardDropDown(true)}
            onMouseLeave={() => setShowCardDropDown(false)}
          >
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            {/* Shopping Cart */}
            {getLanguageText(cart.languagesOption).text}
            <Badge pill bg="danger">
              {userCntx.cartItems.length}
            </Badge>
            <p> {userCntx.siteSeting.priceUnitSelect.symbol} 11555</p>
          </span>
          <CartDropDown show={showCardDropDown} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarForm;
