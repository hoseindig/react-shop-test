import styles from "./mainBox.module.scss";
import CarouselBox from "../components/Carousel";
const MainBox = () => {
  return (
    <div className={styles["main-box"]}>
      <h1>Main Box</h1>
      <CarouselBox />
    </div>
  );
};

export default MainBox;
