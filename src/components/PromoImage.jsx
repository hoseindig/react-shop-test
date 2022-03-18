import { Row, Col, Container } from "react-bootstrap";

const PromoImage = () => {
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col md={6} xs={12}>
          <img src="images/PromoImage/promo-banner-with-text.jpg" alt="" style={{width: "100%"}} />
        </Col> 
        <Col md={6} xs={12}>
          <img src="images/PromoImage/promo-banner-with-text-2.jpg" alt=""  style={{width: "100%"}}/>
        </Col>
      </Row>
    </Container>
  );
};

export default PromoImage;
