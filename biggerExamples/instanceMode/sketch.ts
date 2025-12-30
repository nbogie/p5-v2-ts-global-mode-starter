import p5 from "p5";

import { collect } from "./utils.ts";

//just checking this ts setup can handle the p5 value.
p5.disableFriendlyErrors = false;

function sketch(p: p5) {
  const palette = ["#a1dbb2", "#fee5ad", "#faca66", "#f7a541", "#f45d4c"];

  p.setup = function setup(): void {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background("linen");
    p.noLoop();
  };

  p.draw = function draw(): void {
    const myPositions = collect(20, () => randomPosition());
    myPositions.forEach((pos: p5.Vector) => {
      p.push();
      p.translate(pos);
      p.fill(p.random(palette));
      p.circle(0, 0, p.random(10, 50));
      p.pop();
    });
  };

  p.mousePressed = function mousePressed() {
    drawRandomCirclesNearMouse(10);
    p.redraw();
  };

  p.windowResized = function windowResized() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  function drawRandomCirclesNearMouse(numCircles: number) {
    p.noStroke();
    for (let i = 0; i < numCircles; i++) {
      const offset = p5.Vector.random2D().mult(p.random(30, 100));
      const { x, y } = offset.copy().add(p.mouseX, p.mouseY);
      const diameter = p.random(10, 100);
      const myColour: p5.Color = p.color(p.random(palette));
      p.fill(myColour);
      p.circle(x, y, diameter);
    }
  }

  function randomPosition(): p5.Vector {
    const x = p.random(0.1, 0.9) * p.width;
    const y = p.random(0.1, 0.9) * p.height;
    return p.createVector(x, y);
  }
}
new p5(sketch);
