//this import RUNS p5 - it's not for type purposes - that's set up by  global.d.ts
import "p5"; //TODO: remove this import when building for OP

//This import brings in the runtime p5 value (to reference p5.Vector.random2D() etc)
//@ts-ignore We want to keep this here even if the sketch doesn't currently use the p5 variable.
import p5 from "p5";

window.setup = async function setup() {
    createCanvas(windowWidth, windowHeight);
};

window.draw = function draw() {
    background(30);
    drawSnowman();
};

window.mousePressed = function mousePressed() {
    console.log("Mouse Pressed!", mouseX, mouseY);
};

window.keyPressed = function keyPressed() {
    console.log("A key was pressed: ", key);
};

function drawSnowman() {
    fill("white");
    circle(mouseX, mouseY, 200);
    circle(mouseX, mouseY - 100, 100);
}
