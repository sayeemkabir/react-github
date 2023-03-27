import React, { Component } from "react";

export default class ErrMsg extends Component {
  render() {
    return (
      <div className="flex justify-center align-middle">
        <p className="font-bold text-center text-red-700 text-xl">
          Please enter a value
        </p>
      </div>
    );
  }
}
