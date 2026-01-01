import "p5/global";
//@ts-ignore
import p5 from "p5";

window.setup = function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
};

window.draw = function draw() {
  const diameter: number = random(20, 100);
  circle(mouseX, mouseY, diameter);
};
