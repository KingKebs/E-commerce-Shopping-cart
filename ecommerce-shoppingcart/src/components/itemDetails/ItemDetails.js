import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col } from "react-bootstrap";
import jordan from "../../images/J-11-concord.jpg";
export default class ItemDetails extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details{" "}
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <img
                className="m-2"
                width={100}
                height={100}
                src={jordan}
                alt="Concord 11"
              />
              <Media.Body>
                <p className="m-2">
                  CONCORD. In 1995, Michael Jordan stepped onto the hardwood for
                  playoff competition in the now iconic Air Jordan XI.
                </p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong>{`ZAR${this.props.price}`}</strong>
                    <br />
                    <strong className="price-strike">{`ZAR${this.props.price}`}</strong>
                  </Col>
                  <Col md={6}>
                    <strong>Qty: 1</strong>
                  </Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
