import { Card, Button, Container, CardGroup } from "react-bootstrap";
import styles from "../CardGroupBox.module.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../store/userContext";
const CardBox = ({ item, bigCard }) => {
  const userCntx = useContext(UserContext);
  const moneySymbol = userCntx.siteSeting.priceUnitSelect.symbol;

  return (
    <Card
      style={{ width: bigCard ? "100%" : "18rem" }}
      key={item.id}
      className={styles["product-card"]}
    >
      <Card.Body>
        <Link
          to={{
            pathname: "/product-details/"+item.id,
            query: "test",
            search: "test",
          }}
          params={{ test: "test" }}
        >
          <Card.Title className={styles["author"]}>{item.title}</Card.Title>
          <Card.Text>{item.text}</Card.Text>
        </Link>
      </Card.Body>
      <Card.Img
        variant="top"
        src={
          item.folder
            ? "images/" + item.folder + "/" + item.image
            : "images/products/" + item.image
        }
      />

      <i
        title={moneySymbol + item.price}
        className="fa fa-shopping-cart"
        aria-hidden="true"
        onClick={() => userCntx.addToCartItems(item)}
      ></i>
      <Card.Body>
        <Card.Text className={styles["price-block"]}>
          <span className={styles["price"]}>
            {moneySymbol}
            {item.price}
          </span>
          <del className={styles["price-old"]}>
            {moneySymbol}
            {item.priceOld}
          </del>
          <span className={styles["price-discount"]}>{item.priceDiscount}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardBox;
