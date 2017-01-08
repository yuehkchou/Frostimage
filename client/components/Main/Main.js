import React from 'react';
import { render } from 'react-dom';
import { Col, Row } from 'react-bootstrap';
import banner from '../assets/Banner.jpg';
import vBanner from '../assets/LOLBanner.mp4';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const mainStyle = {
      backgroundImage: 'url(' + 'http://i.imgur.com/OaC1U4j.jpg' + ')',
    }
    return (
      <div className="main">
        <div className="container-fluid">
          <header>
            <div className="header-content">
              <div className="header-content-inner">
                <h1 id="homeHeading">Dot League</h1>
                <hr />
                <p> Your Own Training Experience </p>
                <input className="playerSearch" placeholder="Summoner Name..."></input>
              </div>
            </div>
            <div className="vidBanner" id="vidPlayer">
              <video controls poster={banner} id="backgroundvid" autoPlay loop muted>
                <source src="../../public/e72303f4d1abf6f055af6940e54e5e34.mp4" />
              </video>
            </div>
          </header>
          <section className=".center bg-primary" id="about">
          <div className="container">
            <p>Welcome to your own League of Legend Training Station!</p>
            <hr />
          </div>
          </section>

          <section id="guide">
            <div className="container">
              <Row>
                <Col sm={3} md={6} key="{index}" text-center>
                  <div className="icon-box">
                    <img src="{icon.img}" id="icons" />
                    <h2 className="icon-title">Test</h2>
                    <h3 className="icon-info">Information</h3>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
          <div className="mainInfo">
            {/* <Col sm={6} md={3} className="mainInfo">
              Hello Test
            </Col> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
