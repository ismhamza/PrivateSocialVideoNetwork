import React from "react";
import videojs from "video.js";
import "videojs-flvjs";

import "video.js/dist/video-js.css";

export class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ width: "100%", height: "100%" }} data-vjs-player>
          <video
            data-setup='{"techOrder": ["html5", "flash", "other supported tech"]}'
            ref={node => (this.videoNode = node)}
            className="video-js"
          ></video>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
