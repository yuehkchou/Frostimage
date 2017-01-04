import React from 'react';
import { render } from 'react-dom';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <iframe className="ytplayer" id="ytplayer"
          src="https://www.youtube.com/v/76cG7bcmmqM?autoplay=1&controls=0&showinfo=0&autohide=1"
          frameBorder="0" allowFullScreen /> */}
        <img src="assets/Banner.jpg" />
        <video poster="assets/Banner" type="image/jpg" id="backgroundvid" autoPlay loop>
          <source src="assets/LOLBanner" type="video/mp4" />
        </video>
        <div id="word">
          HELLO
        </div>
      </div>
    )
  }
}

export default Main;
