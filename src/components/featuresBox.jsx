import { Row, Col, Container } from "react-bootstrap";

import styles from "./featuresBox.module.scss";
const FeaturesBox = () => {
  const features = [
    {
      id: 1,
      icon: "fas fa-truck-fast",
      h5: "Free Shipping Item",
      p: "Orders over $500",
    },
    {
      id: 2,
      icon: "fas fa-solid fa-rotate-right",
      h5: "Money Back Guarantee",
      p: "100% money back",
    },
    {
      id: 3,
      icon: "fas fa-piggy-bank",
      h5: "Cash On Delivery",
      p: "Lorem ipsum dolor amet",
    },
    {
      id: 4,
      icon: "fas fa-life-ring",
      h5: "Help & Support",
      p: "Call us : + 0123.4567.89",
    },
  ];
  return (
    <Container className="mt-3">
      <Row>
        {features.map((f) => {
          return (
            <Col key={f.id} md={3} sm={6} xs={1}>
              <div className={styles["feature-box"] + " h-100"}>
                <div className={styles["icon"]}>
                  <i className={f.icon}></i>
                  {/* <FontAwesomeIcon icon={faHome} /> */}
                </div>
                <div className={styles["text"]}>
                  <h5>{f.h5}</h5>
                  <p> {f.p}</p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default FeaturesBox;
