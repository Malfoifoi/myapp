let horse;
let anime;
let x,y;
let song;
let sound;
function preload() {
  horse = loadAnimation('uma/ice-horse-bend-00.png','uma/ice-horse-bend-03.png');
  soundFormats('mp3','ogg');
  song = loadSound("harvestseason.mp3", success,error,progress);
  sound = loadSound("カーソル移動8.mp3");
}
function setup() {
  background(100);
  createCanvas(600, 500);
reset();
song.play();
x = 300;
y = 300;
}
function draw() {
  background(220);
 move();
 
}
function mousePressed() {
  onmouse();
 sound.play();
}
function siki(entity) {
  entity.x += entity.vx;
  entity.y += entity.vy;
}
function uma(entity) {
  animation(horse,entity.x,entity.y);
}
function death(entity) {
  return entity.y >= height
}
function hone() {
  return{
    x:100,
    y:300,
    vx:0,
    vy:0,
  }
}
function jump(entity) {
  return entity.vy = -5;
}
function gravity(entity) {
  return entity.vy += 0.15;
}

let player;
let gameState;
function reset() {
  player = hone();
  gameState = 'start'
}
function lose() {
  push();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(64);
  fill(255,0,200);
  text('2位', width/2,height/2);
  pop();
}
function move() {
 
siki(player);
gravity(player);
uma(player);
if (death(player)) {
  gameState = 'gameover'
}
if (gameState === 'gameover') {
  lose();
}
}
function onmouse() {
  switch(gameState){
    case 'start':
      jump(player);
      break;
    case 'gameover':
      reset();
      break;
  }
}

function success(e) {
  console.log("load sound succes",e);
}
function error(e) {
  console.log("load sound error",e);
}
function progress(e) {
  console.log("load sound progress",e);
  
}
// import React, { useState,useEffect } from "react";
// import _p5 from "rally/p5.min.js";
// import PropType from "prop-types";

// const P5Wrapper = props =>{
//   const wrapper = React.createRef();
//   return <div ref={wrapper}/>;

// useEffect(() => {
//   setP5(new _p5(props.sketch, wrapper.current));
// }, [props.sketch]);

// return <div ref={wrapper} />;
// };

// P5Wrapper.propTypes = {
// sketch: PropTypes.func
// };

// export default P5Wrapper;