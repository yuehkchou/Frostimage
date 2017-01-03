import React from 'react';
import { render } from 'react-dom';
import Banner from '../assets/LOLBanner';
class Main extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        {/* <iframe className="ytplayer" id="ytplayer"
          src="https://www.youtube.com/v/76cG7bcmmqM?autoplay=1&controls=0&showinfo=0&autohide=1"
          frameBorder="0" allowFullScreen /> */}
        <video poster="placeholder.jpg" id="backgroundvid">
          <source ={Banner} type="video/mp4" />
        </video>
        <div id="word">
          HELLO
        </div>
      </div>
    )
  }
}

export default Main;
