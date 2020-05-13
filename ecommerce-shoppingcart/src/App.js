import React from "react";
import { Container } from "react-bootstrap";
import Subtotal from "./components/Subtotal/Subtotal";
import "./App.css";

// using constructor method to keep track of the state

function App() {
  return (
    <div className="container">
      <Container className="purchase-card">
        <Subtotal price={this.state.total.toFixed(2)} />
      </Container>
    </div>
  );
}

export default App;
