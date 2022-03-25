import React, { useContext } from "react";
import { Card, Button, Container, CardGroup, Col, Row } from "react-bootstrap";
import UserContext from "../store/userContext";
import CardBoxInTab from "./Card/Cardbox";
const CardGroupBox = ({ cards }) => {
  const userCntx = useContext(UserContext);
  const moneySymbol = userCntx.siteSeting.priceUnitSelect.symbol;

  return (
    <CardGroup>
      <Row>
        {cards.map((item) => {
          return (
            <Col md={6} key={item.id}>
              <CardBoxInTab item={item} moneySymbol={moneySymbol} />
            </Col>
          );
        })}
      </Row>
    </CardGroup>
  );
};

export default CardGroupBox;
