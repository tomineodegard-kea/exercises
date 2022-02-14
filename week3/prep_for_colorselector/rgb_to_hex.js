"use strict";

//Convert from integer to hex
function rgbToHex(r, g, b) {
  let red = ("0" + r.toString(16)).slice(-2);
  let green = ("0" + g.toString(16)).slice(-2);
  let blue = ("0" + b.toString(16)).slice(-2);

  let hexColor = { red, green, blue };
  console.log(`#${red}${green}${blue}`);
}

rgbToHex(192, 255, 238);
