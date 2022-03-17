import React, { useContext } from 'react';
import { Card, Button, Container, CardGroup, Col, Row } from "react-bootstrap";
import UserContext from "../store/userContext";
import styles from "./ProductsInTowColTab.module.scss";

const CardGroupBox = ({cards}) => {
    const userCntx = useContext(UserContext);
    const moneySymbol = userCntx.siteSeting.priceUnitSelect.symbol;

    return ( <CardGroup>
        <Row>
          {cards.map((item) => {
            return (
              <Col md={6} key={item.id}>
                <Card key={item.id} className={styles["product-card"]}>
                  <Row>
                    <Col md={6}>
                      <img alt="" src={"images/products/" + item.img} />
                    </Col>
                    <Col md={6}>
                      <Card.Body>
                        <Card.Title className={styles["author"]}>
                          {item.title}
                          {/* <p>mostViewedProducts {item.mostViewedProducts.toString()}</p> */}
                          {/* <p>newArrivals {item.newArrivals.toString()}</p> */}
                          {/* <p>featuredProducts {item.featuredProducts.toString()}</p> */}
                          <p> {item.category}</p>
                        </Card.Title>
                        <Card.Text className={styles["card-text"]}>
                          <h4>{item.text}</h4>
                        </Card.Text>
                        <Card.Text className={styles["price-block"]}>
                          <span className={styles["price"]}>
                            {moneySymbol}
                            {item.price}
                          </span>
                          <del className={styles["price-old"]}>
                            {moneySymbol}
                            {item.priceOld}
                          </del>
                          <span className={styles["price-discount"]}>
                            {item.priceDiscount}
                          </span>
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      </CardGroup> );
}
 
export default CardGroupBox;