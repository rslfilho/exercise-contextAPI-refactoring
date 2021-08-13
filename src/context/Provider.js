import React, { Component } from "react";
import MyContext from "./MyContext";

class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
