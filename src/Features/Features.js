import React, {Component} from 'react'
import Option from '../Option/Option.js';

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});


class Features extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <Option
            features={this.props.features}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
          />
        </fieldset>
      );
    });
    return (
      <>
        {features}
      </>
    )
  }
}

export default Features