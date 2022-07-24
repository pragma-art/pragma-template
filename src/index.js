import { set_seed, rangeFloor } from "./util/random.js";

// Set NFT attributes
const attributes = {};

function setup() {
  // Set the hash for it to work with most frameworks
  set_seed(hash);
  randomSeed(rangeFloor(1e18));

  // Create canvas
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  // Set a background
  background(51);
}

function resize() {
  resizeCanvas(innerWidth, innerHeight);
}

let W = window;
W.setup = setup;
W.draw = draw;
W.windowResized = resize;
W.attributes = attributes;
