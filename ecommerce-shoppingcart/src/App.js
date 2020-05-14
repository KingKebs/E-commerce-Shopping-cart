import React, { Component } from "react";
import Subtotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import "./App.css";

export default class app2 extends Component {
  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={total.price} />
        </Container>
      </div>
    );
  }
}
