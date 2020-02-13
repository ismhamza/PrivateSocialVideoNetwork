import React, { Component } from "react";
import { MenuIcon } from "../../assets/icons";

import "./DefaultLayout.css";

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="psvn-header-wrapper">
        <div className="psvn-header-left-section">
          <div className="psvn-header-menu-icon">
            <a src="#home">
            <img src={MenuIcon} alt="menu" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultHeader;
