//imports the types for global-mode p5.  AND side-effects to start p5 running (calls our setup() etc)
import "p5/global";

//This import is still necessary for the p5 variable to be available at runtime.
//@ts-ignore We want to keep this here even if the sketch doesn't currently use the p5 variable.
import p5 from "p5";

import { collect } from "./utils.ts";

//just checking this ts setup can handle the p5 value.
p5.disableFriendlyErrors = false;

//This setup function WON'T be placed on the window object automatically, because we're in a module.
//so p5.js won't find it - without us doing more config (see later)

const palette = ["#a1dbb2", "#fee5ad", "#faca66", "#f7a541", "#f45d4c"];

window.setup = async function setup() {
  createCanvas(windowWidth, windowHeight);
  background("linen");
  noLoop();
};

window.draw = function draw(): void {
  const myPositions = collect(20, randomPosition);
  myPositions.forEach(drawThingAtPos);
};

window.mousePressed = function mousePressed() {
  drawRandomCirclesNearMouse(10);
  redraw();
};

window.windowResized = function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
};

function drawThingAtPos(pos: p5.Vector) {
  push();
  translate(pos);
  fill(random(palette));
  circle(0, 0, random(10, 50));
  pop();
}

function drawRandomCirclesNearMouse(numCircles: number) {
  noStroke();
  for (let i = 0; i < numCircles; i++) {
    const offset = p5.Vector.random2D().mult(random(30, 100));
    const { x, y } = offset.copy().add(mouseX, mouseY);
    const diameter = random(10, 100);
    const myColour: p5.Color = color(random(palette));
    fill(myColour);
    circle(x, y, diameter);
  }
}

function randomPosition(): p5.Vector {
  const x = random(0.1, 0.9) * width;
  const y = random(0.1, 0.9) * height;
  return createVector(x, y);
}
