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
    };
  }

  moveCar = (car, side) => {
    this.setState((prevState) => ({
      ...prevState,
      cars: { ...prevState.cars, [car]: side },
    }))
  }

  render() {
    const { children } = this.props;
    const state = { ...this.state, moveCar: this.moveCar }
    return (
      <MyContext.Provider value={state}>
        {children}
      </MyContext.Provider>
    );
  }
};

export default Provider;
