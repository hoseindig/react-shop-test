import styles from "./mainBox.module.scss";
import CarouselBox from "../components/Carousel";
import CategoryGallery from "./categoryGallery";
const MainBox = () => {
  return (
    <div className={styles["main-box"]}>
      <h1>Main Box</h1>
      <CarouselBox />
      <CategoryGallery />

    </div>
  );
};

export default MainBox;
