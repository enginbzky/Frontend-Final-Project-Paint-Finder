import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

function Dashboard() {
  const user = useContext(UserContext);
  if (!user) {
    return null;
  }
  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h1 className="text-light h1">{user.name}</h1>
          <h1 className="lead text-white">{user.email}</h1>
          <h1 className="text-light h1">{user.role}</h1>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default Dashboard;
