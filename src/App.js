import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "./App.scss";
import TopNavbar from "./components/topNavbar";
import NavbarForm from "./components/navbar";
// import MainMenuNavbar from "./components/mainMenuNavbar";
import UserProvider from "./store/userProvider";
// import QuickMenu from "./components/quickMenu";

import MainBox from "./components/mainBox";
import Login from "./components/Login";
import ProductDetails from "./components/Product/productDetails";
import Footer from "./components/footer";
import CategoryProduct from "./components/Product/categoryProduct";

function App() {
  // style={{height: "calc(100vh - 344px)"}}
  return (
    <UserProvider>
      <div className="App">
        <div  >
          <Row>
            <Col>
              <TopNavbar />
            </Col>
          </Row>
          <Row>
            <NavbarForm />
          </Row>
          {/* <MainMenuNavbar /> */}
          {/* <Row> */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/category-product/:categoryId" element={<CategoryProduct />} />
            <Route
              path="/"
              exec
              element={
                <Row>
                  <Col md={12}>
                    <MainBox />
                  </Col>
                </Row>
              }
            />

          </Routes>
          {/* </Row> */}
          <Row>
            <Footer />
          </Row>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
