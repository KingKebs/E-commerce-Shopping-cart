import React, { Component } from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

var styles = {
  PickupSavings: {
    textDocoration: "underline",
  },
  totalSavings: {
    color: "red",
    fontWeight: 800,
  },
};

export default class PickupSavings extends Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>Picking up your order in store can save our on fees</p>
      </Tooltip>
    );

    return (
      <Row id="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={styles.PickupSavings}>Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} md={6}>
          {`ZAR${this.props.price}`}
        </Col>
      </Row>
    );
  }
}
