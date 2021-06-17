import React from 'react';
import './Trailers.css';
class TrailersSection extends React.Component {
  
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
      <div className="trailers-container">
        <video
          ref={this.getVideo}
          src="/videos/video03.mp4"
          type="video/mp4"
        />

<h1>Welcome to Kyrgyzstan</h1>

        <div className="playVideoBtn">
          <button onClick={this.playVideo}>
          <i class="fas fa-play"></i>
          </button>
          <button onClick={this.pauseVideo}>
          <i class="fas fa-pause"></i>
          </button>
        </div>
        <p>Author video: We Travel The World</p>
      </div>
    );
  };
}


export default TrailersSection;