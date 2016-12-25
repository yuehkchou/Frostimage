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

    this.playbackConfig ={
      speed: 1.0,
      wireframe: false
    };
    // Scene
    this.scene = new THREE.Scene();
    this.container = document.createElement( 'div' );
    document.body.appendChild( this.container )

    // Camera
    this.camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
    console.log(this.camera)
    this.camera.position.set( 0, 0, 5 );
    this.camera.lookAt( this.scene.position );
    this.scene.add( this.camera )

    // Renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( 1024, 1024 );
    this.renderer.autoClear = false;
    this.renderer.setClearColor(0xEEEEEE);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    var cube = new THREE.BoxGeometry(100, 100, 100);
    var mesh = this.mesh = new THREE.Mesh( cube, new THREE.MeshBasicMaterial( { color: 0x0000ff, opacity: 0.5, transparent: true } ) );
    this.container.appendChild( this.renderer.domElement );

    this.scene.add( new THREE.AmbientLight( 0x222222 ) );

    // Lights
    let light = this.light = new THREE.PointLight( 0xFFFF00 );
    light.position.set( 200, 250, 500 );
    // light.angle = 0.5;
    // light.penumbra = 0.5;

    light.castShadow = true;
    console.log('light', light);
    this.scene.add( light )

    // Controls
    // const controls = new THREE.OrbitControls(THREE);
    // controls.target.set( 0, 50, 0);

    // GUI
    this.gui = new dat.GUI();

    this.gui.add( this.playbackConfig, 'speed', 0, 2).onChange( () => {
      character.setPlaybackRate( this.playbackConfig.speed );
    } );

    this.geometry = new THREE.BoxGeometry( 2, 2, 2); // give the cube it's dimensions (width, height, depth)
  this.material = new THREE.MeshLambertMaterial( { color: 0xFF0000, wireframe: false} ); // creates this.material and gives it a color
  var cube1 = this.cube1 = new THREE.Mesh( this.geometry, this.material ); // crates the cube using the this.geometry and the this.material
  var cube2 = this.cube2 = new THREE.Mesh( this.geometry, this.material );
      cube2.position.set(5, -2, -5);
      var cube3 = this.cube3 = new THREE.Mesh( this.geometry, this.material );
      cube3.position.set(-5, -2, -5);

this.scene.add( cube1, cube2, cube3); // adds the cube to the scene
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
    console.log(this.scene)
    // Render the scene
    this.renderer.render( this.scene, this.camera );
  }

  // componentWillMount() {
  //   window.addEventListener( 'resize', this.onWindowResize.bind(this), false );
  // }
  //
  componentDidMount() {
    const controls = new OrbitControls(this.camera);
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;

    controls.noZoom = false;
    controls.noPan = false;

    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;

    controls.addEventListener('change', () => {
      this.setState({
        mainCameraPosition: this.refs.mainCamera.position,
      });
    });

    this.controls = controls;
  }
  // onWindowResize = ( event ) => {
  //   SCREEN_WIDTH = window.innerWidth;
  //   SCREEN__HEIGHT = window.innerHeight;
  //
  //   this.renderer.setSize( SCREEN_WIDTH, SCREEN__HEIGHT );
  // }

  render() {
    return (
      <div className ="test">
      <script src="./public/dist/OrbitControls.js"></script>
      </div>
    );
  }
}
export default TestView;
