import { set_seed, rangeFloor } from "../src/util/random.js";

let attributes = {};

function setup() {
  // Set the hash for it to work with pragma
  set_seed(hash);
  randomSeed(rangeFloor(1e18));

  // Create a canvas
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(51);
}

let W = window;
W.setup = setup;
W.draw = draw;
W.windowResized = () => {
  resizeCanvas(innerWidth, innerHeight);
};
W.attributes = attributes;
