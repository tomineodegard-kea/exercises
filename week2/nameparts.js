// exercise nameparts 07.02.22

"use strict";

const myName = "Peter Heronimous Lind";

let firstName = myName.substring(myName.indexOf(0), myName.indexOf(" "));

console.log(firstName);

let middleName = myName.substring(myName.indexOf(" "), myName.lastIndexOf(" "));
console.log(middleName.trim());

let lastName = myName.substring(myName.lastIndexOf(" "));
console.log(lastName.trim());
