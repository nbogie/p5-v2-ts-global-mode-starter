//TODO: remove this import when building for OP
//imports the types for global-mode p5.  AND side-effects to start p5 running (calls our setup() etc)
import "p5/global";

//This import is still necessary for the p5 variable to be available at runtime.
//@ts-ignore We want to keep this here even if the sketch doesn't currently use the p5 variable.
import p5 from "p5";

//just testing p5 variable is available
p5.disableFriendlyErrors = false;

window.setup = async function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log("window.p5 is", window.p5);
    //                                 ^?
    //just checking p5 variable is available (both to typescript and at runtime).
    console.log(p5.Vector.random2D());
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
