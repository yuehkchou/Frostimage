import React from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import OrbitControls from '../public/dist/OrbitControls';

class TestView extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      data: []
    }

    let playbackConfig ={
      speed: 1.0,
      wireframe: false
    };
    // Scene
    this.scene = new THREE.Scene();
    this.container = document.createElement( 'div' );

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, 1, 1, 100);
    console.log(this.camera)
    this.camera.position.set( 0, 150, 400 );

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });

    this.renderer.autoClear = false;
    this.renderer.setClearColor(0x2d2d2d, 1);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    var cube = new THREE.BoxGeometry(100, 100, 100);
    var mesh = new THREE.Mesh( cube, new THREE.MeshBasicMaterial( { color: 0x0000ff, opacity: 0.5, transparent: true } ) );
    this.container.appendChild( this.renderer.domElement );

    // Lights
    let light = this.light = new THREE.SpotLight( 0xffffff, 5, 1000 );
    light.position.set( 200, 250, 500 );
    light.angle = 0.5;
    light.penumbra = 0.5;

    light.castShadow = true;

    this.scene.add( light )

    // Controls
    // this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
    // this.controls.target.set( 0, 50, 0);

    // GUI
    this.gui = new dat.GUI();

    this.gui.add( playbackConfig, 'speed', 0, 2).onChange( () => {
      character.setPlaybackRate( playbackConfig.speed );
    } );

    // Models

    let config = {
      baseUrl: '',

      body: '',
      skins: [],
      weapons: [ [ 'test.md2', 'test.png' ] ]
    };

    // this.character = new THREE.MD2Character();
    // this.character.scale = 3;
    //
    // character.onLoadComplete = () => {
    //   setupSkinsGUI( this.character );
    //   setupWeaponsGUI( this.character );
    //   setupGUIAnimations( this.character );
    // };
    //
    // this.character.loadParts( config );
    // scene.add( this.character.root );
    this.scene.add( mesh )

    // Render the scene
    this.renderer.render( this.scene, this.camera );
  }

  // componentWillMount() {
  //   window.addEventListener( 'resize', this.onWindowResize.bind(this), false );
  // }
  //
  // componentDidMount() {
  //
  // }
  // onWindowResize = ( event ) => {
  //   SCREEN_WIDTH = window.innerWidth;
  //   SCREEN__HEIGHT = window.innerHeight;
  //
  //   this.renderer.setSize( SCREEN_WIDTH, SCREEN__HEIGHT );
  // }

  render() {
    return (
      <div className ="test">
      </div>
    );
  }
}
export default TestView;
