import React from 'react';
import { render } from 'react-dom';
import { Col } from 'react-bootstrap';
import banner from '../assets/Banner.jpg';
import vBanner from '../assets/LOLBanner.mp4';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        {/* <iframe className="ytplayer" id="ytplayer"
          src="https://www.youtube.com/v/76cG7bcmmqM?autoplay=1&controls=0&showinfo=0&autohide=1"
          frameBorder="0" allowFullScreen /> */}
        {/* <img src={banner} /> */}
        <div className="vidBanner">
          <video poster={banner} type="image/jpg" id="backgroundvid" autoPlay loop muted>
            <source src={vBanner} type="video/mp4" />
          </video>
        </div>
        <div className="mainInfo">
          <Col sm={6} md={3} className="mainInfo">
            Hello Test
          </Col>
        </div>
      </div>
    )
  }
}

export default Main;
