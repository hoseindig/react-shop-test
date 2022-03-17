import styles from "./Section.module.scss";
import { Card, Button, Container, CardGroup } from "react-bootstrap";
import CardGroupBox from "./CardGroup";
const Section = () => {
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

    {
      id: 5,
      title: "Jpple",
      img: "product-10.jpg",
      text: "Revolutionize Your BOOK With ",
    },
    {
      id: 6,
      title: "Wpple",
      img: "product-3.jpg",
      text: "Revolutionize Your BOOK With ",
    },
    {
      id: 7,
      title: "Hpple 2",
      img: "product-5.jpg",
      text: "a Half Very Simple Things You To",
    },
    {
      id: 8,
      title: "Bpple 2",
      img: "product-8.jpg",
      text: "  BOOK: Do You Really Need It? This ",
    },
  ];
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <h1> arts & photography books</h1>
      </div>
      <Container>
        <CardGroupBox cards={cards} />
      </Container>
    </div>
  );
};

export default Section;
