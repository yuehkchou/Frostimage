import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
// import App from './components/App';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

class App extends React.Component {
  render () {
    return <p> Hello REACT! </p>;
  }
}

render(<App />, document.getElementById('app'));
