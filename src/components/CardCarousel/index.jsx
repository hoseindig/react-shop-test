import { Card, Button, Container, CardGroup } from "react-bootstrap";
import styles from "../CardGroupBox.module.scss";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../store/userContext";
import Rate from "../rate/rate";
const CardBox = ({ item, bigCard }) => {
  const userCntx = useContext(UserContext);
  const moneySymbol = userCntx.siteSeting.priceUnitSelect.symbol;
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <Card
      style={{ width: bigCard ? "100%" : "100%" }}
      key={item.id}
      className={styles["product-card"]}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <Card.Body>
        {item.id}
        <Link
          to={{
            pathname: "/product-details/" + item.id,
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
            : "/images/products/" + item.image
        }
      />
      <div>
        {mouseOver && (
          <i
            className="fas fa-heart"
            style={{ fontSize: 20, margin: "0 10px" }}
            title="Add to Wish List"
            onClick={() => userCntx.addToWishList(item)}
          ></i>
        )}
        <i
          title={moneySymbol + item.price}
          className="fa fa-shopping-cart"
          aria-hidden="true"
          onClick={() => userCntx.addToCartItems(item)}
        ></i>
        {mouseOver && (
          <i
            title="Add to Compare"
            className="fas fa-random"
            style={{ fontSize: 20, margin: "0 10px" }}
            onClick={() => userCntx.addToCompareList(item)}
          ></i>
        )}
      </div>

      <Card.Body>
        <Rate rate={item.rate} />
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
