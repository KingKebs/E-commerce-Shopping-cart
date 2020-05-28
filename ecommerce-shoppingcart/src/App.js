import React, { Component } from "react";
import Subtotal from "./components/Subtotal/Subtotal";
import { Container } from "react-bootstrap";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxFees from "./components/TaxFees/TaxFees";
import "./App.css";
import EstimatedTotal from "./components/estimatedTotal/EstimatedTotal";
import ItemDetails from "./components/itemDetails/ItemDetails";
import PromoCode from "./components/PromoCode/PromoCode";

// Import redux provider
import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSavings: -3.67,
      taxes: 0,
      estimatedTotal: 0,
      price: 0,
    };
  }
  // life cycle method
  componentDidMount = () => {
    this.setState(
      { taxes: (this.state.total + this.state.pickupSavings) * 0.0875 }, //100 + -3.67 = ZAR96//
      function () {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes,
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal * 0.9 },
        function () {
          this.setState({
            disablePromoButton: true,
          });
        }
      );
    }
  };

  render() {
    return (
      <Container className="container float-right ">
        <h1 className="text-center">Order Summary</h1>
        <Subtotal price={this.state.total.toFixed(2)} />
        <PickupSavings price={this.state.PickupSavings} />
        <TaxFees taxes={this.state.taxes.toFixed(2)} />
        <hr />
        <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
        <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
        <hr />
        <PromoCode
          giveDiscount={() => this.giveDiscountHandler()}
          isDisabled={this.state.disablePromoButton}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  promoCode: state.promoCode.value,
});

export default connect(mapStateToProps, {
  handleChange,
})(App);
