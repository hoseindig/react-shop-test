import styles from "./SpecialOffer.module.scss";
import CardGroupBox from "./CardGroup";
const SpecialOffer = () => {
  const cards = [
    {
      id: 1,
      title: "Epple",
      img: "product-4.jpg",
      text: "  What You Can Learn From Bill Gates",
    },
    {
      id: 2,
      title: "Hpple",
      img: "product-5.jpg",
      text: "a Half Very Simple Things You To",
    },
    {
      id: 3,
      title: "Bpple",
      img: "product-8.jpg",
      text: "  BOOK: Do You Really Need It? This ",
    },
    {
      id: 3,
      title: "zpple",
      img: "product-13.jpg",
      text: "BOOK: Do You Really Need It? This ",
    },
    {
      id: 4,
      title: "Lpple",
      img: "product-2.jpg",
      text: "Revolutionize Your BOOK With ",
    },
  ];
  const cardsResponsiveConfig = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h3 className={styles["home-sidebar-title"]}>Special offer</h3>
      <CardGroupBox cards={cards} responsiveConfig={cardsResponsiveConfig} />
    </div>
  );
};

export default SpecialOffer;
