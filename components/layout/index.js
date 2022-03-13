import React, { Component } from "react";
import Header from "../header";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <main>
        <Header />
        {children}
      </main>
    );
  }
}
