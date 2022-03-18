import { Row, Col, Container } from "react-bootstrap";

import styles from "./featuresBox.module.scss";
const FeaturesBox = ({features}) => {

  return (
    <Container className="mt-3">
      <Row>
        {features.map((f) => {
          return (
            <Col key={f.id} md={3} sm={6} xs={1}>
              <div className={styles["feature-box"] + " h-100"}>
                <Row>
                  <Col md={3} sm={5} xs={12}>
                    <div className={styles["icon"]}>
                      <i className={f.icon}></i>
                      {/* <FontAwesomeIcon icon={faHome} /> */}
                    </div>
                  </Col>
                  <Col md={9} sm={7} xs={12}>
                    <div className={styles["text"]}>
                      <h5>{f.h5}</h5>
                      <p> {f.p}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default FeaturesBox;
