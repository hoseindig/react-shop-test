import React, { useContext, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Popover,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
import UserContext from "../store/userContext";
import CardDropDown from "./CardDropDown";
import styles from "./navbar.module.scss";
const NavbarForm = () => {
  const UserCtx = useContext(UserContext);

  const [showCardDropDown, setShowCardDropDown] = useState(false);
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">My Cart</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  // bg="light"
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

          {/* <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}> 
            <span className={styles["shopping-cart"]}>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              Shopping Cart
            </span>
          </OverlayTrigger> */}
          <span
            className={styles["shopping-cart"]}
            onMouseOver={() => setShowCardDropDown(true)}
            onMouseLeave={() => setShowCardDropDown(false)}
          >
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            Shopping Cart
          </span>
          <CardDropDown show={showCardDropDown} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarForm;
