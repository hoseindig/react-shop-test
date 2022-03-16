import { Row, Col } from "react-bootstrap";
import styles from "./CategoryGallery.module.scss";
const CategoryGallery = () => {
  return (
    <div className={styles.category}>
      <Row>
        <Col md={3}>
          <img src="images/CategoryGallery/CategoryGallery1.jpg" alt="" />
        </Col>
        <Col md={9}>
          <Row>
            <Col md={7}>
              <img src="images/CategoryGallery/CategoryGallery2.jpg" alt="" />
            </Col>
            <Col md={5}>
              <img src="images/CategoryGallery/CategoryGallery3.jpg" alt="" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <img src="images/CategoryGallery/CategoryGallery4.jpg" alt="" />
            </Col>
            <Col md={6}>
              <img src="images/CategoryGallery/CategoryGallery5.jpg" alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CategoryGallery;
