import React from "react";
import { Row, Col } from "react-bootstrap";

function Subtotal() {
  return (
    <Row className="show-grid">
      <Col md={6}>Subtotal</Col>
      <Col md={6}>{this.price} </Col>
    </Row>
  );
}

export default Subtotal;
