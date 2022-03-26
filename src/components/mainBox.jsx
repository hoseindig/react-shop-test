import { Row, Col, Container } from "react-bootstrap";
import styles from "./mainBox.module.scss";
import CarouselBox from "../components/Carousel";
import CategoryGallery from "./categoryGallery";
import Section from "./section";
import FeaturesBox from "./featuresBox";
import PromoImage from "./PromoImage";
import ProductsInTabAndSpecialOffer from "./ProductsInTabAndSpecialOffer";

import { useContext, useEffect, useState } from "react";
import UserContext from "../store/userContext";
import { myData } from "../data";

const MainBox = () => {
  const userCntx = useContext(UserContext);
  const [productList,setProductList]=useState([])
  const categorys = [
    { id: 1, name: "art" },
    { id: 2, name: "photography" },
    { id: 3, name: "biographies " },
  ];
  const clients = [
    {
      id: 1,
      title: "Epple",
      image: "client-1.png",
      folder: "client",
      count: 1,
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      text: "  What You Can Learn From Bill Gates",
    },
    {
      id: 2,
      title: "Epple",
      image: "client-2.png",
      folder: "client",
      count: 1,
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      text: "  What You Can Learn From Bill Gates",
    },
    {
      id: 3,
      title: "Epple",
      image: "client-3.png",
      folder: "client",
      count: 1,
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      text: "  What You Can Learn From Bill Gates",
    },
    {
      id: 4,
      title: "Epple",
      image: "client-4.png",
      folder: "client",
      count: 1,
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      text: "  What You Can Learn From Bill Gates",
    },
    {
      id: 5,
      title: "Epple",
      image: "client-5.png",
      folder: "client",
      count: 1,
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      text: "  What You Can Learn From Bill Gates",
    },
  ];
  const cards = [
    {
      id: 1,
      title: "Epple",
      image: "product-4.jpg",
      count: 1,
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
      image: "product-5.jpg",
      text: "a Half Very Simple Things You To",
      count: 1,
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
      image: "product-8.jpg",
      text: "  BOOK: Do You Really Need It? This ",
      count: 1,
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
      image: "product-13.jpg",
      text: "BOOK: Do You Really Need It? This ",
      count: 1,
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
      image: "product-2.jpg",
      text: "Revolutionize Your BOOK With ",
      count: 1,
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
      image: "product-10.jpg",
      text: "Revolutionize Your BOOK With ",
      count: 1,
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: false,
      newArrivals: true,
      featuredProducts: true,
      category: 3,
      isSpecialOffer: false,
    },
    {
      id: 6,
      title: "Wpple",
      image: "product-3.jpg",
      text: "Revolutionize Your BOOK With ",
      count: 1,
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: false,
      newArrivals: true,
      featuredProducts: true,
      category: 3,
      isSpecialOffer: false,
    },
    {
      id: 7,
      title: "Hpple 2",
      image: "product-5.jpg",
      text: "a Half Very Simple Things You To",
      count: 1,
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
      image: "product-8.jpg",
      text: "  BOOK: Do You Really Need It? This ",
      count: 1,
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
      id: 10,
      title: "Wpple 2",
      image: "product-3.jpg",
      text: "Revolutionize Your BOOK With ",
      count: 1,
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
      id: 11,
      title: "Hpple 3",
      image: "product-5.jpg",
      text: "a Half Very Simple Things You To",
      count: 1,
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
      id: 12,
      title: "Bpple 3",
      image: "product-8.jpg",
      text: "  BOOK: Do You Really Need It? This ",
      count: 1,
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
      id: 13,
      title: "Hpple 4",
      image: "product-5.jpg",
      text: "a Half Very Simple Things You To",
      count: 1,
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: true,
      newArrivals: true,
      featuredProducts: false,
      category: 3,
      isSpecialOffer: false,
    },
    {
      id: 14,
      title: "Bpple 4",
      image: "product-8.jpg",
      text: "  BOOK: Do You Really Need It? This ",
      count: 1,
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      mostViewedProducts: false,
      newArrivals: true,
      featuredProducts: true,
      category: 3,
      isSpecialOffer: false,
    },
  ];
  const carousels = [
    {
      image: "2.jpg",
      alt: "First slide",
      interval: 10000,
      Caption: (
        <div>
          <h3>2 slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      ),
    },
    {
      image: "7.jpg",
      alt: "First slide",
      interval: 10000,
      Caption: (
        <div>
          <h3>7 slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      ),
    },
  ];
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

  useEffect(() => {
    console.log("MainBox useEffect", myData);
    userCntx.setProductList(myData.productList);

    userCntx.setCategoryList(myData.categoryList);
    userCntx.setClientList(myData.clientList);
    userCntx.setCarouselList(myData.carouselList);
    userCntx.setFeatureList(myData.featureList);

    setProductList(userCntx.productList)

    console.log("MainBox useEffect categoryList", userCntx.categoryList);
    console.log("MainBox useEffect carouselList", userCntx.carouselList);
    console.log("MainBox useEffect featureList", userCntx.featureList);
    console.log("MainBox useEffect productList", userCntx.productList);
    console.log("MainBox useEffect clientList", userCntx.clientList);
  }, []);
  return (
    <Row className={styles["main-box"]}>
      <CarouselBox carousels={userCntx.carouselList} />
      <Container>
        <CategoryGallery />
        <Section
          title="arts & photography books"
          cards={userCntx.productList.filter((i) => i.category === 1)}
          centerMode={true}
        />
        <Section
          title="BIOGRAPHIES BOOKS"
          cards={userCntx.productList.filter((i) => i.category === 3)}
          centerMode={true}
        />

        <FeaturesBox features={userCntx.featureList} />
        <PromoImage />
        <ProductsInTabAndSpecialOffer cards={userCntx.productList} />

        <Section
          title="CLIENT TESTIMONIALS"
          cards={userCntx.clientList}
          bigCard={true}
        />
      </Container>
    </Row>
  );
};

export default MainBox;
