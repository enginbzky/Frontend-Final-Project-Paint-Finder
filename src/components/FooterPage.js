import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterImage from "../assets/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        height: "80px",
        backgroundColor: "white",
        position: "fixed",
        bottom: "40px",
        width: "60%",
        marginRight: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row>
          <Col>
            <img src={FooterImage} alt="sailing" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
