"use strict";

window.addEventListener("DOMContentLoaded", initLoop);
// set the iterator
let iterator = 0;
//create the empty array, where the results will be populated
let result = [];
// set the max length to 10, becuase of the task-description
let maxLength = 10;

function initLoop() {
  console.log("initLoop");
  loop();
}

function loop() {
  console.log("you are looping");
  iterator++;
  if (iterator < maxLength) {
    result.unshift(iterator);
    console.log(result);
    setTimeout(loop, 1000);
  } else {
    iterator - 2;
    result.pop(iterator);
    result.unshift(iterator);
    console.log(result);
    setTimeout(loop, 1000);
    console.log("array counter is done");
  }
}
