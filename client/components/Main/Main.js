import React from 'react';
import { render } from 'react-dom';

class Main extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <div style={{'position': 'fixed', 'zIndex': -99, 'width': '100%', 'height': '30%'}}>
          <iframe frameBorder={"0"} height={"100%"} width={"100%"} enablejsapi={'1'}
            src={"https://youtube.com/embed/76cG7bcmmqM?autoplay=1&controls=0&showinfo=0&autohide=1"}>
          </iframe>
        </div>
      </div>
    )
  }
}

export default Main;
