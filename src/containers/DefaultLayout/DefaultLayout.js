import React, { Component } from "react";
import DefaultAside from "./DefaultAside";
import DefaultHeader from "./DefaultHeader";

import "./DefaultLayout.css";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-wrapper">
        <DefaultAside />
        <div className="psvn-main-view">
          <DefaultHeader />
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
