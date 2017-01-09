import React from 'react';
import { render } from 'react-dom';
import { Navbar, FormGroup, FormControl, Col, Row } from 'react-bootstrap';
import banner from '../assets/Banner.jpg';
import vBanner from '../assets/LOLBanner.mp4';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const formInstance = (
      <Navbar>
        <Navbar.Collapse>
          <Navbar.Form>
            <FormGroup>
              <FormControl type="text" placeholder="Enter Summoner Name..." />
            </FormGroup>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    )
    return (
      <div className="main">
        <div className="container-fluid">
          <header>
            <div className="header-content">
              <div className="header-content-inner">
                <h1 id="homeHeading">Dot League</h1>
                <hr />
                <p> Your Own Training Experience </p>
                <form className="form-horizonal">
                  <input type="text" className="playerSearch" placeholder="Summoner Name..."></input>
                {/* {formInstance} */}
                  <a href="#search" id="searchButton" className="btn btn-transparent btn-lg page-scroll">Search</a>
                </form>
              </div>
            </div>
            <div className="vidBanner" id="vidPlayer">
              <div id="backgroundvid-overlay">
              </div>
              <video controls poster={banner} id="backgroundvid" autoPlay loop muted>
                <source src="../../public/e72303f4d1abf6f055af6940e54e5e34.mp4" />
              </video>
            </div>
          </header>
          <section className="bg-primary text-center" id="about">
          <div className="container">
            <h2 className=".section-heading">Data Driven Analysis</h2>
            <hr />
            <p className="text-faded">Welcome to your own League of Legend Training Station!</p>
          </div>
          </section>

          <section id="guide">
            <div className="container">
              <Row>
                <Col sm={3} md={6} key="{index}" className="text-center">
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
