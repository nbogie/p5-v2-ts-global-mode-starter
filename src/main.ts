//TODO: move most test code to a separate workout script

//this import RUNS p5 - it's not for type purposes - that's set up by  global.d.ts
import "p5"; //TODO: remove this import when building for OP

//This import brings in the runtime p5 value (to reference p5.Vector.random2D() etc)
import p5 from "p5"; //TODO: remove this import when building for OP

//just checking this ts setup can handle the p5 value.
p5.disableFriendlyErrors = false;

//This setup function WON'T be placed on the window object automatically, because we're in a module.
//so p5.js won't find it - without us doing more config (see later)

window.setup = async function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
};

window.draw = function draw() {
    background(30);
    for (let i = 0; i < 20; i++) {
        const col: p5.Color = color("lime");
        fill(col);
        const offset = p5.Vector.fromAngle(
            random(TWO_PI),
            min(width, height) * 0.4
        );
        const pos = offset.add(width / 2, height / 2);

        circle(pos.x, pos.y, 20);
    }
};

window.mousePressed = function mousePressed() {
    redraw();
};

window.windowResized = function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
};
