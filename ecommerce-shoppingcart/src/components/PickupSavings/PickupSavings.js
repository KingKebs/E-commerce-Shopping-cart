import React, { Component, Container } from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

class PickupSavings extends Component {
  state = {};
  render() {
    <Tooltip id="tooltip>">
      <p>Picking up your order in store can save our on fees</p>
    </Tooltip>;
    return (
      <Row id="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={style.PickupSavings}>Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} md={6}>
          {`${$this.props.price}`}
          {price}
        </Col>
      </Row>
    );
  }
}

export default PickupSavings;
