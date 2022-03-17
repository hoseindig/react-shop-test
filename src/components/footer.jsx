import { Card, Button, Container, CardGroup } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer-bottom">
      <p className="copyright-heading">
        Suspendisse in auctor augue. Cras fermentum est ac fermentum tempor.
        Etiam vel magna volutpat, posuere eros
      </p>
      <a href="#" className="payment-block">
        <img src="images/icons/payment.png" alt="" />
      </a>
      <div className="copyright-text">
        <p> Copyright © 2022</p>
        <a href="#" class="author">
        Hossein Shykhi (iran) +989304535469 (USA)  +1 (717) 638-8195
        </a>
        <p>
          All Right Reserved.
          {/* </br> */}
          Design By Hossein Shykhi hoseinx@gmail.com
        </p>
      </div>
    </Container>
  );
};

export default Footer;
