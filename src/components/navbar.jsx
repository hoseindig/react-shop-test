import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import React, { useContext } from "react";
import UserContext from "../store/userContext";
const NavbarForm = () => {
  const UserCtx = useContext(UserContext);
  // bg="light"
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Big-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
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
            {UserCtx.user.userId && <span onClick={UserCtx.userLogout}>Logout</span>}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarForm;
