import React from 'react';
import './OnSilk.css';
class OnSilkSection extends React.Component {
  
  getVideo = elem => {
    this.video = elem
  }

  playVideo = () => {
    this.video.play()
  };

  pauseVideo = () => {
    this.video.pause();
  };

  render = () => {
    return (
      <div className="onSilk-container">
        <video
          ref={this.getVideo}
          src="/videos/video01.mp4"
          type="video/mp4"
        />

<h1>Kyrgyzstan On Silk Road</h1>

        <div className="playVideoBtn">
          <button onClick={this.playVideo}>
          <i class="fas fa-play"></i>
          </button>
          <button onClick={this.pauseVideo}>
          <i class="fas fa-pause"></i>
          </button>
        </div>
        <p>Author video: Нафталин КейДжи</p>
      </div>
    );
  };
}


export default OnSilkSection;