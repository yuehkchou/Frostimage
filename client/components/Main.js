import React from 'react';
import THREE from 'three';

// Declare Varibles
const scene, camera, renderer, bulblight, container,
character, bulbMat, ambientLight, object, loader, stats;
const ballMat, cubeMat, floorMat;
const geometry, material, mesh;

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
if(Detector.webgl) Dectector.addGetWebGLMessage();

const SCREEN_WIDTH = window.innerWidth;
const SCREEN__HEIGHT = window.innerHeight;

const gui, platbackConfig = {
  speed: 1.0,
  wireframe: false
};

const clock = new THREE.Clock();

init();
animate();

const init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window/innerHeight, 1, 10000 );
  camera.position.z = 1000;

  geometry = new THREE.BoxGeometry(200, 200, 200 );
  material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true} );

  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );

}

const animate = () => {
  requestAnimationFrame( animate );

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render( scene, camera );
}
