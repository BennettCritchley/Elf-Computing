import React, { Component } from "react";
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import "./App.css";
import Header from "./Header/Header.js";
import CustomizeLaptop from "./Customize_Laptop/Customize_Laptop.js";
import Cart from "./Cart/Cart.js";


class App extends Component {
  state = {
    selected: {
      Processor: {
        name: 'Intel Core I9 Max',
        cost: 700
      },
      'Operating System': {
        name: 'Windows 10 - 32Bit',
        cost: 100.00
      },
      'Video Card': {
        name: 'Nvidia Ge-Force RTX 2080TI.',
        cost: 1450.00
      },
      Display: {
        name: 'MSI Optix 27" 120Hz 1080p Monitor',
        cost: 300
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <CustomizeLaptop
            features={this.props.features}
            selected={this.state.selected}
            updateFeature={this.updateFeature}
          />
          <Cart selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;