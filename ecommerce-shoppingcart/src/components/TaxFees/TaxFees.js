import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class TaxFees extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Est. taxes & Shipping (SARS)</Col>
        <Col md={6}>
          <strong> {`ZAR${this.props.taxes}`}</strong>
        </Col>
      </Row>
    );
  }
}
