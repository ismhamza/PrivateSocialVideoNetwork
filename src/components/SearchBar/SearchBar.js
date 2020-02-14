import React, { Component } from "react";

import "./SearchBar.css";
import { SearchIcon } from "../../assets/icons";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="psvn-header-searchbar-wrapper">
        <img src={SearchIcon} alt="search" />
        <input type="search" placeholder="Search" />
      </div>
    );
  }
}

export default SearchBar;
