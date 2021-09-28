import React, { Component } from "react";
import Summary from "../Summary/Summary.js";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class Cart extends Component {
  render() {
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost, 0
    );
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
          <Summary selected={this.props.selected}/>
        <div className="Summary__total">
          <div className="Summary__total__label">
            Total
          </div>
          <div className="Summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;