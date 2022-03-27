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

  useEffect(() => {
    console.log("MainBox useEffect", myData);
    userCntx.setProductList(myData.productList);

    userCntx.setCategoryList(myData.categoryList);
    userCntx.setClientList(myData.clientList);
    userCntx.setCarouselList(myData.carouselList);
    userCntx.setFeatureList(myData.featureList);


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
