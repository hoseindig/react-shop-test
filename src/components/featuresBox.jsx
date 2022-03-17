import { Row, Col, Container } from "react-bootstrap";
import styles from "./featuresBox.module.scss";
const FeaturesBox = () => {
  const features = [
    {
      id: 1,
      icon: "fa fa-shipping-fast",
      h5: "Free Shipping Item",
      p: "Orders over $500",
    },
    {
      id: 2,
      icon: "fa fa-redo-alt",
      h5: "Money Back Guarantee",
      p: "100% money back",
    },
    {
      id: 3,
      icon: "fa fa-piggy-bank",
      h5: "Cash On Delivery",
      p: "Lorem ipsum dolor amet",
    },
    {
      id: 4,
      icon: "fa fa-life-ring",
      h5: "Help & Support",
      p: "Call us : + 0123.4567.89",
    },
  ];
  return (
    <Container>
      {" "}
      <div className={styles.features}>
        <Row>
          {features.map((f) => {
            return (
              <Col
                key={f.id}
                md={3}
                sm={6}
                xs={1}
                className={styles["feature-box"] + " h-100"}
              >
                <div className={styles["icon"]}>
                  <i className={f.icon}></i>
                </div>
                <div className={styles["text"]}>
                  <h5>{f.h5}</h5>
                  <p> {f.p}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

export default FeaturesBox;
