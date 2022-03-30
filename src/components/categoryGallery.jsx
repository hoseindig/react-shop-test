import { Row, Col, Container } from "react-bootstrap";
import styles from "./CategoryGallery.module.scss";
import { Link } from "react-router-dom";
const CategoryGallery = () => {
  return (
    <div className={styles.category}>
      <Container>
        <Row>
          <Col md={3}>
            <Link
              to={{
                pathname: "/category-product/" + 1,
              }}
            >
              <img src="images/CategoryGallery/CategoryGallery1.jpg" alt="" />
            </Link>
          </Col>
          <Col md={9}>
            <Row>
              <Col md={7}>
                <Link
                  to={{
                    pathname: "/category-product/" + 2,
                  }}
                >
                  <img
                    src="images/CategoryGallery/CategoryGallery2.jpg"
                    alt=""
                  />
                </Link>
              </Col>
              <Col md={5}>
                <Link
                  to={{
                    pathname: "/category-product/" + 3,
                  }}
                >
                  <img
                    src="images/CategoryGallery/CategoryGallery3.jpg"
                    alt=""
                  />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Link
                  to={{
                    pathname: "/category-product/" + 4,
                  }}
                >
                  <img
                    src="images/CategoryGallery/CategoryGallery4.jpg"
                    alt=""
                  />
                </Link>
              </Col>
              <Col md={6}>
                <Link
                  to={{
                    pathname: "/category-product/" + 5,
                  }}
                >
                  <img
                    src="images/CategoryGallery/CategoryGallery5.jpg"
                    alt=""
                  />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryGallery;
