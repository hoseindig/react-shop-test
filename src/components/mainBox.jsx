import styles from "./mainBox.module.scss";
import CarouselBox from "../components/Carousel";
import CategoryGallery from "./categoryGallery";
import Section from "./section";
import FeaturesBox from "./featuresBox";
const MainBox = () => {
  return (
    <div className={styles["main-box"]}>
      <h1>Main Box</h1>
      <CarouselBox />
      <CategoryGallery />
      <Section />
      <FeaturesBox />

    </div>
  );
};

export default MainBox;
