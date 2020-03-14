"use strict";

/**
 * Author: Clinton Poserio
 * 
 * this file sets an action to be done when the HTML document is opened. 
 */

// this function checks and executes your main JS program
function autorun() {
	// main function must be defined in your main.js
	if(typeof main === "function"){
	  main()
	}else{
	  alert("Create a 'main' function inside 'main.js'");
	}
}

// this lines sets 'autorun' as the action during the `onload` event
if (window.addEventListener) window.addEventListener("load", autorun, false);
else if (window.attachEvent) window.attachEvent("onload", autorun);
else window.onload = autorun;