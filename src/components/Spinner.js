import React, { Component } from "react";
import loading from "./loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}
