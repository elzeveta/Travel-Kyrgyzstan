import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

class HeroSection extends React.Component {
  getVideo = (elem) => {
    this.video = elem;
  };

  playVideo = () => {
    this.video.play();
  };

  pauseVideo = () => {
    this.video.pause();
  };

  render = () => {
    return (
      <div className="hero-container">
        <video ref={this.getVideo} src="/videos/video02.mp4" type="video/mp4" />

        <h1>Welcome to Kyrgyzstan</h1>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            url="/sign-up"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
            url="/trailers"
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
        </div>

        <div className="playVideoBtn">
          <button onClick={this.playVideo}><i class="fas fa-play"></i></button>
          <button onClick={this.pauseVideo}><i class="fas fa-pause"></i></button>
        </div>
        <p>Author video: Kyrgyz Club</p>
      </div>
    );
  };
}

export default HeroSection;
