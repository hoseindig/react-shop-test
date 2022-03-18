import styles from "./login.module.scss";
import { Container, Row, Col } from "react-bootstrap";

import LoginBox from "./Login";
import Singup from "./Singup";
// height: "calc(100vh - 562px)",minHeight: 400 
const Login = () => {
  return (
    <Container className={styles["main-box"]}>
      <Row className="mt-5">
        <Col md={6} xs={12}>
          <LoginBox />
        </Col>
        <Col md={6} xs={12}>
          <Singup />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
