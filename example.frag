//setting floating precision to medium
//quality vs speed tradeoff
precision mediump float;

//uniform data that gets passed to every gpu thread
//by the cpu
//this data is read only
//these names vary between implementations
//in P5js it looks like you can use shader.setUniform(uniformName, uniformValue)
//in the Sketch to pass uniform data to the shader
uniform vec2 u_resolution;  // Canvas size (width,height)
uniform vec2 u_mouse;       // mouse position in screen pixels
uniform float u_time;       // Time in seconds since load

float PERIOD = 0.001; //controls speed of osscilation

vec4 oscillatingRed() {
    float ossciValue = abs(sin((u_time) * PERIOD));
    return vec4(ossciValue, 0.0, 0.0, 1.0);
}

//main function runs for every pixel
void main() {
    //must return a color at the end
    //by assigning it to reserved global variable "gl_FragColor"
    gl_FragColor = oscillatingRed();
}