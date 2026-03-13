import "p5/global";
//@ts-ignore
import p5 from "p5";
import { randomColour } from "./utils/palette.ts";

p5.disableFriendlyErrors = true;

window.setup = function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
};

window.draw = function draw() {
  drawMyDesign();
};

//delete this
function drawMyDesign() {
  blendMode(SUBTRACT);
  background(0, 15);
  blendMode(BLEND);
  const mouse = createVector(mouseX, mouseY);
  const pMouse = createVector(pmouseX, pmouseY);
  const towards = p5.Vector.sub(mouse, pMouse);
  towards.normalize();

  rectMode(CENTER);
  noStroke();
  const radius: number = (random(0.2, 1) * width) / 4;
  for (let i = 0; i < 10; i++) {
    fill(randomColour());
    const offset = p5.Vector.fromAngle(towards.heading() + randomGaussian(0, 0.1)).mult(radius);
    const vec = offset.add(mouse);
    square(vec.x, vec.y, 10);
  }
}
