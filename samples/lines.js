import { set_seed, rangeFloor } from "./util/random.js";

const rectangles = [];

function setup() {
  // Set the hash for it to work with pragma
  set_seed(hash);
  randomSeed(rangeFloor(1e18));

  // Create a canvas
  createCanvas(windowWidth, windowHeight);

  // Disable loop since we are doing a static artwork
  noLoop();

  const rectangleCount = 10;
  for (let i = 0; i < rectangleCount; i++) {
    // Randomly place some rectangles within -1..1 space
    const shrink = 0.5;
    const position = [random(-1, 1) * shrink, random(-1, 1) * shrink];
    // Create a random 0..1 scale for the rectangles
    const scale = random(0.5, 1);
    const size = [random(0, 1) * scale, random(0, 1) * scale];
    rectangles.push({
      position,
      size,
    });
  }
}

function draw() {
  background(51);

  strokeJoin(MITER);
  rectMode(CENTER);
  noFill();
  stroke(255);

  const minDim = Math.min(width, height);

  rectangles.forEach((rectangle) => {
    const { position, size } = rectangle;

    // The position and size in -1..1 normalized space
    let [x, y] = position;
    let [w, h] = size;

    // Map -1..1 to screen pixels
    // First we 'push' to save transformation state
    push();

    // Then translate to the center
    translate(width / 2, height / 2);

    // And scale the context by half the size of the screen
    // We use a square ratio so that the lines have even thickness
    scale(minDim / 2, minDim / 2);

    // The stroke weight is specified in 0..1 normalized space
    // It will be multiplied by the scale above
    strokeWeight(0.015);

    // now draw the rectangle
    rect(x, y, w, h);

    // and restore the transform for the next rectangle
    pop();
  });
}

// Setup p5.js
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let W = window;
W.setup = setup;
W.draw = draw;
W.windowResized = windowResized;
W.attributes = {};
