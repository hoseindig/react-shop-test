import styles from "./SpecialOffer.module.scss";
import CardGroupBox from "./CardGroupCarousel";
const SpecialOffer = ({cards}) => {
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
