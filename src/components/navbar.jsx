import React, { useContext, useState } from "react";
import {
  Navbar,
  Container,
  Popover,
  Badge
} from "react-bootstrap";
import UserContext from "../store/userContext";
import CartDropDown from "./CardDropDown";
import styles from "./navbar.module.scss";
const NavbarForm = () => {
  const UserCtx = useContext(UserContext);

  const [showCardDropDown, setShowCardDropDown] = useState(false);
 
  return (
    <Navbar expand="lg" bg="light" variant="light">
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
            {!UserCtx.user.userId && (
              <span onClick={UserCtx.userLogin}>Login</span>
            )}
          </Navbar.Text>
          <Navbar.Text>
            {UserCtx.user.userId && (
              <div>
                <span> Signed in as: </span>
                <a href="#login">{UserCtx.user.fullName}</a>
              </div>
            )}
          </Navbar.Text>
          <Navbar.Text>
            {UserCtx.user.userId && (
              <span onClick={UserCtx.userLogout}>Logout</span>
            )}
          </Navbar.Text>

       
          <span
            className={styles["shopping-cart"]}
            onMouseOver={() => setShowCardDropDown(true)}
            onMouseLeave={() => setShowCardDropDown(false)}
          >
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            Shopping Cart 
            <Badge pill  bg="danger">{UserCtx.cartItems.length}</Badge>
          </span>
          <CartDropDown show={showCardDropDown} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarForm;
