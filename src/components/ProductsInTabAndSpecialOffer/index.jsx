import { Row, Col, Container } from "react-bootstrap";
import SpecialOffer from "../SpecialOffer";
import ProductsInTab from "../ProductsInTab";
import styles from "./SpecialOffer.module.scss";
const ProductsInTabAndSpecialOffer = ({ cards }) => {
  return (
    <div className={[styles.box]}>
      <Container>
        <Row>
          <Col md={3}>
            <SpecialOffer cards={cards.filter((i) => i.isSpecialOffer)} />
          </Col>
          <Col md={9}>
            <ProductsInTab cards={cards} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductsInTabAndSpecialOffer;
