import { useContext, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";

import Box from "@mui/material/Box";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import UserContext from "../../store/userContext";

import styles from "./ProductDetails.module.scss";

import ReveiwsBox from "../Reveiw/reveiws";
import { getReviewByProductId, saveReview } from "../../services/reviewService";

import NewReview from "../Reveiw/NewReview";
import ProductInfo from "./ProductInfo/ProductInfo";
import Section from "../section";
// https://mui.com/components/rating/
const ProductDetails = (props) => {
  const userCntx = useContext(UserContext);
  const { productList } = userCntx;
  const moneySymbol = userCntx.siteSeting.priceUnitSelect.symbol;

  const [value, setValue] = useState("1");
  const [productReviews, setProductReview] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { id } = useParams();
  let passItem = null;
  passItem = productList.find((i) => i.id === Number(id));

  const getProductReview = () => {
    if (passItem) {
      setProductReview(getReviewByProductId(passItem.id));
    }
  };
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
          <ProductInfo item={passItem} />
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
                    <NewReview getReview={getProductReview} productId={passItem.id}/>
                  </TabPanel>
                </TabContext>
              </Box>
            </Col>
            <Col md={12}></Col>
          </Row>
          <Section
            title="RELATED PRODUCTS"
            cards={userCntx.productList.filter(
              (i) => i.category === passItem.category
            )}
            centerMode={true}
          />
        </div>
      )}
    </Container>
  );
};

export default ProductDetails;