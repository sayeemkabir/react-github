import React, { Component } from "react";
import App from "../App";
import ErrMsg from "./ErrMsg";

export default class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      return <ErrMsg />;
    } else {
      this.props.SearchUsers(this.state.text);
    }
  };

  render() {
    return (
      <div>
        <div className="flex justify-center w-[70%] h-8 align-middle bg-orange-300 m-auto">
          <form onSubmit={this.onSubmit} className="flex">
            <input
              type="text"
              onChange={this.onChange}
              className="h-7 mt-[2px] w-40%"
              placeholder="Enter Name"
            />
            <input
              type="submit"
              value="Search"
              className="h-7 w-[40%] mt-[2px] bg-black text-white hover:bg-white hover:text-black duration-500"
            />
          </form>
        </div>
      </div>
    );
  }
}
