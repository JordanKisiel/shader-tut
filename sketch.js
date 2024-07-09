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

    //uniforms must be set in the draw function if you want them to change over time
    //basically true of anything you want to change over time
    exampleShader.setUniform("u_time", millis())
    exampleShader.setUniform("u_resolution", [width, height])
    exampleShader.setUniform("u_mouse", [
        mouseX / displayWidth,
        mouseY / displayHeight,
    ])

    console.log(mouseX)

    //run shader
    //note: width and height are global variables that automatically refer to the
    //dimensions of the canvas
    rect(0, 0, width, height)
}
