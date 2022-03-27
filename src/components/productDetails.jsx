import { useContext, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";

import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import CarouselImage from "./Carousel/CarouselImage";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import UserContext from "../store/userContext";

import styles from "./ProductDetails.module.scss";

import Rate from "./rate/rate";
import ReveiwsBox from "./Reveiw/reveiws";
import { getReviewByProductId } from "../services/reviewService";
// https://mui.com/components/rating/
const ProductDetails = (props) => {
  const userCntx = useContext(UserContext);
  const { productList } = userCntx;
  const moneySymbol = userCntx.siteSeting.priceUnitSelect.symbol;

  const [value, setValue] = useState("1");
  const [userRate, setUserRate] = useState(5);
  const [productReviews, setProductReview] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { id } = useParams();
  let passItem = null;
  passItem = productList.find((i) => i.id === Number(id));
  useEffect(() => {
    if (id) {
      if (passItem) setProductReview(getReviewByProductId(passItem.id));
    }
  }, []);
  console.log("ProductDetails", passItem);
  return (
    <Container>
      {passItem && (
        <div>
          {/* {passItem.id} */}
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
                  <span className={styles["list-value"]}>
                    {" "}
                    {passItem.brands}
                  </span>
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
              <Rate rate={passItem.rate} text={"Rate"} />

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
          <Row>
            <Col md={12}>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      textColor="secondary"
                      indicatorColor="secondary"
                      centered
                    >
                      <Tab label="DESCRIPTION" value="1" />
                      <Tab label="REVIEWS" value="2" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <div className={styles["review-article"]}>
                      <p> {passItem.description}</p>
                    </div>
                  </TabPanel>
                  <TabPanel value="2">
                    <ReveiwsBox reviews={productReviews} item={passItem} />
                  </TabPanel>
                </TabContext>
              </Box>
            </Col>
            <Col md={12}></Col>
          </Row>
          <div className={styles["add-new-review-header"]}>
            <Row className="m-4">
              <Col md={12}>
                <h4>ADD A REVIEW</h4>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Typography component="legend">Your Rating</Typography>
                  <Rating
                    name="simple-controlled"
                    value={userRate}
                    onChange={(event, newValue) => {
                      setUserRate(newValue);
                    }}
                  />
                </Box>
              </Col>
            </Row>
            <Row>
              <Col className="m-4">
                {/* <TextField
                required
                id="outlined-required"
                label="Comment"
                defaultValue=""
                fullWidth
              /> */}
                <span>Comment</span>
                <TextareaAutosize
                  style={{
                    width: "100%",
                    height: 150,
                  }}
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder=""
                  defaultValue=""
                />
              </Col>
            </Row>
            <Row>
              <Col className="m-4">
                <TextField
                  required
                  id="outlined-required"
                  label="Name "
                  defaultValue=""
                  fullWidth
                />
              </Col>
              <Col className="m-4">
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  defaultValue=""
                  fullWidth
                />
              </Col>
              <Col className="m-4">
                <TextField
                  fullWidth
                  id="outlined-required"
                  label="Website"
                  defaultValue=""
                />
              </Col>
            </Row>
            <Row className="m-2">
              <Col>
                <Button
                  variant="dark"
                  className="p-3"
                  style={{ width: 200, "text-transform": "uppercase" }}
                >
                  Post Comment
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ProductDetails;
