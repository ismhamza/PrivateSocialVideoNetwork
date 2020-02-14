import React, { Component } from "react";
import { MenuIcon } from "../../assets/icons";

import "./DefaultLayout.css";
import SearchBar from "../../components/SearchBar/SearchBar";

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="psvn-header-wrapper">
        <div className="d-flex align-items-center psvn-header-left-section">
          <div className="psvn-header-menu-icon">
            <a className="d-flex" src="#home">
              <img src={MenuIcon} alt="menu" />
            </a>
          </div>
          <SearchBar />
        </div>
        <div className="d-flex psvn-header-right-section">
          <ul className="d-flex">
            <li>
              <a src="#home">Login</a>
            </li>
            <li>
              <a src="#home">Signup</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DefaultHeader;
