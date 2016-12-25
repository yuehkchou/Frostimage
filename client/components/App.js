import React from 'react';
import { render } from 'react-dom';
import OrbitControls from '../public/dist/OrbitControls'
class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello REACT!! </p>;
        <TestView />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))
