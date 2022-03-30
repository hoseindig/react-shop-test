import { useContext, useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import styles from "../ProductDetails.module.scss";
import CarouselImage from "../../Carousel/CarouselImage";
import UserContext from "../../../store/userContext";
import Rate from "../../rate/rate";

const ProductInfo = ({ item }) => {
  const userCntx = useContext(UserContext);
  const { productList, categoryList } = userCntx;
  const category = categoryList.find((c) => c.id === Number(item.category));

  const moneySymbol = userCntx.siteSeting.priceUnitSelect.symbol;
  const [qty, setQty] = useState(1);
  return (
    <div>
      <Row className={styles["product-details"]}>
        <Col md={5}>
          <img src={"../images/products/" + item.image} alt="" />
          <CarouselImage images={item.images} />
        </Col>
        <Col md={7} className={styles["product-details-info"]}>
          <div className={styles["tag-block"]}>tag : {item.tag}</div>
          <div className={styles["product-title"]}>{item.title}</div>
          <ul className={styles["list-unstyled"]}>
            <li>
              Ex Tax:
              <span className={styles["list-value"]}>
                {" "}
                {moneySymbol}
                {item.exTax}
              </span>
            </li>
            <li>
              Brands:
              <span className={styles["list-value"]}> {item.brands}</span>
            </li>
            <li>
              Product Code:
              <span className={styles["list-value"]}>{item.productCode}</span>
            </li>
            <li>
              Reward Points:
              <span className={styles["list-value"]}>{item.rewardPoints}</span>
            </li>
            <li>
              Availability:
              <span className={styles["list-value"]}>
                {item.availability ? "In Stock" : "Out Stock"}
              </span>
              <li>
              Category:
              <span className={styles["list-value"]}>
                {item.category ? category.name : "-"}
              </span>
            </li>
            </li>
          </ul>
          <div className={styles["price-block"]}>
            <div className={styles["price-new"]}>
              {moneySymbol}
              {item.price}
            </div>
            <del className={styles["price-old"]}>
              {moneySymbol}
              {item.priceOld}
            </del>
          </div>
          <Rate rate={item.rate} text={"Rate"} />

          <div>
            <p>{item.text}</p>
          </div>
          <div className={styles["add-to-cart-row"]}>
            <div className={styles["count-input-block"]}>
              <span className={styles["widget-label"]}>Qty</span>
              <input
                type="number"
                className={styles["count-input-block-input"]}
                value={qty}
                onChange={({ target: input }) => {
                  setQty(input.value);
                }}
              ></input>
            </div>
            <div
              className={styles["add-cart-btn"]}
              onClick={() => userCntx.addToCartItems({ ...item, count: qty })}
            >
              <a href="#">
                <span className="plus-icon">+</span>Add to Cart
              </a>
            </div>
          </div>
          <div className="compare-wishlist-row mt-4">
            <a
              href="#"
              className={styles["add-link"]}
              onClick={() => userCntx.addToWishList(item)}
            >
              <i className="fas fa-heart"></i>Add to Wish List
            </a>
            <a
              href="#"
              className={styles["add-link"]}
              onClick={() => userCntx.addToCompareList(item)}
            >
              <i className="fas fa-random"></i>Add to Compare
            </a>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Col>
      </Row>
    </div>
  );
};

export default ProductInfo;
