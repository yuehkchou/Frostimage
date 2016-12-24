import React from 'react';
import THREE from 'three';
import Detector from '../public/dist/Detector';

class MainView extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      data: []
    }
  }

  render() {

    // Declare Varibles
    let scene, camera, renderer, bulblight, container,
    character, bulbMat, ambientLight, object, loader, stats;
    let ballMat, cubeMat, floorMat;
    let geometry, material, mesh;

    // Lumens Setting

    const bulbLuminousPowers = {
      '11000 lm': 110000,
      '3500 lm': 3500,
      '1700 lm': 1700,
      '800 lm': 800,
      '400 lm': 400,
      '180 lm': 180,
      '20 lm': 20,
      'off': 0
    };

    const hemiLuminousIrradiances = {
      '0.001 lx': 0.001,
      '0.002 lx': 0.002,
      '0.5 lx': 0.5,
      '3.4 lx': 3.4
    }

    const params = {
      shadows: true,
      exposure: 0.68,
      bulbPower: Object.keys( bulbLuminousPowers )[ 4 ],
      hemiIrradiance: Object.keys( hemiLuminousIrradiances )[0]
    }
    if( !Detector.webgl ) Detector.addGetWebGLMessage();

    const SCREEN_WIDTH = window.innerWidth;
    const SCREEN__HEIGHT = window.innerHeight;
    let gui;
    const playbackConfig = {
      speed: 1.0,
      wireframe: false
    };

    const clock = new THREE.Clock();

    init();
    animate();

    const init = () => {

      container = document.createElement('div');

      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
      camera.position.set( 0, 15, 400 );

      // Lights

      scene.add( new THREE.AmbientLight( 0x222222 ) );

      let light = new THREE.Spot.Light( 0xffffff, 5, 1000 );
      light.position.set( 200, 250, 500 );
      light.angle = 0.5;
      light.penumbra = 0.5;

      light.castShadow = true;
      light.shadow.mapSize.width = 1024;
      light.shadow.mapSize.height = 1024;

      light.castShadow = true;
      light.shadow.mapSize.width = 1024;
      light.shadowmapSize.height = 1024;

      scene.add( light );

      // Renderer

      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setClearColor( scene.fog.color );
      renderer.sexPixelRation( window.devicePixelRatio );
      renderer.setSize( SCREEN_WIDTH, SCREEN__HEIGHT ) ;
      container.appendChild( renderer.domElement );

      renderer.gammaInput = true;
      renderer.gammaOutput = true;
      renderer.shadowMap.enabled = true;

      // Events

      window.addEventListener( 'resize', onWindowResize, false );

      // Controls

      controls = new THREE.OrbitControls( camera, renderer.domElement );
      controls.target.set( 0, 50, 0 );

      // Geometry
      geometry = new THREE.BoxGeometry( 200, 200, 200 );
      material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

      mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );

      // GUI

      gui = new dat.GUI();

      gui.add( playbackConfig, 'speed', 0, 2).onChange(() => {
        character.setPlaybackRate( playbackConfig.speed );
      });

      gui.add( playbackConfig, 'wireframe', false ).onChange( () => {
        character.setWireframe( playbackConfig.wireframe );
      });
    }

    const animate = () => {
      requestAnimationFrame( animate );

      render();

      const delta = clock.getDelta();
      stats.update();
      character.update( delta );

      renderer.render( scene, camera );
    }

    return (
      <div>
      </div>
    )
  }
}

export default MainView;
