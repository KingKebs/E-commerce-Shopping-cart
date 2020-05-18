import React, { Component } from "react";
import Subtotal from "./components/Subtotal/Subtotal";
import { Container } from "react-bootstrap";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxFees from "./components/TaxFees/TaxFees";
import "./App.css";
import EstimatedTotal from "./components/estimatedTotal/EstimatedTotal";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSavings: -3.67,
      taxes: 56,
      estimatedTotal: 0,
    };
  }
  render() {
    return (
      <Container className="container">
        <h1 className="text-center">Price Cart</h1>
        <Subtotal price={this.state.total.toFixed(2)} />
        <PickupSavings price={this.state.PickupSavings} />
        <hr />
        <TaxFees taxes={this.state.taxes.toFixed(2)} />
        <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
      </Container>
    );
  }
}
