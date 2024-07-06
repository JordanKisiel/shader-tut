let exampleShader

//load in shader
function preload() {
    exampleShader = loadShader("example.vert", "example.frag")
}

function setup() {
    createCanvas(400, 400, WEBGL)

    //specify shader to use
    shader(exampleShader)

    noStroke()
}

function draw() {
    clear()

    background(200)

    //run shader
    //note: width and height are global variables that automatically refer to the
    //dimensions of the canvas
    ellipse(0, 0, width, height, 150)
    fill(255, 255, 255)
}
