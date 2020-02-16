import React, { Component } from "react";

import "./DefaultLayout.css";
// import { PlayIcon } from "../../assets/icons";
// import VideoPlayer from "../../components/VideoPlayer";
import { ReactFlvPlayer } from "react-flv-player";

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const videoLinks = [
      "ws://157.230.255.63:8080/live/testkey.flv",
      "ws://157.230.255.63:8080/live/key2.flv",
      "ws://157.230.255.63:8080/live/key3.flv",
      "ws://157.230.255.63:8080/live/key4.flv"
    ];
    // const videoJsOptions = {
    //   autoplay: true,
    //   controls: true,
    //   sources: [
    //     {
    //       src: "ws://157.230.255.63:8080/live/key2.flv",
    //       type: "video/x-flv"
    //     }
    //   ]
    // };
    return (
      <div className="psvn-main-view-wrapper">
        <div className="psvn-main-view-video-container">
          <div className="psvn-main-view-video-wrapper">
            <div className="row">
              {videoLinks.map((url, i) => {
                return (
                  <div className="col-sm-4" key={i}>
                    <div className="psvn-main-view-video-wrapper">
                      <div className="psvn-main-view-video d-flex align-items-center justify-content-center">
                        {/* <img className="play-icon" src={PlayIcon} alt="play" /> */}
                        {/* <VideoPlayer {...videoJsOptions} /> */}
                        <div style={{ width: "100%", height: "100%" }}>
                          <ReactFlvPlayer
                            url={url}
                            type="flv"
                            heigh="100%"
                            width="100%"
                            isLive={true}
                          />
                        </div>
                      </div>
                      <div className="psvn-main-view-video-content-wrapper">
                        <div className="psvn-tag">Live</div>
                        <h1>Workshop by Brian Holt</h1>
                        <p>
                          This workshop is offered for the beginner in freelance
                          and professionals as well...
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainView;
