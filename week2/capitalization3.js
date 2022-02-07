// exercise capitalization 07.02.22
// Hint: use substring, toUpperCase, toLowerCase and simple string concatenation

"use strict";
// const myName = "peTer";
// console.log(myName.charAt(0).toUpperCase() + myName.substring(1).toLowerCase());

const myName = "peter";
console.log(myName.substring(0, 2).toLowerCase() + myName.charAt(2).toUpperCase() + myName.substring(3).toLowerCase());
