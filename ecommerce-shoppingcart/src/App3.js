import React, { Component, useState } from "react";
import { Container } from "react-bootstrap";
import Subtotal from "./components/Subtotal/Subtotal";

import "./App.css";

function App() {
  // using constructor method to keep track of the state
  const [total, setTotal] = useState({ total: 0, price: 0 });

  return (
    <div className="container">
      <Container className="purchase-card">
        <Subtotal price={total.price} />
      </Container>
    </div>
  );
}

export default App;
