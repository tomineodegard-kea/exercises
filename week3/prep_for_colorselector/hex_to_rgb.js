"use strict";

//Convert from hex to integer

function hexToRGB(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  let hexColor = { r, g, b };
  console.log(hexColor);
}

hexToRGB("#c0ffee");
