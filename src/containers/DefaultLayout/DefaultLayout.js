import React, { Component } from "react";
import DefaultAside from "./DefaultAside";
import DefaultHeader from "./DefaultHeader";

import "./DefaultLayout.css";
import MainView from "./MainView";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconSideBar: false
    };
  }
  toggleSideBar = () => {
    this.setState({ iconSideBar: !this.state.iconSideBar });
  };
  render() {
    let { iconSideBar } = this.state;
    return (
      <div className={`app-wrapper ${iconSideBar === true ? "icon-nav" : ""}`}>
        <DefaultAside />
        <div className="psvn-main-view">
          <DefaultHeader onClickMenuIcon={this.toggleSideBar} />
          <MainView />
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
