"use strict";

const animals = [
  { name: "Mandu", type: "cat" },
  { name: "Mia", type: "dog" },
  { name: "ScoobyDoo", type: "dog" },
  { name: "Catzy", type: "cat" },
];

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

let cats = animals.filter(isCat);
console.log(cats);
