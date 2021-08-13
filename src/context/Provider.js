import React, { Component } from "react";
import MyContext from "./MyContext";

class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
        moveCar: this.moveCar,
      },
      signal: {
        color: 'red',
        changeSignal: this.changeSignal,
      },
    };
  }

  moveCar = (car, side) => {
    this.setState((prevState) => ({
      ...prevState,
      cars: { ...prevState.cars, [car]: side },
    }))
  }

  changeSignal = (color) => {
    this.setState((prevState) => ({
      ...prevState,
      signal: { ...prevState.signal, color, }
    }))
  }

  render() {
    const { children } = this.props;
    const state = { ...this.state }
    return (
      <MyContext.Provider value={state}>
        {children}
      </MyContext.Provider>
    );
  }
};

export default Provider;
