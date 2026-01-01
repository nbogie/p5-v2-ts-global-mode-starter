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
  const diameter: number = random(20, 100);
  fill(randomColour());
  circle(mouseX, mouseY, diameter);
  const vec = p5.Vector.random2D().mult(200);
  square(vec.x, vec.y, 10);
};
