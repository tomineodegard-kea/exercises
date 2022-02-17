"use strict";
// Higher order functions are basically functions that require another function as a parameter.
// Just like setTimeOut or addEventlistener. But also array functions/methods. forEach is an array method.

const animals = ["dog", "cat", "mouse", "ant"];

function petAnimal(a) {
  console.log(`Pet ${a}`);
}

function pairAnimal(animal, i, arr) {
  if (i < arr.length - 1) {
    console.log(animal + " is now friends with " + arr[i + 1]);
  } else {
    console.log(animal + " has no friends");
  }
}

animals.forEach(petAnimal);
animals.forEach(pairAnimal);
