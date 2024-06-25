import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  name = "Nishad";
  render() {
    return <div>Hi this is my class-based component {this.name}</div>;
  }
}
