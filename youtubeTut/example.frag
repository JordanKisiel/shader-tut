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

//control speed of oscillations
float RED_PERIOD = 0.0005;
float GREEN_PERIOD = 0.00005;
float BLUE_PERIOD = 0.0001;

//main function runs for every pixel
void main() {
    float redOssc = abs(sin((u_time) * RED_PERIOD));
    float greenOssc = abs(sin((u_time) * GREEN_PERIOD));
    float blueOssc = abs(sin((u_time) * BLUE_PERIOD));

    //global variable "gl_FragCoord" holds screen coordinates of current
    //pixel (screen fragment)
    //this is called varying bc it differs from thread to thread
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec2 mt = u_mouse;

    //must return a color at the end
    //by assigning it to reserved global variable "gl_FragColor"
    gl_FragColor = vec4(mt.x * st.x * redOssc, mt.y * st.y * greenOssc, mt.x * mt.y * blueOssc, 1.0);
}