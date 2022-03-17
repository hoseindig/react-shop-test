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
  const categorys = [
    { id: 1, name: "art" },
    { id: 2, name: "photography" },
  ];
  const cards = [
    {
      id: 1,
      title: "Epple",
      img: "product-4.jpg",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: false,
      newArrivals: true,
      featuredProducts: false,
      category: 1,
      isSpecialOffer: true,
      text: "  What You Can Learn From Bill Gates",
    },
    {
      id: 2,
      title: "Hpple",
      img: "product-5.jpg",
      text: "a Half Very Simple Things You To",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: false,
      newArrivals: true,
      featuredProducts: false,
      category: 1,
      isSpecialOffer: true,
    },
    {
      id: 3,
      title: "Bpple",
      img: "product-8.jpg",
      text: "  BOOK: Do You Really Need It? This ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: true,
      newArrivals: true,
      featuredProducts: false,
      category: 2,
      isSpecialOffer: true,
    },
    {
      id: 33,
      title: "zpple",
      img: "product-13.jpg",
      text: "BOOK: Do You Really Need It? This ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: true,
      newArrivals: true,
      featuredProducts: false,
      category: 2,
      isSpecialOffer: true,
    },
    {
      id: 4,
      title: "Lpple",
      img: "product-2.jpg",
      text: "Revolutionize Your BOOK With ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: true,
      newArrivals: false,
      featuredProducts: true,
      category: 3,
      isSpecialOffer: true,
    },
    {
      id: 5,
      title: "Jpple",
      img: "product-10.jpg",
      text: "Revolutionize Your BOOK With ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: false,
      newArrivals: true,
      featuredProducts: true,
      category: 1,
      isSpecialOffer: false,
    },
    {
      id: 6,
      title: "Wpple",
      img: "product-3.jpg",
      text: "Revolutionize Your BOOK With ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: false,
      newArrivals: true,
      featuredProducts: true,
      category: 1,
      isSpecialOffer: false,
    },
    {
      id: 7,
      title: "Hpple 2",
      img: "product-5.jpg",
      text: "a Half Very Simple Things You To",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: true,
      newArrivals: true,
      featuredProducts: false,
      category: 1,
      isSpecialOffer: false,
    },
    {
      id: 8,
      title: "Bpple 2",
      img: "product-8.jpg",
      text: "  BOOK: Do You Really Need It? This ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: true,
      newArrivals: true,
      featuredProducts: false,
      category: 5,
      isSpecialOffer: false,
    },
    {
      id: 10,
      title: "Wpple 2",
      img: "product-3.jpg",
      text: "Revolutionize Your BOOK With ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: true,
      newArrivals: true,
      featuredProducts: false,
      category: 5,
      isSpecialOffer: false,
    },
    {
      id: 11,
      title: "Hpple 3",
      img: "product-5.jpg",
      text: "a Half Very Simple Things You To",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: true,
      newArrivals: true,
      featuredProducts: false,
      category: 6,
      isSpecialOffer: false,
    },
    {
      id: 12,
      title: "Bpple 3",
      img: "product-8.jpg",
      text: "  BOOK: Do You Really Need It? This ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: false,
      newArrivals: true,
      featuredProducts: true,
      category: 6,
      isSpecialOffer: false,
    },
  ];
  return (
    <div className={styles["main-box"]}>
      <h1>Main Box</h1>
      <CarouselBox />
      <CategoryGallery />
      <Section
        title="arts & photography books"
        cards={cards.filter((i) => i.category === 1)}
      />
      <FeaturesBox />
      <PromoImage />
      <Container>
        <Row>
          <Col md={3}>
            <SpecialOffer cards={cards.filter((i) => i.isSpecialOffer)} />
          </Col>
          <Col md={9}>
            <ProductsInTab cards={cards} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainBox;
