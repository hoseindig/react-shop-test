import { Row, Col, Container } from "react-bootstrap";
import SpecialOffer from "../SpecialOffer";
import ProductsInTab from "../ProductsInTab";
const ProductsInTabAndSpecialOffer = ({ cards }) => {
  return (
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
  );
};

export default ProductsInTabAndSpecialOffer;
