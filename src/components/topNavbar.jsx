import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styles from "./topNavbar.module.scss";
const TopNavbar = () => {
  const cssText = "justify-content-end " + styles["basic-navbar-nav"];
  return (
    <Navbar>
      <Container>
        {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
        <NavDropdown title="Price Unit" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">£ GBP </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">€ Euro</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            £ Pound Sterling
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">$ US Dollar</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Language" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">English </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Germany</NavDropdown.Item>
        </NavDropdown>
        <Navbar.Toggle />
        <Navbar.Collapse className={cssText}>
          <Nav.Link href="#home">
            <i className="icons-left fa fa-random"></i>My Compare
          </Nav.Link>
          <Nav.Link href="#home">
            <i className="icons-left fa fa-heart"></i>Wishlist
          </Nav.Link>
          <Nav.Link href="#home">
            <i className="icons-left fa fa-user"></i>
            My Account
          </Nav.Link>
          <Nav.Link href="#home">
            <i className="icons-left fa fa-phone"></i>
            Contact
          </Nav.Link>
          <Nav.Link href="#home">
            <i className="icons-left fa fa-share"></i>
            Checkout
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    /* <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          <NavDropdown title="Price Unit" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">£ GBP </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">€ Euro</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              £ Pound Sterling
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">$ US Dollar</NavDropdown.Item>
     
          </NavDropdown>
        </Nav>
        <Nav className="me-auto">
          <NavDropdown title="Language" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">English </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Germany</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles["basic-navbar-nav"]}>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <i className="icons-left fa fa-random"></i>My Compare
            </Nav.Link>
            <Nav.Link href="#home">
              <i className="icons-left fa fa-heart"></i>Wishlist
            </Nav.Link>
            <Nav.Link href="#home">
              <i className="icons-left fa fa-user"></i>
              My Account
            </Nav.Link>
            <Nav.Link href="#home">
              <i className="icons-left fa fa-phone"></i>
              Contact
            </Nav.Link>
            <Nav.Link href="#home">
              <i className="icons-left fa fa-share"></i>
              Checkout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>*/
  );
};

export default TopNavbar;
