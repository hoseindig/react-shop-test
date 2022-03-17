import styles from "./mainBox.module.scss";
import CarouselBox from "../components/Carousel";
import CategoryGallery from "./categoryGallery";
import Section from "./section";
import FeaturesBox from "./featuresBox";
import PromoImage from "./PromoImage";
import { Row, Col, Container } from "react-bootstrap";
import SpecialOffer from "./SpecialOffer";
import ProductsInTab from "./ProductsInTab";
const MainBox = () => {
  return (
    <div className={styles["main-box"]}>
      <h1>Main Box</h1>
      <CarouselBox />
      <CategoryGallery />
      <Section />
      <FeaturesBox />
      <PromoImage />
      <Container>
        <Row>
          <Col md={3}>
            <SpecialOffer />
          </Col>
          <Col md={9}>
            <ProductsInTab />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainBox;
