import React, { Component } from "react";
import DefaultAside from "./DefaultAside";
import DefaultHeader from "./DefaultHeader";

import "./DefaultLayout.css";
import MainView from "./MainView";

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
          <MainView />
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
