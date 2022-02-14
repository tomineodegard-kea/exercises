"use strict";

function cssToRgb(string) {
  let r = parseInt(string.substring(string.indexOf("(") + 1, string.indexOf(",")));
  let g = parseInt(string.substring(string.indexOf(" ") + 1, string.lastIndexOf(",")));
  let b = parseInt(string.substring(string.lastIndexOf(",") + 2, string.lastIndexOf(")")));

  let rgbColor = { r, g, b };
  console.log(rgbColor);
}

cssToRgb("rgb(112, 125, 238)");
