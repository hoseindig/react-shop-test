import React, { useContext, useState, useEffect } from "react";
import { Navbar, Container, Popover, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../store/userContext";
import CartDropDown from "./CartDropDown";
import styles from "./navbar.module.scss";

const NavbarForm = () => {
  const userCntx = useContext(UserContext);
  const cart = userCntx.siteSeting.header.cart;
  const { setbarVisibilityCntx } = userCntx.siteSeting;
  // debugger
  const [showCardDropDown, setShowCardDropDown] = useState(false);


  /************************** */
  // nav sticky  scroll       //
  const [barVisibility, setBarVisibility] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    // console.log("handleScroll");
    const position = window.pageYOffset;
    position >= 50 ? setBarVisibility(true) : setBarVisibility(false);
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setbarVisibilityCntx(barVisibility);
  }, [barVisibility]);
  /***************** */
  const seletedLanguage = userCntx.siteSeting.languageSelect.id;

  const getLanguageText = (list) => {
    const select = list.find((i) => i.id === seletedLanguage);
    // debugger
    return select;
  };
  return (
    <Navbar expand="lg" className={barVisibility ? "showBar" : "hideBar"}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src="/images/logo.jpg" alt="" />
          </Link>
        </Navbar.Brand>
        {/* search */}
        <div className={styles.serachBox}>
          <input type="text" />
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end login-btn">
          {/* login */}
          <Navbar.Text>
            {!userCntx.user.userId && (
              // <span onClick={userCntx.userLogin}>Login</span>
              <Link to={"/login"}>Login</Link>
            )}
          </Navbar.Text>
          {/* Logout */}
          <Navbar.Text>
            {userCntx.user.userId && (
              <div className={styles["login-info"]}>
                <p href="#login">{userCntx.user.fullName}</p>
                <p onClick={userCntx.userLogout}>Logout</p>
              </div>
            )}
          </Navbar.Text>

          {/* Shopping Cart */}
          <Navbar.Text
            id="login-btn-navbar"
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
            <p>
              {/* {cartItems.length} */}
              {" "}
              {userCntx.siteSeting.priceUnitSelect.symbol} {userCntx.totalCartMoney}
            </p>
          </Navbar.Text>
          {/* Cart DropDown */}
          <CartDropDown show={showCardDropDown} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarForm;
