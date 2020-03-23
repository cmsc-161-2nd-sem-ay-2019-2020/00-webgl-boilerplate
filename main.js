"use strict";
/*
	author: ceposerio@up.edu.ph
	description: a sample main webgl function for CMSC161

*/

// declare a global gl variable
// you can access `gl` anywhere inside main.js
// note that it is initialized in main()
var gl; 

// vertices array will be used to store all vertices to be rendered.
var vertices = [];

// record of attribute pointers
const pointers = {};

// glMatrix shortcuts
let {glMatrix : glm, mat4} = glMatrix;
// see Assigning to new variable names after destructuring in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// use objects glm and mat4 as is
function main(){
	const canvas = document.getElementById('master');
	gl = initWebGL(canvas, true);

	if(!gl) {
		alert("WebGL2 is not available!");
	}

	const program = createProgram(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);
	gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
	
	pointers.aPosition = gl.getAttribLocation(program, 'a_position');
    pointers.uModel = gl.getUniformLocation(program, 'u_model');
    pointers.uView = gl.getUniformLocation(program, 'u_view');
    pointers.uProj = gl.getUniformLocation(program, 'u_proj');
    pointers.uColor = gl.getUniformLocation(program, 'u_color');
    
    gl.enableVertexAttribArray(pointers.aPosition);
  
	vertices = [0,0,0];

    let vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices.flat()), gl.STATIC_DRAW);
    
    gl.vertexAttribPointer(pointers.aPosition, 3, gl.FLOAT, false, 0,0);

	render();
}


function render() {
	gl.clear(gl.COLOR_BUFFER_BIT);

    // set transformation matrices
    let uModelMatrix = mat4.create();
    gl.uniformMatrix4fv(pointers.uModel, false, uModelMatrix);
    
    let uViewMatrix = mat4.create();
    gl.uniformMatrix4fv(pointers.uView, false , uViewMatrix);
    
    let uProjMatrix = mat4.create();
    gl.uniformMatrix4fv(pointers.uProj, false , uProjMatrix);
    
    // set color
    gl.uniform3fv(pointers.uColor, new Float32Array([1,0,0]));

    gl.drawArrays(gl.POINTS, 0, 1);
}
