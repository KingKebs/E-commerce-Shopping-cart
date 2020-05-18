import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class TaxFees extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Est. taxes & Shipping (Based on 98078)</Col>
        <Col md={6}>{`ZAR${this.props.taxes}`}</Col>
      </Row>
    );
  }
}
