import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sailing from "../assets/sailing-1.png";

const Footer = () => {
  return (
    <footer
      style={{
        height: "100px",
        backgroundColor: "white",
        position: "fixed",
        bottom: "0",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row>
          <Col>
            <img
              src={Sailing}
              alt="sailing"
              style={{
                height: 100,
                width: 90,
              }}
            />
          </Col>
          <Col>
            <img
              src={Sailing}
              alt="sailing"
              style={{
                height: 100,
                width: 90,
              }}
            />
          </Col>
          <Col>
            <img
              src={Sailing}
              alt="sailing"
              style={{
                height: 100,
                width: 90,
              }}
            />
          </Col>
          <Col>
            <img
              src={Sailing}
              alt="sailing"
              style={{
                height: 100,
                width: 90,
              }}
            />
          </Col>
          <Col className="d-none d-md-block">
            <img
              src={Sailing}
              alt="sailing"
              style={{
                height: 100,
                width: 90,
              }}
            />
          </Col>
          <Col className="d-none d-md-block">
            <img
              src={Sailing}
              alt="sailing"
              style={{
                height: 100,
                width: 90,
              }}
            />
          </Col>
          <Col>
            <img
              src={Sailing}
              alt="sailing"
              style={{
                height: 100,
                width: 90,
              }}
              className="d-none d-sm-block"
            />
          </Col>
          <Col>
            <img
              src={Sailing}
              alt="sailing"
              style={{
                height: 100,
                width: 90,
              }}
              className="d-none d-sm-block"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
