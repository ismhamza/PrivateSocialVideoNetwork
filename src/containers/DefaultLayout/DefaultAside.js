import React, { Component } from "react";
import {
  HomeIcon,
  HomeIconColored,
  WifiIcon,
  WifiIconColored,
  EndedIcon,
  EndedIconColored,
  StarIcon,
  StarIconColored
} from "../../assets/icons";

import "./DefaultLayout.css";

class DefaultAside extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={`psvn-sidebar-wrapper`}>
        <div className="psvn-sidebar-logo-wrapper">
          <h1 className="psvn-sidebar-logo">Video Network</h1>
        </div>
        <ul className="psvn-sidebar-list">
          <li>
            <a href="#home">
              <span className="psvn-sidebar-list-item-icon">
                <img className="black" src={HomeIcon} alt="home" />
                <img className="colored" src={HomeIconColored} alt="home" />
              </span>
              <span className="link-name">Home</span>
            </a>
          </li>
          <li>
            <a href="#home">
              <span className="psvn-sidebar-list-item-icon">
                <img className="black" src={WifiIcon} alt="home" />
                <img className="colored" src={WifiIconColored} alt="home" />
              </span>
              <span className="link-name">Live</span>
            </a>
          </li>
          <li>
            <a href="#home">
              <span className="psvn-sidebar-list-item-icon">
                <img className="black" src={EndedIcon} alt="home" />
                <img className="colored" src={EndedIconColored} alt="home" />
              </span>
              <span className="link-name">Ended</span>
            </a>
          </li>
          <li>
            <a href="#home">
              <span className="psvn-sidebar-list-item-icon">
                <img className="black" src={StarIcon} alt="home" />
                <img className="colored" src={StarIconColored} alt="home" />
              </span>
              <span className="link-name">Favourite</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default DefaultAside;
