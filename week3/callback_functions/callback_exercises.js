"use strict";

const person1 = { firstName: "Harry", lastName: "Potter", hired: false };

const person2 = { firstName: "Ron", lastName: "Weasly", hired: false };

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

function fireOrHire(action, person) {
  action(person);
}

console.log("Harry:", person1);

// now lets change the state of hired from false to true
fireOrHire(hire, person1);
console.log(person1);
