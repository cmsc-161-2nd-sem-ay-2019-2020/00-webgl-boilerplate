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
	
	vertices = [0,0,0,1];
	render();
}


function render() {
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.POINTS, 0, 1);
}