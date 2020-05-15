import React, { Component, Container } from "react";
import Subtotal from "./components/Subtotal/Subtotal";
// import PickupSavings from "./components/PickupSavings/PickupSavings";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      price: "",
    };
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Price Cart</h1>
        <Subtotal price={this.state.total.toFixed(2)} />
      </div>
    );
  }
}
