# Changelogs

Listed here are the major changes made from our previous discussion.

# as of March 2020

This version now uses transformation matrices in the vertex shader and a uniform color in the fragment shader.


# as of January 2020

## Overview 

+ `utils` was updated with latest versions of the open-source tools used.  
+ Project directory structure was reorganized; `script` tags were moved to external JS files. 

## `utils` directory

+ a specific setup function for `webgl2` context was added in the latest `webgl-utils.js` by Google
+ a _unified_ function (`createProgram()`) for creating a GL program was created in `webgl-init.js`
+ a script that sets and loads the `main()` function when HTML document is opened was created in `html-init.js` 

## Development Structure

+ HTML and JS were separated. `template.html` contains the core document and loads all necessary JS libraries from `utils` folder. 
+ GLSL shader programs are still stored in `script` tags inside the HTML file. 
+ `main.js` should implement a `main()` function; this should contain your main WebGL program - from initialization of the rendering context up to the rendering call. 
