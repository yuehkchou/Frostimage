import React from 'react';
import { render } from 'react-dom';
import * as THREE from 'three';
import OrbitControls from './public/dist/OrbitControls'
import Main from './components/Main/Main';
import TestView from './components/TestView';
import Header from './components/header/Header';
// import App from './components/App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Main />
        <p> Hello REACT!!</p>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
