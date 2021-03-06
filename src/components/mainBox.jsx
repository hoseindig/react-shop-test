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
import BrandCarousel from "./Carousel/BrandCarousel";
const MainBox = () => {
  const userCntx = useContext(UserContext);
  const [isVisible, setIsVisible] = useState(false);
  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  //////////////////////////////////////////
  useEffect(() => {
    console.log("MainBox useEffect", myData);
    userCntx.setUserData({
      //fake login
      userName: "hosseinx",
      userFullName: "hossein sheiykhi",
      userId: 13439,
      userImage: "hoseinx.gif",
    });

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
          slide={true}
        />
        <Section
          title="BIOGRAPHIES BOOKS"
          cards={userCntx.productList.filter((i) => i.category === 3)}
          centerMode={true}
          slide={true}
        />

        <FeaturesBox features={userCntx.featureList} />
        <PromoImage />
      </Container>
      <ProductsInTabAndSpecialOffer cards={userCntx.productList} />
      <Container>
        <Section
          title="CLIENT TESTIMONIALS"
          cards={userCntx.clientList}
          bigCard={true}
          slide={false}
        />
        <BrandCarousel />
      </Container>
      {isVisible && (
        <div className={styles["scrollUp"]} onClick={scrollToTop}>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      )}
    </Row>
  );
};

export default MainBox;
