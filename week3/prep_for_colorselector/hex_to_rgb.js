"use strict";

//Convert from hex to integer
let hexColor = "#c0ffee";

function hexToRGB(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  console.log(`This is the RGB values: Red: ${r}, Green: ${g}, Blue:${b}`);
}

hexToRGB(hexColor);
