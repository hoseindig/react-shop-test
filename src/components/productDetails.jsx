import { useContext, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import UserContext from "../store/userContext";

import styles from "./ProductDetails.module.scss";

// https://mui.com/components/rating/
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import CarouselImage from "./Carousel/CarouselImage";
const ProductDetails = (props) => {
  const userCntx = useContext(UserContext);
  const { productList } = userCntx;
  const moneySymbol = userCntx.siteSeting.priceUnitSelect.symbol;

  const [value, setValue] = useState(2);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  let passItem = null;
  if (id) {
    passItem = productList.find((i) => i.id === Number(id));
  }
  console.log("ProductDetails", passItem);
  return (
    <div>
      {passItem && (
        <Row className={styles["product-details"]}>
          <Col md={5}>
            <img src={"../images/products/" + passItem.image} alt="" />
            <CarouselImage images={passItem.images} />
          </Col>
          <Col md={7} className={styles["product-details-info"]}>
            <div className={styles["tag-block"]}>tag : {passItem.tag}</div>
            <div className={styles["product-title"]}>{passItem.title}</div>
            <ul className={styles["list-unstyled"]}>
              <li>
                Ex Tax:
                <span className={styles["list-value"]}>
                  {" "}
                  {moneySymbol}
                  {passItem.exTax}
                </span>
              </li>
              <li>
                Brands:
                <span className={styles["list-value"]}> {passItem.brands}</span>
              </li>
              <li>
                Product Code:
                <span className={styles["list-value"]}>
                  {passItem.productCode}
                </span>
              </li>
              <li>
                Reward Points:
                <span className={styles["list-value"]}>
                  {passItem.rewardPoints}
                </span>
              </li>
              <li>
                Availability:
                <span className={styles["list-value"]}>
                  {passItem.availability ? "In Stock" : "Out Stock"}
                </span>
              </li>
            </ul>
            <div className={styles["price-block"]}>
              <div className={styles["price-new"]}>
                {moneySymbol}
                {passItem.price}
              </div>
              <del className={styles["price-old"]}>
                {moneySymbol}
                {passItem.priceOld}
              </del>
            </div>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography component="legend">Rate</Typography>
              <Rating readOnly name="simple-controlled" value={passItem.rate} />
            </Box>
            <div>
              <p>{passItem.text}</p>
            </div>
            <div className={styles["add-to-cart-row"]}>
              <div className={styles["count-input-block"]}>
                <span className={styles["widget-label"]}>Qty</span>
                <input
                  type="number"
                  className={styles["count-input-block-input"]}
                  value="1"
                ></input>
              </div>
              <div className={styles["add-cart-btn"]}>
                <a href="#">
                  <span className="plus-icon">+</span>Add to Cart
                </a>
              </div>
            </div>
            <div className="compare-wishlist-row mt-4">
              <a
                href="#"
                className={styles["add-link"]}
                onClick={() => userCntx.addToWishList(passItem)}
              >
                <i className="fas fa-heart"></i>Add to Wish List
              </a>
              <a
                href="#"
                className={styles["add-link"]}
                onClick={() => userCntx.addToCompareList(passItem)}
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
      )}
    </div>
  );
};

export default ProductDetails;
