import React, { Component } from "react";

import "./DefaultLayout.css";
import { PlayIcon } from "../../assets/icons";

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="psvn-main-view-wrapper">
        <div className="psvn-main-view-video-container">
          <div className="psvn-main-view-video-wrapper">
            <div className="row">
              <div className="col-sm-4">
                <div className="psvn-main-view-video-wrapper">
                  <div className="psvn-main-view-video d-flex align-items-center justify-content-center">
                    <img className="play-icon" src={PlayIcon} alt="play" />
                  </div>
                  <div className="psvn-main-view-video-content-wrapper">
                    <div className="psvn-tag">Live</div>
                    <h1>Workshop by Brian Holt</h1>
                    <p>
                      This workshop is offered for the beginner in freelance and
                      professionals as well...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainView;
